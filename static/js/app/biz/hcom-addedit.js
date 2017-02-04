$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '针对酒店',
		field: '',
		readonly:true
    },{
        title:"类型",
        field:"",
        type:'select',
        key:'',
        readonly:true,
    },{
		title: '用户名',
		field: '',
		readonly:true
	}, {
		title: '评论时间',
		field: '',
        formatter:dataTimeFormat,
		readonly:true
	},{
		title: '评论内容',
		field: '',
		readonly:true
	}];
	
	 var options = {
        fields: fields,
        code: code,
        detailCode: ''
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
                    code: "",
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
                    code: "",
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