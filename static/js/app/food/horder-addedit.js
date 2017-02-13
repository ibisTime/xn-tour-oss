$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [
		{
		title: '订单编号',
		field:"code1",
		 '[value]': 'code',
		readonly:view
	},
	{
		title: '类型',
		field: 'type',
		type:'select',
		key:"hotel_type2",
		formatter:Dict.getNameForList("hotel_type2"),
		readonly:view
	}, {
		title: '酒店编号',
		field: 'hotalCode',
		readonly:view
	},{
		title: "房间类型",
		field: 'roomType',
		type:"select",
		key:"hh_type",
		formatter:Dict.getNameForList("hh_type"),
        readonly:view

	},{
		title: '开始入住时间',
		field: 'startDate',
		formatter:dateFormat,
        readonly:view

	},{
		title: '退住时间',
		field: 'endDate',
		formatter:dateFormat,
        readonly:view
	},
	{
		title:"入住人手机号",
		field:"checkInMobile",
		
        readonly:view
	},
	{
		title:"数量",
		field:"quantity",
         
	},{
		title:"下单人编号",
		field:"applyUser",
        readonly:view
	},{
		title:"下单说明",
		field:"applyNote",
        readonly:view
	},{
		title:"下单时间",
		field:"applyDatetime",
        formatter:dateTimeFormat,
		readonly:view
	},{
		title:"金额",
		field:"amount", 
		formatter:moneyFormat,
		readonly:view
	},{
		title: '支付金额',
		field: 'payAmount',
        formatter:moneyFormat,
        readonly:view
	},{
		title:"状态",
		field:"status",
		key:"gorder_status",
		formatter:Dict.getNameForList("gorder_status"),
        readonly:view
       
	}
];
    
    buildDetail({
		fields: fields,
		code: code,
		view:view,
		// addCode: '',
		// editCode: '',
		detailCode: '618052'
	});
});