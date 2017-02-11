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
		field : '',
		title : '针对酒店',
        // key:"",
        // type:"select"
	},{
		title:"评论时间",
		field:"commDatetime",
		formatter:dateFormat,
	},{
		title: '审核状态',
		field: 'status',
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
    
});