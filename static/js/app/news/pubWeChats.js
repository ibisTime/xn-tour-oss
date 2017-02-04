$(function() {
	
	var code = getQueryString('id');
	
	var tpl = '';
	var tpldata = {};
	
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
	},{
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
		buttons: [{
			title: '确定',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
						data[el.id] = $(el).attr('src');
					});
					var smsContent = {};
					smsContent.first = $('#first').val();
					smsContent.keyword1 = $('#keyword1').val();
					smsContent.keyword2 = $('#keyword2').val();
					smsContent.keyword3 = $('#keyword3').val();
					smsContent.keyword4 = $('#keyword4').val();
					smsContent.keyword5 = $('#keyword5').val();
					smsContent.date = $('#date').val();
					smsContent.adCharge = $('#adCharge').val();
					smsContent.type = $('#type').val();
					smsContent.cashBalance = $('#cashBalance').val();
					smsContent.remark = $('#remark').val();
					data.smsContent = smsContent;
					
					reqApi({
						code: '804033',
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