$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '下单人',
		field: '',
		readonly:true
	},{
		title: '手机号',
		field: '',
		readonly:true
	}, {
		title: '身份证号码',
		field: '',
		readonly:true
	},{
		title: '预约时间',
		field: '',
		readonly:true,
        formatter:dateTimeFormat
	}, {
		title: '起点',
		field: '',
		readonly:true
	},{
		title:"终点",
		field:"",
	    readonly:true
	}, {
		title: '预约人数',
		field: '',
		readonly:true
	},{
		title: '价格',
		field: '',
		readonly:true
        formatter:moneyFormat
    },{
        title:"状态"，
        field:"",
        key:"carord_status",
        type:"",
        readonly:true
    },{
        titile:"备注",
        field:'',
        readonly:true
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