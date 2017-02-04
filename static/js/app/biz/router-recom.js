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
		title: '推荐类型',
		field: '',
		type:'select',
		key:"tujian_type",
		formatter: Dict.getNameForList('tujian_type'),
		required: true
	}, {
		title: '内容',
		field: '',
		required: true,
		type: 'textarea',
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