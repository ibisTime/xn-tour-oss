$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
		field : 'name',
		title : '导航名称',
		search: true
	},{
		field : 'location',
		title : '导航位置',
		type:"select",
    key:"button_type",
    formatter:Dict.getNameForList("button_type"), 
		
		search: true
	},{
    	field : 'orderNo',
	   	title : '顺序'
    },{
    	field: 'belong',
    	title: '属于',
      type:"select",
    	key: 'button_location',
		  formatter: Dict.getNameForList('button_location'),
    },{
    	field : '',
	   	title : 'url地址',

    }];
	buildList({
		router: 'navi',
		columns: columns,
		pageCode: '',
		deleteCode:""
	});
         
    



});