$(function() {
	var code = getQueryString('lineCode');
	//var view =getQueryString("v");
	
	var fields = [{
		hidden: true,
		field: "lineCode",
		value: code
	}, {
		title: '针对路线',
		field: 'name',
		readonly: true
	},{
		title: 'Tab名称',
		field: 'type',
		type:'select',
		key:"tab_type",
		formatter: Dict.getNameForList('tab_type'),
		required: true
	}, {
		title: '图文详述',
		field: 'description',
		type: 'textarea',
		required: true,
		
	},{
		title: '备注',
		field: 'remark',
		maxlength:255
	}];
	
	var options = {
        fields: fields,
        code: code,
        detailCode: '618102',
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                // var data = {};
                // data['lineCode'] = code;
				// data["type"]= $("#type").val();
                // data["description"] = $("#description").val();
				//data["comCode"] = $("#comCode").val();
                reqApi({
                    code: "618092",
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