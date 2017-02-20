$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	var typeObj = {};
	//var 
	reqApi({
		code: "806052",
		json: {
			location:"goout"
		},
		sync: true
	}).then(function(res){
		$.each(res, function(i, r){
			if ( r.code==31 ||r.code==32||r.code==35||r.code==38)
				typeObj[r.code] = r.name;
		});
	});
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
		 
		readonly:view
	},{
		title: '类型',
		field: 'type',
		type:'select',
		data:typeObj,
		required: true,
		readonly:view,
	}, {
		title: '核载人数',
		field: 'maxNum',
		number:true,
		required: true,
		readonly:view
	},{
		title: '起点',
		field: 'startSite',
		type:"select",
		key:"zero_type",
		required: true,
		readonly:view,
       
	}, {
		title: '终点',
		field: 'endSite',
		type:"select",
		key:"destination_type",
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
		type:"date",
		required: true,
		readonly:view,
        formatter:dateFormat
	},{
		title:"图片",
		field:"pic",
		type:"img",
		required: true,
		readonly:view,
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