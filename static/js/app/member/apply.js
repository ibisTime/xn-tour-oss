$(function() {
	var code = getQueryString('accountCode');
    //var code
	var fields = [
     {
		title: '转账金额',
		field: 'transAmount',
        amount:true,
		required: true,
		
	},{
		title: '批量虚拟账号',
		field: 'accountNumberList', 
		required: true,	
	},
	{
		title: '业务类型',
		field: 'bizType',
        type:"select",
        key:"biz_type",
        data:{
            "11":"充值",
            "-11":"取现",
            "-19":"红冲",
            "19":"蓝补"
        },
        formattr:Dict.getNameForList("biz_type"),
		required: true,
		
	},{
        field:"bizNote",
        title:"业务类型说明",
        required: true,
        maxlength:255
    }];
	
	var options = {
        fields: fields,
        // code:code,
        // detailCode: '618102',
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                data["accountNumberList"] = [code];
                 
             reqApi({
                        code: "802510",
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