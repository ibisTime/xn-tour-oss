$(function() {
	var code = getQueryString('code');

	var fields = [
     {
		title: '商品价格',
		field: 'price1',
		formatter:moneyFormat,
		required: true,
		
	}];
	
	var options = {
        fields: fields,
        // code: code,
        // detailCode: '618012',
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                data["code"] = code;
                confirm("确认上架该商品？").then(function() {  
                    reqApi({
                        code: "618413",
                        json: data
                    }).done(function () {
                        sucDetail();
                    });
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