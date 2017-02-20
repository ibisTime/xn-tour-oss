$(function() {
	var code = getQueryString('lineCode');

	var fields = [{
		hidden: true,
		field: "lineCode",
		value: code
	}, {
		title: '推荐类型',
		field: 'type',
		type:'select',
		key:"tujian_type",
		formatter: Dict.getNameForList('tujian_type'),
		required: true,
		onChange:function(v){
            if ( v==1){
               $('#comCode').renderDropdown({
                listCode:"618171",
                keyName: 'code',
                valueName: 'name',
				params:{
					status:"1"
				}
                });
			};
			if ( v==2){
               $('#comCode').renderDropdown({
                listCode: '618011',
                keyName: 'code',
                valueName: 'name',
				params:{
				    type:"1",
					status:"1"
				}
                });
			};
			if ( v==3){
				$('#comCode').renderDropdown({
					listCode: '618071',
					keyName: 'code',
					valueName: 'name',
					params:{
					     status:"1"
				    }
					});
				};
             
		}
	},
	{
		title: '内容编号',
		field: 'comCode',
		required: true,
		type: 'select',
		
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
				var data = $('#jsForm').serializeObject();
                 
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