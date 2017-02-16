$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [{
		title:"专线名称",
		field:"name",
		required:true,
		maxlength:32,
		readonly:view
	}, {
		title: '乘车地点',
		field: 'address',
	    required:true,
		maxlength:32,
		// type:"select",
        // key:"",
		readonly:view
	},{
		title: '类型',
		field: 'type',
		type:'select',
		listCode:"806052",
        keyName:"code",
        valueName:"name",
        params:{
        location:"goout",
        },
		required: true,
		readonly:view
	}, {
		title: '核载人数',
		field: 'maxNum',
		number:true,
		required: true,
		readonly:view
	},{
		title: '起点',
		field: 'startSite',
		required: true,
		readonly:view,
        maxlength:32
	}, {
		title: '终点',
		field: 'endSite',
		maxlength:32,
		required: true,
		readonly:view
	},{
		title:"价格",
		field:"price",
	    amount:true,
		formatter:moneyFormat,
		required: true,
		readonly:view
	},{
		title: '出发时间',
		field: 'outDatetime',
		type:"datetime",
		required: true,
		readonly:view,
        formatter:dateTimeFormat
	},{
		title: '剩余票数',
		field: 'remainNum',
		number:true,
		required: true,
		readonly:view,
	},{
        title:"备注",
        field:'remark',
        maxlength:255
    }];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '618160',
		editCode: '618162',
		detailCode: '618172'
	});
	
	
});