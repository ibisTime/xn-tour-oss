$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"商品名称",
        field:'name',
        search:true
    }, {
		title:"积分价格",
		field:"costPrice",
		formatter:moneyFormat
	},{
		title:"商品状态",
		field:"status",
        type:"select",
        key:"good_status",
        formatter:Dict.getNameForList("good_status"),
	}];
	buildList({
		router: 'goods',
		columns: columns,
		pageCode: '618420',
		//deleteCode: '618411'
	});
         
         $('#frameBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status== 0 || selRecords[0].status== 1){
                window.location.href = "goods_up.html?code="+selRecords[0].code;
        
            }else{
                toastr.info("该商品不是待上架的状态");
                return;
            }
        });
         $('#frame2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status != 3){
                toastr.info("该商品不是待下架的状态");
                return;
            }

            confirm("确认下架该商品？").then(function() {
                reqApi({
                    code: '618414',
                    json: {"code": selRecords[0].code,remark:"商品已售完"}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				
                });
            });

        });

         $('#edit2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status == 3){
                toastr.info("请先下架，再修改信息");
                return;
            }

            window.location.href = "goods_addedit.html?code="+selRecords[0].code;

        });
    
         $('#deleteBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status == 3){
                toastr.info("已上架，不可删除商品");
                return;
            }

            confirm("确认删除该商品？").then(function() {
                reqApi({
                    code: '618411',
                    json: {"code": selRecords[0].code,}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				
                });
            });

        });
});