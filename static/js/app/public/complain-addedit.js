$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: '投诉人',
		field: 'commiter',
        formatter:function(v,data){
			return  data.res.realName
		},
        readonly:true
	},{
		title: '联系方式',
		field: 'contact',
        readonly:true
	}, {
		title: '投诉时间',
		field: 'commitDatetime',
        formatter:dateTimeFormat,
        readonly:true
	},{
		field : 'type',
		title : '类型',
        type:"select",
        key:"complain_type",
		formatter:Dict.getNameForList("complain_type"),
		search: true,
        readonly:true
	},{
		title:"投诉内容",
		field:"content",
        type:"textarea",
        normalArea :true ,
        readonly:true
	},{
		title:"回复",
		field:"dealNote",
        type:"textarea",
        normalArea :true ,
		required:true,
        maxlength:255   
	}];
	
    var options = {
        fields: fields,
        code: code,
        detailCode: '618207',
		// searchParams:{
		// 	status:"1"
		// }
    };

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['dealer'] = sessionStorage.getItem('userName'); 
                data["dealNote"] = $("#dealNote").val();
                reqApi({
                    code: "618201",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    },
	 {
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    buildDetail(options);
});