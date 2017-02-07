$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '引流名称',
		field: '',
        search:true
	},{
		title: '位置',
		field: '',
        type:"select",
        key:"water_location",
        search:true
	}, {
		title: '顺序',
		field: '',
        
	},{
		title: '备注',
		field: '',
	}];
	buildList({
		router: 'water',
		columns: columns,
		pageCode: '',
		deleteCode:""
	});
         
    



});