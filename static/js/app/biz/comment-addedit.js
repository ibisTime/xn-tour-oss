$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '针对线路',
		field: '',
		readonly:true
	},{
		title: '用户名',
		field: 'commer',
		readonly:true
	}, {
		title: '评论时间',
		field: 'commDatetime',
        formatter:dataTimeFormat,
		readonly:true
	},{
		title: '评论内容',
		field: 'content',
        type:"textarea",
        normalArea:true,
		readonly:true
	},{
		title: '备注',
		field: "approveNote",
        type:"textarea",
        normalArea:true,
        maxlength:255,
	}];
	
	 var options = {
        fields: fields,
        code: code,
        detailCode: '618317'
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
                    code: "618311",
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
                    code: "618311",
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