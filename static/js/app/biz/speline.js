$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '线路名称',
        search:true
	},{
		field : '',
		title : '专线类型',
		search:true
	},{
		title: '起点',
		field: ''
	},{
		title:"终点",
		field:"",
		
	},{
		title: '价格',
		field: '',
		formatter:moneyFormat
	},{
		title:"出发时间",
		field:"",
        search:true,
        formatter:dateTimeFormat
	},{
		title:"状态",
		field:"",
        type:"select",
        key:"",
        search:true
	},{
		title:"备注",
		field:"",
	}];
	buildList({
		router: 'speline',
		columns: columns,
		pageCode: '',
		deleteCode: ''
	});

	$("#frameBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			var msg = selRecords[0].status == 1 ? "确认下架该线路？": "确认上架该线路？";

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