$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title:"订单编号",
        field:'',
        readonly:view
    },{
		title: '线路名称',
		field: '',
        readonly:view
       
    },{
        title: '线路名称',
		field: '',
        type:'select',
        key:"router_time",
        readonly:view
    },{
        title: '线路形式',
		field: '',
        type:'select',
        key:"router_type2",
        readonly:view
    },{
        title: '线路类型',
		field: '',
        type:'select',
        key:"router_type",
        readonly:view
    }, {
		title:"人民币价格",
		field:"",
		formatter:moneyFormat,
        readonly:view
	},{
		title:"线路状态",
		field:"",
        type:"select",
        key:"router_status",
        readonly:view
	},{
		title: '下单时间',
		field: '',
        formatter:dateTimeFormat,
        readonly:view
	},{
		title:"订单状态",
		field:"",
        type:"select",
        key:"rorder_status",
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