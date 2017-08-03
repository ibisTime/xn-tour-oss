$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'smsTitle',
		title : '公告标题'
	},{
		field : 'toKind',
		title : '针对人群',
		type: 'select',
		key: 'toKind',
		formatter: Dict.getNameForList('toKind')
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'notice_status',
		formatter: Dict.getNameForList('notice_status'),
		search: true
	},{
		field : 'updater',
		title : '最近修改人'
	},{
    	field : 'updateDatetime',
		title : '最近操作时间',
		formatter: dateTimeFormat
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'notice',
		columns: columns,
		pageCode: '804040',
		searchParams: {
			pushType: '41',
			channelType: '4',
			toSystemCode: OSS.system
		}
	});
	
	$('#releaseBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
	
       var msg = selRecords[0].status == 1 ? "确认撤下该公告？": "确认发布该公告？";
			confirm(msg).then(function() {
				reqApi({
					code: '804036',
					json: {"id": selRecords[0].id,}
				}).then(function() {
					toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				});
			});

	});
	

});

