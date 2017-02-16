$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '订单号',
		field: 'code',
		readonly:true
	},{
		title: '退款原因',
		field: '',
		readonly:true
	},  {
		title:"审核回复",
		field:"remark",
		maxlength:255,
        required:true
	}];
	
	 var options = {
        fields: fields,
        code: code,
        detailCode: '618255'
    };

    options.buttons = [{
        title: '通过',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approvelResult"] = "1";
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "618123",
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
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approvelResult"] = "0";
                //data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618123",
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