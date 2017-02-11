$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		title: '关键词',
		field: 'word',
        visible:false,
        search:true
	},{
		field : 'commer',
		title : '用户名',
	},{
		field : "",
		title : '针对线路',
        key:"zd_router",
		formatter:Dict.getNameForList("zd_router"),
        type:"select"
	},{
		title:"评论时间",
		field:"commDatetime",
		formatter:dateFormat,
	},{
		title: '审核状态',
		field:"status",
		type:"select",
		key:'tracheck_status',
		formatter:Dict.getNameForList("tracheck_status"),
        search:true
	},{
		title:"备注",
		field:"remark",
	}];
	buildList({
		router: 'comment',
		columns: columns,
		pageCode: '618315',
		//deleteCode: '',
		searchParams:{
			type:"1"
		}
	});
    // $("#checkBtn").on("click",function(){
    //             var selRecords = $("#tableList").bootstrapTable("getSelections");
    //             if ( selRecords.length <=0){
    //                 toastr.info("请选择记录");
    //                 return;
    //             }
    //         window.location.href='travel_check.html';
    //     });


});