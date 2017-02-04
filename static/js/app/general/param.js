$(function() {

	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'ckey',
		title : '参数键',
		search: true
	},{
		field : 'cvalue',
		title : '参数值'
	},{
    	field : 'note',
		title : '参数说明'
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'param',
		columns: columns,
		pageCode: '807715'
	});
});

