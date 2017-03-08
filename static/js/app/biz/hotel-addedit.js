$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var categoryObj = {};
    var items = Dict.getName("hotel_ss").map(function(item) {
        return {
            key: item.dkey,
            value: item.dvalue
        };
    });


    reqApi({
        code: "806052",
        json: {
            location: "depart_hotel"
        },
        sync: true
    }).then(function(res) {
        $.each(res, function(i, r) {
            if (r.code != 4)
                categoryObj[r.code] = r.name;
        });
    });

    var fields = [{
        title: '酒店名称',
        field: 'name',
        readonly: view,
        required: true,
        maxlength: 32
    }, {
        title: '分类',
        field: 'type',
        type: "select",
        key: "hotel_type",
        readonly: view,
        required: true,
    }, {
        field: "category",
        title: '酒店类别',
        type: 'select',
        data: categoryObj,
        required: true,
        readonly: view,
    }, {
        title: '酒店位置',
        field: "province1",
        required: true,
        type: 'citySelect',
        readonly: view,
    }, {
        title: '详细地址',
        field: 'detail',
        required: true,
        maxlength: 255,
        readonly: view
    }, {
        title: '经度',
        field: 'longitude',
        west: true,
        readonly: view,
        hidden: !view
    }, {
        title: "纬度",
        field: 'latitude',
        north: true,
        readonly: view,
        hidden: !view
    }, {
        title: "酒店电话",
        field: 'telephone',
        required: true,
        tm: true,
        readonly: view
    }, {
        title: '酒店特色',
        field: 'specialDesc',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        readonly: view,

        required: true
    }, {
        title: '酒店美食',
        field: 'foodDesc',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        required: true,
        readonly: view,
    }, {
        title: '设施服务',
        field: 'description',
        type: 'checkbox',
        items: items,
        required: true,
        readonly: view
    }, {
        title: '酒店图片',
        field: 'pic1',
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: '酒店轮播图',
        field: 'pic2',
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 255,
        readonly: view
    }];


    var options = {
        fields: fields,
        code: code,
        view: view,
        addCode: "618000",
        editCode: "618003",
        detailCode: '618012',
        dataType: "hotal"
    };

    buildDetail(options);

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
            if (data.longitude) {
                reqApi({
                    code: code ? options.editCode : options.addCode,
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            } else {
                var addr = data.province + data.city + data.area + data.detail;
                var myGeo = new BMap.Geocoder();
                myGeo.getPoint(addr, function(point) {
                    if (point) {
                        data.longitude = point.lng;
                        data.latitude = point.lat;
                        reqApi({
                            code: code ? options.editCode : options.addCode,
                            json: data
                        }).done(function(data) {
                            sucDetail();
                        });
                    } else {
                        alert("无法解析当前地址的经纬度!");
                    }
                });
            }
        }
    });
});
