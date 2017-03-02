$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"线路名称",
        field:"name",
        search:true,
		visible:false
    },{
		field1:"dateStart",
		field2:"dateEnd",
		title1:"出行时间",
        type1:"datetime",
		search:true,
		visible:false
	},
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
        key:"cporder_status",
        formatter:Dict.getNameForList("cporder_status"),
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
            if(selRecords[0].status !=1){
                toastr.warning("该订单不是待接单状态");
                return;
            }
            window.location.href="carpool_rece.html?code="+selRecords[0].code;

        });
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status != 1 &&  selRecords[0].status!=0){
                toastr.warning("该订单不能被取消");
                return;
            }
            confirm("确认取消该订单？").then(function() {
                reqApi({
                    code: '618245',
                    json: {"code": selRecords[0].code}
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
            if(selRecords[0].status !=32){
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

            
        $('#detail2Btn').click(function() {
                var selRecords = $('#tableList').bootstrapTable('getSelections');
                if(selRecords.length <= 0){
                    toastr.info("请选择记录");
                    return;
                }
                window.location.href="carpoli.html?code="+selRecords[0].code;

            });

});