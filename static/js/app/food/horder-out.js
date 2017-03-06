$(function() {
	var code = getQueryString('code');

	var fields = [ 
	{
		title:"入住人手机号",
		field:"checkInMobile",
        mobile:true,
        required:true
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
	},{
		title:"操作人",
		field:"owerId",
        type:'hidden',
        value:sessionStorage.getItem('userId'),
		required:true,
        
	},{
        title:"备注",
        field:"remark",
        maxlength:255
    }];
	
	 var options = {
        fields: fields,
    };

    options.buttons = [{
        title: "保存",
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                reqApi({
                    code: "618047",
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