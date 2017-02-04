$(function() {
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields = [{
		title: '接收者',
		field: 'toMobile',
		required: true,
		maxlength: 30,
		readonly: view
	}, {
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'news_status',
		formatter: Dict.getNameForList('news_status'),
		readonly: view
	}, {
		title: '内容',
		field: 'smsContent',
		readonly: view
	}, {
		title: '发送人',
		field: 'updater',
		readonly: view
	}, {
		title: '发送时间',
		field: 'pushedDatetime',
		formatter: dateTimeFormat,
		readonly: view
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
	}];
	
	var options = {
		fields: fields,
		code: code,
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