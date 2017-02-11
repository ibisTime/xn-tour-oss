$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"商品名称",
        field:'',
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
        formatter:Dict.getNameForList("good_status"),
	}];
	buildList({
		router: 'goods',
		columns: columns,
		pageCode: '',
		deleteCode: ''
	});
         
         $('#frameBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].status == 1 ? "确认上架该酒店？": "确认下架该酒店？";

            confirm(msg).then(function() {
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