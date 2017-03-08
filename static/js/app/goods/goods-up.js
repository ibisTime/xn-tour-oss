$(function() {
	var code = getQueryString('code');

	var fields = [
     {
		title: '商品积分价格',
		field: 'price1',
		//amount:true,
		required: true,
		
	},
     {
		
		field: 'price2',
		value:"0",
		hidden: true,
		required: true,

	}];
	
	var options = {
        fields: fields,
        // detailCode: '618422',
        // dataType:"product"
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