$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    var items = Dict.getName("router_type").map(function(item) {
        return {
            key: item.dkey,
            value: item.dvalue
        };
    });

    var fields = [{
            title: '线路名称',
            field: 'name',
            required: true,
            maxlength: 32,
            readonly: view
        }, {
            title: '线路类型',
            field: 'type',
            type: 'checkbox',
            items: items,
            required: true,
            readonly: view
        },
        {
            field: 'category',
            type: "select",
            listCode: "806052",
            keyName: "code",
            valueName: "name",
            params: {
                location: "travel"
            },
            afterSet: function(v, r) {
                if (v == "travel") {
                    return "旅游"
                }
            },
            required: true,
            readonly: view,
            title: "类别",
        },
        {
            title: '线路形式',
            field: 'style',
            type: 'select',
            key: 'router_type2',

            required: true,
            readonly: view
        }, {
            title: '旅行时间',
            field: 'travelTime',
            type: 'select',
            key: 'router_time',
            required: true,
            readonly: view
        }, {
            title: '集合地',
            field: 'joinPlace',
            required: true,
            readonly: view
        },
        //  {
        //     title: "出行日期",
        //     field: "outDate",
        //     type: "date",
        //     formatter: dateFormat,
        //     required: true,
        //     readonly: view
        // },
        {
            title: '价格',
            field: 'price',
            amount: true,
            formatter: moneyFormat,
            required: true,
            readonly: view
        }, {
            title: '线路图片',
            field: 'pathPic',
            type: "img",
            required: true,
            readonly: view
        }, {
            title: '组团社名',
            field: 'groupName',
            required: true,
            maxlength: 32,
            readonly: view
        }, {
            title: '组团社电话',
            field: 'groupMobile',
            required: true,
            maxlength: 32,
            readonly: view
        }, {
            field:"province1",
            title: '目的地',
            required: true,
            type: 'citySelect',
            formatter: function (v, data) {
                      var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
                      return result || "-";
                  },
                    afterSet: function (v, data) {
                      if (view) {
                          $('#province').html(data.province);
                          data.city && $('#city').html(data.city);
                          data.area && $('#area').html(data.area);
                          }
                  },
            readonly:view
        }, {
            title: '详细地址',
            field: 'detail',
            required: true,
            maxlength: 100,
            readonly:view
        },{
            title: '经度',
            field: 'longitude',
            required: true,
            west:true,
            readonly:view,
            hidden:!view,
        },{
            title: '纬度',
            field: 'latitude',
            required: true,
            north:true,
            hidden:!view,
            readonly:view
        },{
            title: "最早出发日期",
            field: "outDateStart",
            type: "date",
            formatter: dateFormat,
            required: true,
            readonly: view
        }, {
            title: "最晚出发日期",
            field: "outDateEnd",
            type: "date",
            formatter: dateFormat,
            required: true,
            readonly: view
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: '618090',
        editCode: '618091',
        detailCode: '618102',

    });

     $('#subBtn').off("click").click(function() {
        if ($('#jsForm').valid()) {
            var data = $('#jsForm').serializeObject();
            $('#jsForm').find('.btn-file [type=file]').parent().next().each(function(i, el) {
                var values = [];
                var imgs = $(el).find('.img-ctn');
                imgs.each(function(index, img) {
                    values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                });
                data[el.id] = values.join('||');
            });
            if ($('#jsForm').find('#province')[0]) {
                var province = $('#province').val();
                var city = $('#city').val();
                var area = $('#area').val();
                if (!city) {
                    data['city'] = province;
                    data['area'] = province;
                } else if (!area) {
                    data['city'] = province;
                    data['area'] = city;
                }
            }
            for (var i = 0, len = fields.length; i < len; i++) {
                var item = fields[i];
                if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                    data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                } else if (item.emptyValue && !data[item.field]) {
                    data[item.field] = item.emptyValue;
                } else if (item.readonly && item.pass) {
                    data[item.field] = $('#' + item.field).attr('data-value') || $('#' + item.field).html();
                }
                if (item.type == 'select' && item.passValue) {
                    data[item.field] = $('#' + item.field).find('option:selected').html();
                }
                if (item.type == "checkbox") {
                    data[item.field] = $.isArray(data[item.field]) ? data[item.field].join(",") : data[item.field];
                }
            }
             data['id'] = data['code'];

                var addr = data.province + data.city + data.area + data.detail;
                var myGeo = new BMap.Geocoder();
                myGeo.getPoint(addr, function(point) {
                    if (point) {
                        data.longitude = point.lng;
                        data.latitude = point.lat;
                        reqApi({
                            code: code ? '618091' : '618090',
                            json: data
                        }).done(function(data) {
                            sucDetail();
                        });
                    } else {
                        alert("无法解析当前地址的经纬度!");
                    }
                });

        }
    });


});