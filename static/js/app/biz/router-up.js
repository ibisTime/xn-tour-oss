$(function() {
	var code = getQueryString('code');
    //var code
	var fields = [
     {
		title: '线路价格',
		field: 'price',
        amount:true,
		required: true,
		
	},{
		title: 'UI位置',
		field: 'location',
		type:'select',
		key:"hotelhot_status",
		formatter: Dict.getNameForList('hotelhot_status'),
		required: true,
		
	},
	{
		title: 'UI顺序',
		field: 'orderNo',
        number:true,
		required: true,
		
	}];
	
	var options = {
        fields: fields,
        code:code,
        detailCode: '618102',
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