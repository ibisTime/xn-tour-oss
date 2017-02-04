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
		title : '针对线路',
        key:"",
        type:"select"
	},{
		title:"评论时间",
		field:"",
		formatter:dateFormat,
	},{
		title: '审核状态',
		field: '',
		type:"select",
		key:'',
        search:true
	},{
		title:"备注",
		field:"",
	}];
	buildList({
		router: 'comment',
		columns: columns,
		pageCode: '',
		deleteCode: ''
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