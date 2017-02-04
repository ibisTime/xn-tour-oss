$(function() {
	var code = getQueryString('code');
	
	var fields = [ {
		title: '针对路线',
		field: '',
		type:"select",
		key:"zd_router",
		formatter:Dict.getNameForList("zd_router"),
		required: true
	},{
		title: 'Tab名称',
		field: '',
		type:'select',
		key:"tab_type",
		formatter: Dict.getNameForList('tab_type'),
		required: true
	}, {
		title: '图文详述',
		field: '',
		type: 'textarea',
		required: true,
		maxlength:255
	},{
		title: '备注',
		field: 'remark',
		maxlength:255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		addCode: '',
		editCode: '',
		detailCode: ''
	});
	
	
});