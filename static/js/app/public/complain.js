$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"关键词",
        field:"word",
        search:true,
        visible:false
    },{
        title:"联系方式",
        field:"contact",
    },{
        title:"用户名",
        field:"commiter",
		formatter:function(v,data){
			return  data.res.loginName
		}
    },{
		field : 'type',
		title : '类型',
        type:"select",
        key:"complain_type",
		formatter:Dict.getNameForList("complain_type"),
		search: true
	},{
        title:"内容描述",
        field:"content",
    },{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'comp_status',
		formatter: Dict.getNameForList('comp_status'),
		 
	}];
	buildList({
		router: 'complain',
		columns: columns,
		pageCode: '618205',
		   
	});

    $("#edit2Btn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
          
		  if (selRecords[0].status !=0){
			  toastr.info("该条记录不是待处理状态");
				return;
		  }

			window.location.href = "complain_addedit.html?code=" + selRecords[0].code;
			 
	});






});

