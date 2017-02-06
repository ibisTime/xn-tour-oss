$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"美食名称",
        field:'',
        search:true
    },{
		title: '美食类型',
		field: '',
        type:"select",
        key:"food_type",
        search:true
	},{
		title:"位置",
		field:"",
		
	},{
        title:"价格",
        field:"",
        formatter:moneyFormat
    },{
		title:"状态",
		field:"",
        type:"select",
        key:"food_type",
        formatter:Dict.getNameForList("food_type"),
	}];
	buildList({
		router: 'food',
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
                    sucDetail();
                });
            });

        });
       


});