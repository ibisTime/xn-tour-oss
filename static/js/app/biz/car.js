$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },
    // {
    //     title:"线路名称",
    //     field:'name',
    //     visible:false,
    //     search:true
    // },
    {
		title: '起点',
		field: 'startSite',
        search:true
	},{
		title:"终点",
		field:"endSite",
		
	},{
		title:"出发时间",
		field:"outDatetime",
        formatter:dateTimeFormat
    },{
        title:"支付金额",
        field:"payAmount",
        formatter:moneyFormat
    },{
        title:"下单人",
        field:"booker",
        formatter:function(v,data){
            return data.res.loginName
        }
    },{
        title:"联系方式",
        field:"mobile",
        formatter:function(v,data){
            return data.res.mobile
        }
    },{
        title:"预定人数",
        field:"totalNum"
    },{
        title:"价格",
        field:"price",
        formatter:moneyFormat
    },{
		field1:"dateStart",
		field2:"dateEnd",
		title1:"出行时间",
        type1:"datetime",
		search:true,
		visible:false
	},{
		title:"状态",
		field:"status",
        type:"select",
        key:"order_status",
        formatter:Dict.getNameForList("order_status"),
        search:true
	},{
		title:"备注",
		field:"remark",
	}];
	buildList({
		router: 'car',
		columns: columns,
		pageCode: '618220',
         
		//deleteCode: ''
	});

    $('#receiveBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status != 1){
                toastr.warning("该订单不是待接单状态 ");
                return;
            }
            confirm("确认接下该订单？").then(function() {
                reqApi({
                    code: '618211',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                     toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status != 1 && selRecords[0].status!=0){
                toastr.warning("该订单不是可以取消的状态");
                return;
            }
            confirm("确认取消该订单？").then(function() {
                reqApi({
                    code: '618215',
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
            if(selRecords[0].status != 32){
                toastr.warning("该订单不是待完成的状态");
                return;
            }


            confirm("确认该订单已经完成？").then(function() {
                reqApi({
                    code: '618212',
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
            if(selRecords[0].status != 2){
                toastr.warning("该订单不是待审核状态");
                return;
            }
            window.location.href="car_check.html?code="+selRecords[0].code;
        });


});