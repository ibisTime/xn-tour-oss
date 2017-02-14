$(function() {
	var code = getQueryString('lineCode');

	var fields = [{
		title:"推荐编号",
		field:"comCode",
		value:code,
		type:"hidden"
	} , {
		title: '线路编号',
		field: 'lineCode',
		value:code,
		type:"hidden",
	},{
		title: '针对路线',
		field: 'name',
		formatter:function(v,data){
			return data.name
		},
		readonly:true,
	},{
		title: '推荐类型',
		field: 'type',
		type:'select',
		key:"tujian_type",
		formatter: Dict.getNameForList('tujian_type'),
		required: true,
	},
	{
		title: '内容',
		field: 'description',
		required: true,
		type: 'textarea',
		normalArea:true,
		maxlength:255
	}];
	
	var options = {
        fields: fields,
        lineCode: code,
        detailCode: '618102',
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data['lineCode'] = code;
				data["type"]= $("#type").val();
                data["description"] = $("#description").val();
				data["comCode"] = $("#comCode").val();
                reqApi({
                    code: "618093",
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