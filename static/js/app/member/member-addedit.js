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
		title:"身份证号",
		field:"idNo",
        readonly:view
	}, {
		title: '备注',
		field: 'remark',
        readonly:view
	}];
	
	buildDetail({
		fields: fields,
		code: {
			userId: code
		},
        view:view,
		detailCode: '805056'
	});
 
});