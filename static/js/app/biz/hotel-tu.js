$(function() {
	var code = getQueryString('code');

	var fields = [
     {
		title: 'UI位置',
		field: 'location',
		type:'select',
		key:"hotel_location",
		//formatter: Dict.getNameForList('hotel_location'),
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
       
        detailCode: '618012',
        dataType: "hotal" 
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                data["code"] = code;
                confirm("确认上架该酒店？").then(function() {  
                    reqApi({
                        code: "618004",
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