$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '针对线路',
		field: 'lineCode',
		type:"select",
		listCode:"618101",
		keyName:"code",
		valueName:"{{name.DATA}}",
		required: true,
		readonly:view
	},{
		title: '攻略名称',
		field: 'title',
		maxlength:32,
		required: true,
		readonly:view
	}, {
		title: '最佳旅行时间',
		field: 'bestDate',
		required: true,
		maxlength:32,
		readonly:view
	},{
		title: '攻略类型',
		field: 'type',
		type:'select',
		required: true,
		key:'router_type',
		readonly:view
	},{
		title: '攻略形式',
		field: 'style',
		type:'select',
		required: true,
		key:'router_type2',	
		readonly:view
	}, {
		title:"攻略缩略图",
		field:"pic",
		type:"img",
		required: true,
	},{
		title: '攻略详述',
		field: 'description',
		type:"textarea",
		required: true,
		readonly:view,
	},{
		title:"备注",
		field:"remark",
		maxlength:255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '618110',
		editCode: '618112',
		detailCode: '618116'
	});
	
	
});