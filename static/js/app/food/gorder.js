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
		field: '',
        search:true
	},{
		title: '积分价格',
		field: '',
	},{
		title:"人民币价格",
		field:"",
		formatter:moneyFormat
	},{
		title:"商品状态",
		field:"",
        type:"select",
        key:"good_status",
	},{
		title: '下单时间',
		field: '',
        formatter:dateTimeFormat
	},{
		title:"订单状态",
		field:"",
        type:"select",
        key:"gorder_status",
       
	}];
	buildList({
		router: 'gorder',
		columns: columns,
		pageCode: '',
		deleteCode: ''
	});

        
         
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
       
        $('#receBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
           // var msg = selRecords[0].status == 1 ? "确认上架该酒店？": "确认下架该酒店？";

            confirm("确认该订单已接货？").then(function() {
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