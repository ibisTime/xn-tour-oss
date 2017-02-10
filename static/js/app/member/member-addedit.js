$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: '用户名',
		field: 'loginName',
		  
        readonly:view
	},{
		title: '手机号',
		field: 'mobile',
		mobile:true,
        readonly:view
	}, {
		title: '密码',
		field: 'loginPwd',
        readonly:view
	},{
		title:"身份证号",
		field:"idNo",
        readonly:view
	},{
		title:"积分余额",
		field:"",
        readonly:view
	},{
		title: '备注',
		field: 'remark',
        readonly:view
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
		detailCode: '805056'
	});
 
});