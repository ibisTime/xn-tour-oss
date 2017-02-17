$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '下单人',
		field: 'booker',
		readonly:true
	},
	{
		title: '手机号',
		field: 'mobile',
		formatter:function(v,data){
          return data.res.mobile
		},
		readonly:true,
	},
	 {
		title: '出行时间',
		field: 'outDatetime',
		formatter:dateTimeFormat,
		readonly:true
	}, {
		title: '预约时间',
		field: 'bookDatetime',
		readonly:true,
        formatter:dateTimeFormat
	}, {
		title: '起点',
		field: 'midSite',
		readonly:true
	},{
		title:"终点",
		field:"endSite",
	    readonly:true
	}, {
		title: '预约人数',
		field: 'totalNum',
		readonly:true
	},{
		title: '支付金额',
		field: 'payAmount',
		readonly:true,
        formatter:moneyFormat
    },{
        title:"状态",
        field:"status",
        key:"carord_status",
        type:"select",
        readonly:true
    },{
        title:"备注",
        field:'remark',
        readonly:true
    }];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		detailCode: '618222'
	});
	
	
});