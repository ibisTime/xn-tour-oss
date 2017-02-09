$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '退款原因',
		field: '',
		readonly:true
	},{
		title: '订单编号',
		field: '',
		readonly:true
	}, {
		title: '订单时间',
		field: '',
        formatter:dataTimeFormat,
		readonly:true
	}];
	
	 var options = {
        fields: fields,
        code: code,
        detailCode: '618052'
    };

    options.buttons = [{
        title: '通过',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approveResult"] = "1";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618046",
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
                data["approveResult"] = "0";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618046",
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