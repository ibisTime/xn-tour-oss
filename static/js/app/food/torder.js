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
		title:"出行类型",
		field:"",
        type:"select",
        key:"travel_type",
        search:true
	},{
		title: '出发人数',
		field: '',
	},{
		title:"价格",
		field:"",
		formatter:moneyFormat
	},{
		title:"状态",
		field:"",
        type:"select",
        key:"travel_type",
	},{
		title: '下单时间',
		field: '',
        formatter:dateTimeFormat
	},{
		title:"订单状态",
		field:"",
        type:"select",
        key:"torder_status",
       
	}];
	buildList({
		router: 'torder',
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
                    sucDetail();
                });
            });

        });
      

});