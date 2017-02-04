$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '线路名称',
		field: '',
		required: true,
		maxlength:32,
		readonly:view
	},{
		title: '线路类型',
		field: '',
		type:'select',
		key:'router_type',
		required: true,
		readonly:view
	}, {
		title: '线路形式',
		field: '',
		type:'select',
		key:'router_type2',
		required: true,
		readonly:view
	},{
		title: '时间',
		field: '',
		type:'select',
		key:'router_time',
		required: true,
		readonly:view
	}, {
		title: '集合地',
		field: '',
		type:'select',
		key:'router_di',
		required: true,
		readonly:view
	},{
		title:"出行日期",
		field:"",
		type:"date",
		formatter:dateFormat,
		required: true,
		readonly:view
	}, {
		title: '价格',
		field: '',
		amount:true,
		formatter:moneyFormat,
		required: true,
		readonly:view
	},{
		title: '线路图片',
		field: '',
		type:"img",
		required: true,
		readonly:view
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