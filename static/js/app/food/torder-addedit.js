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
		field: 'realName',
        readonly:view
       
    },
    {
		title: '联系方式',
		field: 'mobile',
        readonly:view
    },
    {
        title:'专线名称',
        field:"name",
        formatter:function(v,data){
            return  data.specialLine.name;
        },
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
        key:"sporder_status",
        formatter:Dict.getNameForList("sporder_status"),
        readonly:view
       
	},{
        title:"下单说明",
        field:"applyNote"
    }];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		detailCode: '618192'
	});
});