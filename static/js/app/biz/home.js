$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"民宿名称",
        field:'',
        search:true
    },{
		title:"民宿位置",
		field:"",
		
	},{
		title:"民宿电话",
		field:"",
        search:true
    },{
        title:"价格",
        field:"",
        formatter:moneyFormat
    },{
		title:"状态",
		field:"",
        type:"select",
        key:"",
        
	}];
	buildList({
		router: 'home',
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
            var msg = selRecords[0].status == 1 ? "确认上架该民宿？": "确认下架该民宿？";

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