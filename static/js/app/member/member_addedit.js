$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: '用户名',
		field: '',
        readonly:view
	},{
		title: '手机号',
		field: '',
        readonly:view
	}, {
		title: '密码',
		field: '',
        readonly:view
	},{
		title:"身份证号",
		field:"",
        readonly:view
	},{
		title:"积分余额",
		field:"",
        readonly:view
	},{
		title: '备注',
		field: '',
        readonly:view
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
		detailCode: ''
	});
 
});