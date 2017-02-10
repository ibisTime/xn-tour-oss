$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '退款原因',
		field: '',
		readonly:true
	},{
		title: '订单编号',
		field: 'code',
		readonly:true
	}, {
		title: '订单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat,
		readonly:true
	}, {
		title: '备注',
		field: 'remark',
        type:"textarea",
        normalArea :true,
        maxlength:255,
        required:true
		
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
                    json: {"code": selRecords[0].code,approver:sessionStorage.getItem('userName'),approveNote:"审核通过"}
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
                    json: {"code": selRecords[0].code, approver:sessionStorage.getItem('userName'),approveNote:"审核通过"}
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