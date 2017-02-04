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
		field: 'smsType',
		type: 'hidden',
		value: '1'
	}, {
		title: '内容',
		field: 'smsContent',
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		buttons: [{
			title: '确定',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});

					reqApi({
						code: '804032',
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