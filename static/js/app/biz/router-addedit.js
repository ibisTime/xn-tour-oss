$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '线路名称',
		field: 'name',
		required: true,
		maxlength:32,
		readonly:view
	},{
		title: '线路类型',
		field: 'type',
		type:'select',
		key:'router_type',
		formatter:Dict.getNameForList("router_type"),
		required: true,
		readonly:view
	},{
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
		required: true,
		readonly:view ,
		title :"类别",
    }, {
		title: '线路形式',
		field: 'style',
		type:'select',
		key:'router_type2',
		formatter:Dict.getNameForList("router_type2"),
		required: true,
		readonly:view
	},{
		title: '旅行时间',
		field: 'travelTime',
		type:'select',
		key:'router_time',
		required: true,
		readonly:view
	}, {
		title: '集合地',
		field: 'joinPlace',
		//type:'select',
//		key:'router_di',
//		formatter:Dict.getNameForList("router_di"),
		required: true,
		readonly:view
	},{
		title:"出行日期",
		field:"outDate",
		type: "datetime",
        formatter:dateTimeFormat,
		required: true,
		readonly:view
	}, {
		title: '价格',
		field: 'price',
		amount:true,
		formatter:moneyFormat,
		required: true,
		readonly:view
	},{
		title: '线路图片',
		field: 'pathPic',
		type:"img",
		required: true,
		readonly:view
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '618090',
		editCode: '618091',
		detailCode: '618102',
		 
	});
	
	
});