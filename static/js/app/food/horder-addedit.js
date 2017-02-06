$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title:"订单编号",
        field:'',
        readonly:view
    },{
		title: '酒店名称',
		field: '',
        readonly:view
	},{
		title: '酒店电话',
		field: '',
        readonly:view
	},{
		title: '酒店地址',
		field: '',
        readonly:view
	},{
		title:"价格",
		field:"",
		formatter:moneyFormat,
        readonly:view
	},{
		title:"房型",
		field:"",
        type:"select",
        key:"home_type",
        readonly:view
	},{
		title:"房间号",
		field:"",
        readonly:view
	},{
		title:"酒店状态",
		field:"",
        type:"select",
        key:"hotel_status",
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
        key:"horder_status",
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