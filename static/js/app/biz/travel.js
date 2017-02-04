$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		title: '关键词',
		field: '',
        visible:false,
        search:true
	},{
		field : '',
		title : '用户名',
	},{
		field : '',
		title : '游记路线',
	},{
		field : '',
		title : '针对线路',
		key:"",
        type:"select"
	},{
		title:"更新时间",
		field:"",
		formatter:dateFormat,
	},{
		title: '收藏次数',
		field: ''
	},{
		title: '点赞次数',
		field: ''
	},{
		title: '举报次数',
		field: ''
	},{
		title: '审核状态',
		field: '',
		type:"select",
		key:'',
        search:true
	},{
		title:"备注",
		field:"",
	},];
	buildList({
		router: 'travel',
		columns: columns,
		pageCode: '',
		deleteCode: ''
	});
    $("#checkBtn").on("click",function(){
                var selRecords = $("#tableList").bootstrapTable("getSelections");
                if ( selRecords.length <=0){
                    toastr.info("请选择记录");
                    return;
                }
            window.location.href='travel_check.html';
        });

	$("#topBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
           
			var msg = selRecords[0].status == 1 ? "确认置顶该游记？": "确认取消置顶该游记？";

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