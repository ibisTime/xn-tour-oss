$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title:"订单编号",
        field:"code1",
        formatter:function(v,data){
         return  data.code
        },
        readonly:view
    },{
		title: '下单人',
		field: 'applyUser',
        readonly:view
       
    },
    // {
	// 	title: '线路编号',
	// 	field: 'lineCode',
    //     readonly:view
    // },
    {
        title:'支付订单号',
        field:"payCode",
        readonly:view
    },
      {
		title:"支付金额",
		field:"amount",
		formatter:moneyFormat,
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
        key:"torder_status",
        formatter:Dict.getNameForList("torder_status"),
        readonly:view
       
	},{
        title:"下单说明",
        field:"applyNote"
    }];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		//addCode: '',
		//editCode: '',
		detailCode: '618192'
	});
});