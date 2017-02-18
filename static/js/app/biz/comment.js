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
	},
	{
		field : "topcode",
		title : '针对线路',
        key:"zd_router",
		 
        type:"select"
	},	{
		field : "type",
		title : '类型',
        key:"ht_type",
		formatter:function(v,data){
			return  data.res.type
		},
		formatter:Dict.getNameForList("ht_type"),
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
			typeList:[1,4]
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