$(function() {
	var accountCode = getQueryString('accountCode') || '';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'realName',
		title : '户名',
		search: true
	},{
		field: 'accountNumber',
		title: '账号'
	},{
		field: 'currency',
		title: '币种',
		type: 'select',
		key: 'currency_type',
		formatter: Dict.getNameForList('currency_type'),
		//search: true
	},{
		field: 'channelType',
		title: '渠道',
		type: 'select',
		key: 'channel_type',
		formatter: Dict.getNameForList('channel_type'),
		search: true
	},{
		field : 'bizType',
		title : '业务类型',
		type: 'select',
		key: 'biz_type',
		formatter: Dict.getNameForList('biz_type'),
		search: true
	},{
    	field : 'transAmount',
		title : '变动金额',
		formatter: moneyFormat
    },{
    	field: 'preAmount',
    	title: '变动前金额',
    	formatter: moneyFormat
    },{
    	field: 'postAmount',
    	title: '变动后金额',
    	formatter: moneyFormat
    },{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'jour_status',
		formatter: Dict.getNameForList('jour_status'),
		search: true
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		columns: columns,
        pageCode:"802520",
		searchParams: {
			accountNumber: accountCode,
			// status: 'effect'
		}
	});
    $("#importBtn").remove();
	$('#flowBtn').remove();
	$('#applyBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return; 
		}
		window.location.href = "apply.html?accountCode="+selRecords[0].accountNumber;
	});  
	 
	$('#enchasBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		window.location.href = "enchas.html?accountNumber="+selRecords[0].accountNumber;
	});   
});

