$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title: '酒店名称',
        field: 'name',
        readonly:view,
        required: true,
        maxlength:32
    },{
		title: '分类',
		field: 'category',
        type:"select",
        key:"hotel_type",
        readonly:view,
        required: true,
	}, {
        field: 'type',
        title: '酒店类型',
		type:'select',
        required: true,
        key:"hotel_type2",
        readonly:view,
    },{
		title: '酒店位置',
        field:"province1",
		required: true,
		type: 'citySelect',
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
		readonly:view
	}, {
		title: '经度',
		field: 'longitude',
        required: true,
		number:true,
		readonly:view
		// formatter: function(v, r) {
		// 	var res = $.unique([r.province, r.city, r.area]).reverse();
		// 	return res.join(' ') + ' ' + r.address;
		// }
	}, {
        title:"纬度",
        field: 'latitude',
        required: true,
        number:true,
        readonly:view
    }, {
        title:"酒店电话",
        field: 'telephone',
        required: true,
        tm:true,
        readonly:view
    }, {
        title: '酒店特色',
        field: 'specialDesc',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        readonly:view,
        required:true
    }, {
        title: '酒店美食',
        field: 'foodDesc',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        required: true,
        readonly:view,
    },{
        title: '设施服务',
        field: 'description',
        type: 'checkbox',
        items: [{
            "key": "1",
            "value": "停车场"
        }, {
            "key": "2",
            "value": "SPA"
        },{
            "key":"3",
            "value":"餐厅"
        }],
        required: true,
        readonly:view
    }, {
        title: '酒店图片',
        field: 'pic1',
        type: 'img',
        required: true,
        readonly:view
    },{
        title: '酒店轮播图',
        field: 'pic2',
        type: 'img',
        required: true,
        readonly:view
    },{
        title: '最高价格',
        field: 'highPrice',
        amount:true,
        formatter:moneyFormat,
        required: true,
        readonly:view
    },{
        title: '最低价格',
        field: 'lowPrice',
        amount:true,
        formatter:moneyFormat,
        required: true,
        readonly:view
    },{
        title: '状态',
        field: 'status',
        type:"select",
        key:"home_status",
        formatter:Dict.getNameForList("home_status"),
        required: true,
        readonly:view
    },{
        title: 'UI位置',
        field: 'location',
        type:"select",
        key:"hotel_location",
        formatter:Dict.getNameForList("hotel_location"),
        required: true,
        readonly:view
    },{
        title: 'UI次序',
        field: 'orderNo',
        number:true,
        required: true,
        readonly:view
    },{
        title: '酒店法人',
        field: 'orderNo',
        maxlength:32,
        required: true,
        readonly:view
    },{
        title: '备注',
        field: 'remark',
        maxlength:255,
        readonly:view
    }];

    var options = {
        fields: fields,
        code: code,
        view:view,
        addCode:"618000",
        editCode:"618003",
        detailCode: '618012'
    };

     

    buildDetail(options);
});