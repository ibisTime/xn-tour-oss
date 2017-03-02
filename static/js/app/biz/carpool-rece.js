$(function() {
	var code = getQueryString('code');
	
	
	var fields = [{
		title: '司机',
		field: 'driver',
		required: true,
        maxlength:32    
	},{
		title: '手机号',
		field: 'mobile',
		mobile:true,
		required: true
	},{
		title: '备注',
		field: 'remark',
		maxlength:255
	}];
	
	var options = {
        fields: fields,
       // code: code,
        // detailCode: '618222',
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                data["code"] = code;
                reqApi({
                    code: "618244",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    },
	 {
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    buildDetail(options);
	
});