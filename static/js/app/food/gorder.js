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
		title: '商品名称',
		field: 'productName',
        formatter:function(v,data){
            return data.productOrderList.productName
        },
        search:true
	},{
		title: '积分价格',
		field: 'amount1',
	}, {
		title: '下单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat
    } ,{
		title:"订单状态",
		field:"status",
        type:"select",
        key:"order_status",
        formatter:Dict.getNameForList("order_status")
       
	}];
	buildList({
		router: 'gorder',
		columns: columns,
		pageCode: '618470',
		// deleteCode: ''
	});

        
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
             if(selRecords[0].status == 0||selRecords[0].status == 1){
                    confirm("确认该订单不发货？").then(function() {
                    reqApi({
                        code: '618458',
                        json: {"code": selRecords[0].code}
                    }).then(function() {
                        toastr.info("操作成功");
                        $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                    });
                });
            }else {
                toastr.info("该订单不是可以取消发货的状态");
                return;
            }

            

        });
       
        $('#receBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status != 1){
                toastr.info("该订单不是待发货状态");
                return;
            }
          
            window.location.href="gorder_wu.html?code="+selRecords[0].code;
            // confirm("确认该订单已经发货？").then(function() {
            //     reqApi({
            //         code: '618456',
            //         json: {"code": selRecords[0].code}
            //     }).then(function() {
            //        toastr.info("操作成功");
			// 		$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            //     });
            // });

        });   //

        //  $('#nowestBtn').click(function() {
        //     var selRecords = $('#tableList').bootstrapTable('getSelections');
        //     if(selRecords.length <= 0){
        //         toastr.info("请选择记录");
        //         return;
        //     }
        //     if(selRecords[0].status != 3){
        //         toastr.info("该订单不是待收货状态");
        //         return;
        //     }
        //    // var msg = selRecords[0].status == 1 ? "确认上架该酒店？": "确认下架该酒店？";

        //     confirm("确认该订单已到货？").then(function() {
        //         reqApi({
        //             code: '618456',
        //             json: {"code": selRecords[0].code}
        //         }).then(function() {
        //            toastr.info("操作成功");
		// 			$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
        //         });
        //     });

        // });    
});