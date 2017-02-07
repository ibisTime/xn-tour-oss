$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"酒店名称",
        field:'name',
        search:true
    },{
		title: '酒店类型',
		field: 'type',
        type:"select",
        key:"hotel_type"
	},{
		title:"酒店位置",
		field:"",
		
	},{
		title:"酒店电话",
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
		router: 'hotel',
		columns: columns,
		pageCode: '617203',
		deleteCode: '617200'
	});

        $('#pulBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].status == 1 ? "确认推荐该酒店？": "确认取消推荐该酒店？";
             
             confirm(msg).then(function() {
                reqApi({
                    code: '',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    sucDetail();
                });
             });
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
                    sucDetail();
                });
            });

        });
       


});