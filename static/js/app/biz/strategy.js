$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '针对线路',
	},{
		field : '',
		title : '攻略标题',
		search:true
	},{
		title: '收藏次数',
		field: ''
	},{
		title:"更新时间",
		field:"",
		search:true,
		formatter:dateFormat,
	},{
		title: '状态',
		field: '',
		type:"select",
		key:''
	},{
		title:"备注",
		field:"",
	},];
	buildList({
		router: 'strategy',
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
			var msg = selRecords[0].status == 1 ? "确认下架该攻略？": "确认上架该攻略？";

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