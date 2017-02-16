$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"专线名称",
        field:'specialLineName',
        search:true
    }, {
		title: '下单人编号',
		field: 'applyUser',
	},{
		title:"下单人手机",
		field:"mobile",
		formatter:moneyFormat
	},{
		title:"状态",
		field:"status",
        type:"select",
        key:"travel_type",
	},{
		title: '订单号',
		field: 'payCode',
     
    },{
        title:"下单时间",
        field:'applyDatetime',
        formatter:dateTimeFormat
    },{
		title:"订单状态",
		field:"status",
        type:"select",
        key:"torder_status",
       formatter:Dict.getNameForList("torder_status"),
	}];
	buildList({
		router: 'torder',
		columns: columns,
		pageCode: '618190',
		//deleteCode: ''
	});
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status != 2){
                toastr.info("该订单状态不能被取消");
                return;
            }
           // var msg = selRecords[0].status == 1 ? "确认上架该酒店？": "确认下架该酒店？";

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
            if(selRecords[0].status ==4){
                window.location.href ="torder_check.html?code="+selRecords[0].code;
            }else{
                toastr.info("该订单不是待审核状态");
                return;
            }
            
        });
});