$(function() {
	var accountNumber = getQueryString('accountNumber');
	 
	
	var fields = [ 
	 {
		title: '流水单号',
		field: 'codeList',
        value:accountNumber,
		readonly:true,
      
	}, 
    {
		title:"回调说明",
		field:"rollbackNote",
		maxlength:255,
        required:true
	}];
	
	 var options = {
        fields: fields,
         
    };

    options.buttons = [{
        title: '通过',
        handler: function () {
            if ($('#jsForm').valid()) {  
                var data = {};
                data['codeList'] = [accountNumber];
                data['rollbackUser'] = sessionStorage.getItem('userName');
                data["rollbackResult"] = "1";

                data["rollbackNote"] = $("#rollbackNote").val();
                reqApi({
                    code: "802511",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data['codeList'] = [accountNumber];
                data['rollbackUser'] = sessionStorage.getItem('userName');
                data["approveResult"] = "0";
                data["rollbackNote"] = $("#rollbackNote").val();
                reqApi({
                    code: "802511",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    buildDetail(options);


});