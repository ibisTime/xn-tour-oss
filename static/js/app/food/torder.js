$(function() {
	 
	// reqApi({
	// 	code: "806052",
	// 	json: {
	// 		location:"goout"
	// 	},
	// 	sync: true
	// }).then(function(res){
	// 	$.each(res, function(data){
	// 		if ( data.code==38){
    //             return  "旅游专线";
    //         }else if ( data.code==32){
    //             return  "快客专线";
    //         }else  if ( data.code==31){
    //             return  "机场专线";
    //         }else  if ( data.code==35){
    //             return  "预订大巴";
    //         } 
            
	// 	});
	// });
   

	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"订单编号",
        field:'code',
        search:true
    }, {
		title: '出行类型',
		field: 'type', 
        formatter:function(v,data){
            return  data.specialLine.type;
        },
       // type:"select",
        search:true
	},{
		title:"出发人数",
		field:"quantity",
	}, {
		title: '价格',
		field: "amount",  
        formatter:moneyFormat
    },{
        title:"下单时间",
        field:'applyDatetime',
        formatter:dateTimeFormat
    },{
		title:"订单状态",
		field:"status",
        type:"select",
        key:"sporder_status",
       formatter:Dict.getNameForList("sporder_status"),
	},{
		title:"买家嘱咐",
		field:"remark",
	}];
	buildList({
		router: 'torder',
		columns: columns,
		pageCode: '618190',
	 
	});
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status != 1 && selRecords[0].status!=0){
                toastr.info("该订单状态不能被取消");
                return;
            }
                confirm("确认取消该订单？").then(function() {
                    reqApi({
                        code: '618183',
                        json: {"code": selRecords[0].code}
                    }).then(function() {
                        toastr.info("操作成功");
                        $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                    });
                });

        });
       $('#check2Btn').click(function() {
           var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
			if(selRecords[0].status ==2){
                window.location.href ="horder_check.html?code="+selRecords[0].code;
            }else{
                toastr.info("该订单不是待审核状态");
                return;
            }

        });
       
});