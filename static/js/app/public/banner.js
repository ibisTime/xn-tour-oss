$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: 'banner名称',
		field: 'name',
        search:true
	},{
		title: '位置',
		field: 'location',
        type:"select",
        key:"banner_location",
        search:true
	}, {
		title: '顺序',
		field: 'orderNo',
        
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
		pageCode: '806050',
		deleteCode: '806041',
	});
         
    

});