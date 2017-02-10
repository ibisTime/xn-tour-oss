$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"线路名称",
        field:'',
        visible:false,
        search:true
    },{
		title: '起点',
		field: ''
	},{
		title:"终点",
		field:"",
		
	},{
		title:"出发时间",
		field:"",
        search:true,
        formatter:dateTimeFormat
    },{
        title:"下单人",
        field:"",
    },{
        title:"联系方式",
        field:""
    },{
        title:"预定人数",
        field:""
    },{
        title:"价格",
        field:"",
        formatter:moneyFormat
    },{
		title:"状态",
		field:"",
        type:"select",
        key:"carord_status",
        search:true
	},{
		title:"备注",
		field:"",
	}];
	buildList({
		router: 'car',
		columns: columns,
		pageCode: '',
		deleteCode: ''
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
                    json: {"id": selRecords[0].id}
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
            if(selRecords[0].status == 2){
                toastr.warning("已经接单");
                return;
            }
            
            if(selRecords[0].status == 0){
                toastr.warning("该订单已经取消");
                return;
            }

            confirm("确认取消该订单？").then(function() {
                reqApi({
                    code: '',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    sucDetail();
                });
            });

        });
        $('#finishBtn').click(function() {
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

            confirm("确认该订单已经完成？").then(function() {
                reqApi({
                    code: '',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                  toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });




});