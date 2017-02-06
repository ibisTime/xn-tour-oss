$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '活动名称',
		field: '',
        search:true
	},{
		title: '活动时间',
		field: '',
        formatter:dateTimeFormat,
        search:true,
        afterSet:function(){

        }
	}, {
		title: '活动地点',
		field: '',
        
	},{
		title:"订单状态",
		field:"",
        type:"select",
        key:"active_status",
	},{
		title: '备注',
		field: '',
	}];
	buildList({
		router: 'active',
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
            var msg = selRecords[0].status == 1 ? "确认上架该活动？": "确认下架该活动？";

            confirm(msg).then(function() {
                reqApi({
                    code: '',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    sucDetail();
                });
            });

        });
      

});