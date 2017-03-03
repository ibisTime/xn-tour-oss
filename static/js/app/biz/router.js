$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '线路名称',
		search: true
	}, {
		title: '线路形式',
		field: 'style',
		type:'select',
		key:'router_type2',
		formatter:Dict.getNameForList("router_type2"),
		search: true 
	},{
    	field : 'joinPlace',
		title : '集合地',
//		type:'select',
//		key:'router_di',
//		formatter:Dict.getNameForList("router_di"),
    },{
		field : 'outDate',
		title : '出行日期',
		formatter: dateTimeFormat
	}, {
		title: '价格',
		field: 'price',
		formatter:moneyFormat
	},{
		title: '收藏次数',
		field: 'collectTimes'
	},{
		title: '状态',
		field: 'status',
		type:"select",
		key:"hotel_status",
		formatter:Dict.getNameForList("hotel_status")
	}];
	buildList({
		router: 'router',
		columns: columns,
		pageCode: '618100',
		//deleteCode: ''
	});

     $("#tabBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
		if (selRecords[0].status == 0) {
            toastr.info("请先上架该线路再进行Tab内容设置");
            return;
        }

        window.location.href = "router_tab.html?lineCode=" + selRecords[0].code;
		 
    });
	$("#recomBtn").on("click", function() {
			var selRecords = $('#tableList').bootstrapTable('getSelections');
			if (selRecords.length <= 0) {
				toastr.info("请选择记录");
				return;
			}
			window.location.href = "router_recom.html?lineCode="+selRecords[0].code;
	});

	$("#frameBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			if ( selRecords[0].status == 1 ){
					confirm('确认下架该线路?').then(function() {
					reqApi({
						code: '618094',
						json: {"code": selRecords[0].code,price:selRecords[0].price},
					}).then(function() {
						toastr.info("操作成功");
						$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
					
					});
				});
			}
			if ( selRecords[0].status != 1 ){
				 window.location.href = "router_up.html?code=" +selRecords[0].code+"&price="+selRecords[0].price; 	
			}	
			
	});
     $('#edit2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
			if(selRecords[0].status != 0){
                toastr.info("只有未上架才可信息修改");
                return;
            }
            window.location.href = "router_addedit.html?code=" +selRecords[0].code;    
        });


});