$(function() {
	var code = getQueryString('code');
	 
	var items = Dict.getName("router_type").map(function(item){
        return {
            key: item.dkey,
            value: item.dvalue
        };
    });

	var fields = [ {
		title: '线路名称',
		field: 'name',
		
		maxlength:32,
		readonly:true
	},{
		title: '线路类型',
		field: 'type',
		type: 'checkbox',
        items:items,
		
		readonly:true
	},
	{
    	field : 'category',
		type:"select",
		listCode:"806052",
        keyName:"code",
        valueName:"name",
		params:{
			location:"travel"
		},
		afterSet:function(v,r){
          if (v=="travel"){
			  return "旅游"
		  }
		},
		
		readonly:true ,
		title :"类别",
    },
	 {
		title: '线路形式',
		field: 'style',
		type:'select',
		key:'router_type2',
	 
		
		readonly:true
	},{
		title: '旅行时间',
		field: 'travelTime',
		type:'select',
		key:'router_time',
		
		readonly:true
	}, {
		title: '集合地',
		field: 'joinPlace',
		
		readonly:true
	},{
		title:"出行日期",
		field:"outDate",
		type: "date",
        formatter:dateFormat,
		
		readonly:true
	}, {
		title: '线路价格',
		field: 'price',
        amount:true,
		required: true,
		readonly:true
	},{
		title: 'UI位置',
		field: 'location',
		type:'select',
		key:"hotel_location",
		required: true,
		readonly:true
	},
	{
		title: 'UI顺序',
		field: 'orderNo',
		required: true,
		readonly:true
	},{
		title: '线路图片',
		field: 'pathPic',
		type:"img",
		readonly:true
	},{
		title:'备注',
		field:"remark",
		maxlength:255,
		readonly:true

	}];
	
	buildDetail({
		fields: fields,
		code: code,    
		detailCode: '618102',
		 
	});
	$("#subBtn").remove();
	 
});