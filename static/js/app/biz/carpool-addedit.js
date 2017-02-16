$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '拼车单号',
		field: 'carpoolCode',
		readonly:true
	},{
		title: '数量',
		field: 'quantity',
		readonly:true
	},{
		title:"下单人",
		field:"applyUser"
	}, {
		title: '下单说明',
		field: 'applyNote',
		readonly:true
	},{
		title: '出发时间',
		field: 'outDatetime',
		readonly:true,
        formatter:dateTimeFormat
	}, {
		title: '起点',
		field: 'startSite',
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
		title: '价格',
		field: 'price',
		readonly:true,
        formatter:moneyFormat
    },{
        title:"状态",
        field:"status",
        key:"carpord_status",
        type:"select",
        readonly:true
    }];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		// addCode: '',
		// editCode: '',
		detailCode: '618255'
	});
	
	
});