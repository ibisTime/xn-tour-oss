$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '针对线路',
		field: '',
		type:"select",
		key:"",
		required: true,
		readonly:view
	},{
		title: '攻略名称',
		field: '',
		maxlength:32,
		required: true,
		readonly:view
	}, {
		title: '最佳旅行时间',
		field: '',
		maxlength:32,
		readonly:view
	},{
		title: '攻略类型',
		field: '',
		type:'select',
		key:'',
		readonly:view
	}, {
		title: '攻略形式',
		field: '',
		type:'select',
		key:'',
		
		readonly:view
	},{
		title: '攻略详述',
		field: '',
		type:"text",
		required: true,
		readonly:view,
		maxlength:255
	},{
		title:"备注",
		field:"",
		maxlength:255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '',
		editCode: '',
		detailCode: ''
	});
	
	
});