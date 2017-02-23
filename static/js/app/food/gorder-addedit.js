$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title:"订单编号",
        field:'code',
       
        readonly:view
    },{
		title: '商品名称',
		field: 'name',
        readonly:view
	},{
		title: '积分价格',
		field: 'pic2',
        readonly:view
	},{
		title:"人民币价格",
		field:"costPrice",
		formatter:moneyFormat,
        readonly:view
	},{
		title:"商品状态",
		field:"status",
        type:"select",
        key:"good_status",
        readonly:view
	},{
		title: '下单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat,
        readonly:view
	},{
		title:"订单状态",
		field:"status",
        type:"select",
        key:"gorder_status",
        readonly:view
       
	} ];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		detailCode: '618472'
	});
});