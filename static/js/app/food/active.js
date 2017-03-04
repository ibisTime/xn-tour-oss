$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
		title: '活动名称',
		field: 'name',
        search:true
	},{
        title: '活动开始时间',
		field: 'startDate',
        type:'date',
        formatter:dateTimeFormat,
        
    },{
        title: '活动结束时间',
		field: 'endDate',
        type:'datetime',
        formatter:dateTimeFormat,
       
    },{
		title: '活动地点',
		field: 'site',
        
	},{
		title:"活动状态",
		field:"status",
        type:"select",
        key:"active_status",
		formatter:Dict.getNameForList("active_status")
	},{
		title: '备注',
		field: 'remark',
	}];
	buildList({
		router: 'active',
		columns: columns,
		pageCode: '618085',
	});
         
         $('#frameBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].status == 1 ? "确认下架该活动？": "确认上架该活动？";

            confirm(msg).then(function() {
                reqApi({
                    code: '618083',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });
         $('#edit3Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
             if(selRecords[0].status== 1){
                toastr.info("已上架，不可以修改信息");
                return;
            }
            window.location.href="active_addedit.html?Code="+selRecords[0].code;
        });
 
        $('#delete2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            //var msg = selRecords[0].status == 1 ? "确认下架该活动？": "确认上架该活动？";
            if(selRecords[0].status== 1){
                toastr.info("已上架，不能删除该记录");
                return;
            }
            confirm("确定删除该记录？").then(function() {
                reqApi({
                    code: '618081',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });

});