$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var items = Dict.getName("hotel_ss").map(function(item){
        return {
            key: item.dkey,
            value: item.dvalue
        };
    });

    var fields = [{
		title: '类型',
		field: 'type',
        type:"hidden",
        value:"4"
	},{
		title: '',
		field: 'category',
        type:"hidden",
        value:"4"
	},{
        title: '民宿主人',
        field: 'realName',
        formatter:function(v,data){
           return data.oriData.realName;
        },
        readonly:view,
        required: true,
        maxlength:32
    }, {
        title: '身份证件',
        field: 'idNo',
        formatter:function(v,data){
           return data.oriData.idNo;
        },
        idCard :true,
        readonly:view,
        required: true,
    }, {
        field: 'mobile',
        title: '联系电话',
		mobile:true,
        formatter:function(v,data){
           return data.oriData.mobile;
        },
        required: true,
        readonly:view,
    },{
        field: 'loginName',
        title: '登录账号',
        mobile:true,
        placeholder:"请使用手机号作为登录账号",
         formatter:function(v,data){
           return data.oriData.loginName;
        },
		maxlength:32,
        required: true,
        readonly:view,
    },{
        field: 'name',
        title: '民宿名称',
		maxlength:32,
        required: true,
        readonly:view,
    },{
        field:"province1",
		title: '民宿位置',
		type: 'citySelect',
        required: true,
        readonly:view,
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
	}, {
		title: '详细地址',
		field: 'detail',
		required: true,
		maxlength: 255,
	}, {
		title: '经度',
		field: 'longitude',
        required: true,
		west:true,
        readonly: view,
        hidden: !view
	}, {
        title:"纬度",
        field: 'latitude',
        required: true,
        north:true,
        readonly: view,
        hidden: !view
    }, {
        title:"民宿电话",
        field: 'telephone',
        required: true,
        tm:true,
        readonly:view
    }, {
        title: '民宿特色',
        field: 'specialDesc',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        readonly:view,
        required: true,
    }, {
        title: '民宿美食',
        field: 'foodDesc',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        readonly:view,
        required:true
    },{
        title: '民宿图片',
        field: 'pic1',
        type: 'img',
        required: true,
        readonly:view
    },{
        title: '民宿缩略图',
        field: 'pic2',
        type: 'img',
        required: true,
        readonly:view
    } ,{
        title: '设施服务',
        field: 'description',
        type: 'checkbox',
        items: items,
        readonly:view,
        required:true
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 255,
        readonly: view
    }];

    var options = {
        fields: fields,
        code: code,
        view:view,
        addCode:"618001",
        editCode:"618003",
        detailCode: '618012',
        searchParams:{
            type:"4",

        },
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
    });    


});