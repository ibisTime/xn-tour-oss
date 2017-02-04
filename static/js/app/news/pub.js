$(function() {
	
	var code = getQueryString('id');
	
	var fields = [{
		field: 'fromSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'toSystemCode',
		type: 'hidden',
		value: getSystemId()
	}, {
		field: 'pushType',
		type: 'hidden',
		value: '12'
	}, {
		field: 'smsType',
		type: 'hidden',
		value: '1'
	}, {
		title: '接收者',
		field: 'toMobile',
		type: 'select',
		listCode: '804021',
		keyName: 'mobile',
		valueName: 'mobile',
		required: true
	}, {
		title: '内容',
		field: 'smsContent',
		maxlength:255,
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '804042',
		buttons: [{
			title: '确定',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});
					reqApi({
						code: '804031',
						json: data
					}).then(function() {
						sucDetail();
					});
				}
			}
		}, {
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
	
});