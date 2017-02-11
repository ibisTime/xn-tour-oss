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
		 
	},{
    	field : 'joinPlace',
		title : '集合地'
    },{
		field : 'outDate',
		title : '出行日期',
		formatter: dateFormat
	}, {
		title: '价格',
		field: 'price',
		formatter:moneyFormat
	},{
		title: '收藏次数',
		field: ''
	},{
		title: '状态',
		field: 'status',
		type:"select"
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

        window.location.href = "router_tab.html?code=" + selRecords[0].code;
		 
    });
	$("#recomBtn").on("click", function() {
			var selRecords = $('#tableList').bootstrapTable('getSelections');
			if (selRecords.length <= 0) {
				toastr.info("请选择记录");
				return;
			}
			window.location.href = "router_recom.html";
	});

	$("#frameBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			var msg = selRecords[0].status == 1 ? "确认下架该线路?": "确认上架该线路?";

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