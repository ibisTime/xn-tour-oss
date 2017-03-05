$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var categoryObj = {};
    var items = Dict.getName("hotel_ss").map(function(item){
        return {
            key: item.dkey,
            value: item.dvalue
        };
    });

   
	reqApi({
		code: "806052",
		json: {
			location:"depart_hotel"
		},
		sync: true
	}).then(function(res){
		$.each(res, function(i, r){
			if ( r.code != 4 )
				categoryObj[r.code] = r.name;
		});
	});



    var fields = [{
        title: '酒店名称',
        field: 'name',
        readonly:view,
        required: true,
        maxlength:32
    },{
		title: '分类',
		field: 'type',
        type:"select",
        key:"hotel_type",
        readonly:view,
        required: true,
	}, {
        field: "category",
        title: '酒店类别',
		type:'select',
        data:categoryObj,
        required: true,
        readonly:view,
    },{
		title: '酒店位置',
        field:"province1",
		required: true,
		type: 'citySelect',
		readonly:view,
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
        west:true,
		readonly:view,
	}, {
        title:"纬度",
        field: 'latitude',
        required: true,
        north:true,
        readonly:view,
      
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
        // formatter:function(v,data){
        //     return data.hotal.specialDesc
        // },
        required:true
    }, {
        title: '酒店美食',
        field: 'foodDesc',
        type: "textarea",
        //  formatter:function(v,data){
        //     return data.hotal.foodDesc
        // },
        normalArea: true,
        maxlength: 255,
        required: true,
        readonly:view,
    },{
        title: '设施服务',
        field: 'description',
        type: 'checkbox',
        items:items,
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
    }, {
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
        detailCode: '618012',
        dataType: "hotal"
        // searchParams:{
        //     type:"1",
        // },
        //  urlParams: {
        //      type:"1",
        
        //  }
    };

     

    buildDetail(options);
});