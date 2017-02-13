$(function() {
	var code = getQueryString('code');
	//var  view =getQueryString('v');
	
	var fields = [ {
		title: '针对酒店',
		field: 'topCode',
        // formatter:function(v,data){
		// 	return  data.res.topCode
		// },
		readonly:true
    },	{
		field : "type",
		title : '类型',
        key:"ht_type",
		// formatter:function(v,data){
		// 	return  data.res.type
		// },
		formatter:Dict.getNameForList("ht_type"),
        type:"select"
	},{
		title: '用户名',
		field: 'commer',
		readonly:true
	}, {
		title: '评论时间',
		field: 'commDatetime',
        formatter:dateTimeFormat,
		readonly:true
	},{
		title: '评论内容',
		field: 'content',
		readonly:true
	},{
		title: '备注',
		field: "approveNote",
         
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
                data["approveResult"] = "2";
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