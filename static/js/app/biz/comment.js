$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},
	// {
	// 	title: '关键词',
	// 	field: 'content',
    //     visible:false,
    //     search:true    
	// },
	{
		
		field : 'commer',
		title : '用户名',
		 formatter:function(v,data){
			return data.res.nickname
		},
	},

	{
		field : "parentCode",
		title : '针对线路',
		formatter:function(v,data){
			return data.line.name
		},
        type:"select"
	},
	{
		title:"评论时间",
		field:"commDatetime",
		formatter:dateTimeFormat,
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
		searchParams:{
			type:"2"
		}
		 
	});
     $("#check2Btn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
          
		  if (selRecords[0].status !=0){
			  toastr.info("该条记录不是待审核状态");
				return;
		  }
			window.location.href = "comment_addedit.html?code=" + selRecords[0].code;
			 
	});

});