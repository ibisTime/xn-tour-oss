$(function() {
	var code = getQueryString('code');
   
	var fields = [
     {
		title: '线路价格',
		field: 'price',
        amount:true,
		required: true,
		
	}];
	
	var options = {
        fields: fields,
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                data["code"] = code;
                confirm("确认上架该线路？").then(function() {  
                    reqApi({
                        code: "618094",
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