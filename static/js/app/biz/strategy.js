$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'lineCode',
		title : '针对线路',
	},{
		field : 'title',
		title : '攻略标题',
		search:true
	},{
		title: '收藏次数',
		field: 'collectTimes'
	},{
		title:"更新时间",
		field:"updateDatetime",
	    formatter: function(value, row, index){
        	return row['updateDatetime'] ? dateTimeFormat(row['updateDatetime']) : dateTimeFormat(value);
        },
		search:true,
		formatter:dateTimeFormat,
	},{
		title: '状态',
		field: 'status',
		type:"select",
		key:'hotel_status',
		formatter:Dict.getNameForList("hotel_status")
	},{
		title:"备注",
		field:"remark",
	},];
	buildList({
		router: 'strategy',
		columns: columns,
		pageCode: '618115',
		deleteCode: '618111'
	});

	$("#frameBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			var msg = selRecords[0].status == 1 ? "确认下架该攻略？": "确认上架该攻略？";

			confirm(msg).then(function() {
				reqApi({
					code: '618113',
					json: {"code": selRecords[0].code}
				}).then(function() {
					toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				});
			});
	});



});