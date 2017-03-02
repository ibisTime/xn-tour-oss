$(function() {
	var code = getQueryString('code');

	var fields = [
    //     {
	// 	hidden: true,
	// 	field: "code",
	// 	value: code,
    //     data1:"code"
	//    },
     {
		title: 'UI位置',
		field: 'location',
		type:'select',
		key:"hotelhot_status",
		formatter: Dict.getNameForList('hotelhot_status'),
		required: true,
		
	},
	{
		title: 'UI编号',
		field: 'orderNo',
        number:true,
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
                confirm("确认上架该美食？").then(function() {  
                    reqApi({
                        code: "618063",
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