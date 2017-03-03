$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '订单编号',
		field: 'code1',
        '[value]': 'code',
		readonly:true
	}, {
		title: '订单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat,
		readonly:true
	}, {
		title: "审核说明",
		field: 'remark',
        // type:'textarea',
        // normalArea:true,
        maxlength:255,
        required:true,
	}];
	
	 var options = {
        fields: fields,
        code: code,
        detailCode: '618152'
    };

    options.buttons = [{
        title: '通过',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["approveResult"] = "1";
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "618146",
                    json:data
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
                data['approver'] = sessionStorage.getItem('userName');
                data["approveResult"] = "0";
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "618145",
                    json:data
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