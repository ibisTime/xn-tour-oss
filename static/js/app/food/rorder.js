$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"订单编号",
        field:'',
        search:true
    },{
		title: '线路名称',
		field: '',
       
    },{
        title: '线路名称',
		field: '',
        type:'select',
        key:"router_time"
    },{
        title: '线路形式',
		field: '',
        type:'select',
        key:"router_type2"
    },{
        title: '线路类型',
		field: '',
        type:'select',
        key:"router_type"
    }, {
		title:"人民币价格",
		field:"",
		formatter:moneyFormat
	},{
		title:"线路状态",
		field:"",
        type:"select",
        key:"router_status",
	},{
		title: '下单时间',
		field: '',
        formatter:dateTimeFormat
	},{
		title:"订单状态",
		field:"",
        type:"select",
        key:"rorder_status",
       
	}];
	buildList({
		router: 'rorder',
		columns: columns,
		pageCode: '',
		deleteCode: ''
	});

        // $('#pulBtn').click(function() {
        //     var selRecords = $('#tableList').bootstrapTable('getSelections');
        //     if(selRecords.length <= 0){
        //         toastr.info("请选择记录");
        //         return;
        //     }
        //     var msg = selRecords[0].status == 1 ? "确认推荐该酒店？": "确认取消推荐该酒店？";
             
        //      confirm(msg).then(function() {
        //         reqApi({
        //             code: '',
        //             json: {"code": selRecords[0].code}
        //         }).then(function() {
        //             sucDetail();
        //         });
        //      });
        // });
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
           // var msg = selRecords[0].status == 1 ? "确认上架该酒店？": "确认下架该酒店？";

            confirm("确认取消该订单？").then(function() {
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