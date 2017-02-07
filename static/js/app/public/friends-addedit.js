$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: '名称',
		field: '',
        required:true,
        readonly:view,
        maxlength:32
	},{
		title: '类型',
		field: '',
        type:"select",
        key:"friends_type",
        required:true,
        readonly:view
	}, {
		title:"链接",
		field:"",
        url:true,
        required:true,
        readonly:view
	}, {
		title: '备注',
		field: '',
        readonly:view,
        maxlength:255
	},{
		title: 'logo',
		field: '',
        readonly:view,
        type:"img"
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
        addCode:"",
        editCode:"",
		detailCode: ''
	});
 
});