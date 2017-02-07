$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '合作伙伴名称',
		field: '',
        search:true
	},{
		title: '类型',
		field: '',
        type:"select",
        key:"friends_type",
        search:true
	}, {
		title: '顺序',
		field: '',
        
	},{
		title: '备注',
		field: '',
	}];
	buildList({
		router: 'friends',
		columns: columns,
		pageCode: '',
		deleteCode:""
	});
         
    



});