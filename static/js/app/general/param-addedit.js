$(function() {
	var code = getQueryString('code');
	var noteConfig = {
		title: '参数内容',
		field: 'note',
		required: true
	};
	reqApi({
		code: '807716',
		json: {
			id: code
		},
		sync: true
	}).then(function (data) {
		if(data.ckey == "aboutus" || data.ckey == "inte" || data.ckey == "soft"
			|| data.ckey == "disclaimer" || data.ckey == "version_state"
			|| data.ckey == "user_item" || data.ckey == "service_item"
		 	|| data.ckey == "business_cooperation" || data.ckey == "common_problem"
		 	|| data.ckey == "news_guide" || data.ckey == "web_introduce"){
			noteConfig.type = "textarea";
		}
	})

	var fields = [{
		title: '参数键',
		field: 'ckey',
		required: true,
		maxlength: 20
	}, {
		title: '参数说明',
		field: 'cvalue',
		required: true,
		maxlength: 255
	}, noteConfig, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];

	buildDetail({
		fields: fields,
		code: code,
		addCode:"807710",
		detailCode: '807716',
		editCode: '807711'
	});
});
