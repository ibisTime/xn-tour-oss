$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"订单编号",
        field:'code',
        search:true
    },{
		title: '线路编号',
		field: 'lineCode',
       
    }, {
        title: '集合地',
		field: 'joinPlace',
        formatter:function(v,data){
            return data.line.joinPlace;
        },
         
    },{
        title: '线路时间',
		field: 'travelTime',
         formatter:function(v,data){
            return data.line.travelTime;
        },
        
    }, 
    // {
	// 	title:"线路形式",
	// 	field:"style",
    //     type:"select",
    //     formatter:function(v,data){
    //         return data.line.style;
    //     },
    //     key:"router_type2",
    //     formatter:Dict.getNameForList("router_type2"),
		
	// },{
	// 	title:"线路类型",
	// 	field:"type",
    //     type:"select",
    //     formatter:function(v,data){
    //         return data.line.type;
    //     },
    //     key:"router_type",
    //     formatter:Dict.getNameForList("router_type"),
	// },
    {
		title: '价格',
		field: 'amount',
        formatter:moneyFormat
	},{
		title: '下单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat
	},{
		title:"订单状态",
		field:"status",
        type:"select",
        key:"rorder_status",
        formatter:Dict.getNameForList("rorder_status"),
	},{
		title:"买家嘱托",
		field:"applyNote"
	}];
	buildList({
		router: 'rorder',
		columns: columns,
		pageCode: '618150',
		 
	});

         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            
            if(selRecords[0].status !=2){
                   toastr.info("该订单不能被取消");
                return;    
            }else{
                confirm("确认取消该订单？").then(function() {
                    reqApi({
                        code: '618143',
                        json: {"code": selRecords[0].code,remark:"取消订单"}
                    }).then(function() {
                    toastr.info("操作成功");
                        $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                    });
                  });
            }
            
        });
         
         $('#check2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status ==6){
                window.location.href ="rorder_check.html?code="+selRecords[0].code;
            }else{
                toastr.info("该订单不是待审核状态");
                return;
            }
            
        });
});