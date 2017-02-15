$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '针对线路',
		field: 'lineCode',
		readonly:true
	},{
		title: '用户名',
		field: 'publisher',
		readonly:true
	}, {
		title: '游记名称',
		field: 'name',
		readonly:true
	},{
		title: '游记内容',
		field: 'description',
		readonly:true
	},{
		title:"游记图片",
		field:"pic",
		type:"img", 
		readonly:true
	}];
	
	 var options = {
        fields: fields,
        code: code,
        detailCode: '618132'
    };

    options.buttons = [{
        title: '通过',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approvelResult"] = "1";
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