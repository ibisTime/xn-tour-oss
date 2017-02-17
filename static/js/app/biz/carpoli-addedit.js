$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
        title:"拼车单号",
        field:'carpoolCode',
        readonly:true,
    },{
		title: '数量',
		field: 'quantity',
        readonly:true,
	},{
		title:"下单人",
		field:"applyUser",
        readonly:true,
		
	},{
		title:"下单说明",
		field:"applyNote",
         readonly:true,
        
    },{
        title:"下单时间",
        field:"applyDatetime",
        formatter:dateTimeFormat,
         readonly:true,  
    },{
        title:"首次支付金额",
        field:"firstPayAmount",
        formatter:moneyFormat ,
         readonly:true, 
    },
    {
        title:"首次支付编号",
        field:"firstPayCode",
        readonly:true,
         
    },
    {
        title:"第二次支付金额",
        field:"firstPayAmount",
        formatter:moneyFormat,
         readonly:true,    
    },
    {
        title:"第二次支付编号",
        field:"secondpayCode",
         readonly:true,
     }, 
     {
		title:"状态",
		field:"status",
        type:"select",
        key:"carpoold_status",
        formatter:Dict.getNameForList("carpoold_status"),
        search:true,
         readonly:true,
	} ];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		detailCode: '618255'
	});
	
	
});