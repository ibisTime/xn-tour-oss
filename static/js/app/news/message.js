$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '接收者名称',
		search: true
	},{
		field: 'toMobile',
		title: '接收者手机号',
		search: true
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'news_status',
		formatter: Dict.getNameForList('news_status'),
		search: true
	},{
    	field : 'pushedDatetime',
		title : '发送时间',
		formatter: dateTimeFormat
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'message',
		columns: columns,
		pageCode: '804040',
		searchParams: {
			channelType: '1'
		}
	});
	
	$('#pubBtn').click(function() {
		window.location.href = "pub.html";
	});
	
	$('#pubsBtn').click(function() {
		window.location.href = "pubs.html";
	});
	// $('#pubsBtn').click(function() {	
	// 	var selRecords = $('#tableList').bootstrapTable('getSelections');
	// 		if (selRecords.length <= 0) {
	// 			toastr.info("请选择记录");
	// 			return;
	// 		}
	// 		window.location.href = "pubWeChats.html？code=" + selRecord.code;
	// 	});



});

