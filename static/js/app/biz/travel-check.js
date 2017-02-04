$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '针对线路',
		field: '',
		readonly:true
	},{
		title: '用户名',
		field: '',
		readonly:true
	}, {
		title: '游记名称',
		field: '',
		readonly:true
	},{
		title: '游记内容',
		field: '',
		readonly:true
	},{
		title:"游记图片",
		field:"",
		// type:"date",
		// formatter:dateFormat,
		// required: true,
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