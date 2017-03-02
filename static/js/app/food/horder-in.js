$(function() {
	var code = getQueryString('code');

	var fields = [ 
	{
		title:"入住人手机号",
		field:"checkInMobile",
        required:true
	},{
		title:"入住人",
		field:"owerId",
        //value:sessionStorage.getItem('userName'),
		required:true,
        
	},{
		title:"酒店订单号",
		field:"hotalOrderCode",
        value:code,
        hidden:true,
        required:true
	},{
		title:"操作人密码",
		field:"password",
        required:true
	}];
	
	 var options = {
        fields: fields,
        code: code,
        detailCode: '618052',
		dataType:"hotalOrder"
    };

    options.buttons = [{
        title: "保存",
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                reqApi({
                    code: "618044",
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