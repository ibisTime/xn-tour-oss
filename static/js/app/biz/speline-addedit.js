$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '乘车地点',
		field: '',
		required: true,
		type:"select",
        key:"",
		readonly:view
	},{
		title: '类型',
		field: '',
		type:'select',
		key:'',
		required: true,
		readonly:view
	}, {
		title: '核载人数',
		field: '',
		number:true,
		required: true,
		readonly:view
	},{
		title: '起点',
		field: '',
		required: true,
		readonly:view,
        maxlength:32
	}, {
		title: '终点',
		field: '',
		maxlength:32,
		required: true,
		readonly:view
	},{
		title:"价格",
		field:"",
	    amount:true,
		formatter:moneyFormat,
		required: true,
		readonly:view
	}, {
		title: '价格',
		field: '',
		amount:true,
		formatter:moneyFormat,
		required: true,
		readonly:view
	},{
		title: '发生时间',
		field: '',
		type:"",
		required: true,
		readonly:view,
        //formatter:timeFormat
	},{
        titile:"备注",
        field:'',
        maxlength:255
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