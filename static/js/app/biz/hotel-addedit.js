$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var categoryObj = {};
     var descriptionDict = Dict.getName("hotel_ss"),
        items = [];
    for(var i = 0; i < descriptionDict.length; i++){
        items.push({
            key: descriptionDict[i].dkey,
            value: descriptionDict[i].dvalue
        });
    }

   
	reqApi({
		code: "806052",
		json: {
			location:"depart_hotel"
		},
		sync: true
	}).then(function(res){
		$.each(res, function(i, r){
			if ( r.code==1 ||r.code==2||r.code==3||r.code==5||r.code==6||r.code==7||r.code==8)
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
        // listCode:"806052",
        // keyName:"code",
        // valueName:"name",
        // params:{
        // location:"depart_hotel"
        // },
        data:categoryObj,
        required: true,
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
        // searchParams:{
        //     type:"1",
        // },
        //  urlParams: {
        //      type:"1",
        
        //  }
    };

     

    buildDetail(options);
});