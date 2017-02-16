$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },
    // {
    //     title:"线路名称",
    //     field:'',
    //     visible:false,
    //     search:true
    // },
    {
		title: '起点',
		field: 'startSite'
	},{
		title:"终点",
		field:"endSite",
		
	},{
        title:"司机姓名",
        field:'driver',
    },{
        title:"联系方式",
        field:"mobile"
    }, {
        title:"拼车人数",
        field:"totalNum"
    },{
        title:"总价格",
        field:"totalPrice",
        formatter:moneyFormat
    },{
        title:"出发时间",
        field:"outDatetime",
        formatter:dateTimeFormat
    },{
		title:"状态",
		field:"status",
        type:"select",
        key:"cpord_status",
        formatter:Dict.getNameForList("cpord_status"),
        search:true
	},{
		title:"备注",
		field:"remark",
	}];
	buildList({
		router: 'carpool',
		columns: columns,
		pageCode: '618250',
		  
	});

    $('#receiveBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status == 2){
                toastr.warning("已经接单");
                return;
            }
            
            if(selRecords[0].status == 0){
                toastr.warning("该订单已经取消");
                return;
            }

            confirm("确认接下该订单？").then(function() {
                reqApi({
                    code: '',
                    json: {"orderCode": selRecords[0].code}
                }).then(function() {
                    sucDetail();
                });
            });

        });
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            
            
            if(selRecords[0].status != 2){
                toastr.warning("该订单不能被取消");
                return;
            }

            confirm("确认取消该订单？").then(function() {
                reqApi({
                    code: '618245',
                    json: {"orderCode": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });
        $('#finishBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status !=2){
                toastr.warning("该订单不是待完成状态");
                return;
            }

            confirm("确认该订单已经完成？").then(function() {
                reqApi({
                    code: '618247',
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
            if(selRecords[0].status == 2){
                toastr.warning("已经接单");
                return;
            }
            
            if(selRecords[0].status == 0){
                toastr.warning("该订单已经取消");
                return;
            }
          window.location.href ="carpool_check.html?code="+selRecords[0].code;
             

        });



});