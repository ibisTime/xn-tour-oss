$(function() {
	var code = getQueryString('code');
	var view= getQueryString('v');
	var updater = getUserName();
	
	var fields = [{
		field: 'fromSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'toSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'smsType',
		type: 'hidden',
		value: '1'
	}, {
		field : 'toKind',
		title : '针对人群',
		type: 'select',
		key: 'toKind',
		formatter: Dict.getNameForList('toKind'),
		readonly: view,
		required: true
	},{
		title: '标题',
		field: 'smsTitle',
		required: true,
		maxlength: 32,
		readonly: view
	}, {
		title: '内容',
		field: 'smsContent',
		required: true,
		readonly: view,
		type: 'textarea'
	}, {
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'notice_status',
		formatter: Dict.getNameForList('notice_status'),
		readonly: view,
		hidden: !view
	}, {
		field: 'updater',
		title: '最近操作人',
		value: updater,
		readonly: view,
		hidden: !view
	}, {
		field: 'updateDatetime',
		title: '最近操作时间',
		readonly: view,
		hidden: !view,
		formatter: dateTimeFormat
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
	}];
	
	var options = {
		fields: fields,
		code: code,
		addCode: '804034',
		editCode: '804035',
		detailCode: '804042'
	};
	if (view) {
		options.buttons = [{
			'title': '返回',
			handler: function() {
				goBack();
			}
		}];
	}
	
	buildDetail(options);

});