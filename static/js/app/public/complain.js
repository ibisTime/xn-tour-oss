$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"关键词",
        field:"",
        search:true,
        visible:false
    },{
        title:"联系方式",
        field:"",
    },{
        title:"用户名",
        field:"",
    },{
		field : '',
		title : '类型',
        type:"select",
        key:"complain_type",
		search: true
	},{
        title:"内容描述",
        field:"",
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
		pageCode: '',
		   
	});

});

