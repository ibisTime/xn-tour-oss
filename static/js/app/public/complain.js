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
    },{
		field : 'type',
		title : '类型',
        type:"select",
        key:"complain_type",
		search: true
	},{
        title:"内容描述",
        field:"tsContent",
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

});

