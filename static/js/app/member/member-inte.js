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
        readonly:view
	},{
		title: '业务类型',
		field: '',
        type :"select",
        key : "inte_type",
        readonly:view
	}, {
		title: '商品名称',
		field: '',
        readonly:view
	},{
		title:"积分价格",
		field:"",
        readonly:view
	},{
		title:"人民币价格",
		field:"",
        formatter:moneyFormat,
        readonly:view
	},{
		title:"购买日期",
		field:"",
        formatter:dateTimeFormat,
        readonly:view
	},{
		title: '商品状态',
		field: '',
        type :"select",
        key : "good_status",
        readonly:view
	},{
		title: '积分余额',
		field: '',
        readonly:view
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
		detailCode: '805056'
	});
 
});