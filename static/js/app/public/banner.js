$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: 'banner名称',
		field: '',
        search:true
	},{
		title: '位置',
		field: '',
        type:"select",
        key:"banner_location",
        search:true
	}, {
		title: '顺序',
		field: '',
        
	},{
		title:"链接",
		field:"",
	}, {
		title: '备注',
		field: '',
	}];
	buildList({
		router: 'banner',
		columns: columns,
		pageCode: '',
		deleteCode: '',
	});
         
    

});