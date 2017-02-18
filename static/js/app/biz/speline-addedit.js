$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	//var 


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
		
		// listCode:"806052",
        // keyName:"code",
        // valueName:"name",
        // params:{
        // location:"goout"
        // },
		data:{
             "sp1":"机场专线",
              "sp2":"快客专线",
			  "sp3":"旅游专线",
		},
		required: true,
		readonly:view,
		afterSet:function(v,data){
			if (v=="sp1"){
				return "机场专线"
			}
			if (v=="sp2"){
				return "快客专线"
			}
			if (v=="sp3"){
				return "旅游专线"
			}
		}
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