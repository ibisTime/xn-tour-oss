$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		field: "word",
        title:"关键词",
	    search:true
	}, {
		field: "updater",
		title:"更新人",
        
	}, {
		field: 'updateDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
	},{
		field: "remark",
		title:"备注",
	}];
	buildList({
		router: 'word',
		columns: columns,
		pageCode: '618305',
		deleteCode:"618301"
	});
    
});