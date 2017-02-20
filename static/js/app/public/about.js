$(function() {
    var code;
    reqApi({
        code: "807717",
        json: {
            ckey: "aboutus"
        },
        sync: true
    }).then(function(data){
        code = data.id;
    });
	
	var fields = [ {
		title: '公司信息',
		field: 'cvalue',
		type:"textarea",
	},{
		title: '',
		field: 'note',
        value:"note",
		hidden:true
	},{
         field:"id",
         value:code,
         hidden:true
    }
    ];
	
   var options={
        fields: fields,
		code: code,
		//editCode: '807711',
		detailCode: '807716'
       };

    options.buttons = [{
        title: "确定",
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = {};
                data["cvalue"] = $("#cvalue").val();
                data["note"] = $("#note").val();
                data["id"] = $("#id").val();
                reqApi({
                    code: "807711",
                    json: data
                }).done(function () {
                    toastr.info("操作成功");
                });
            }
        }
    },
    //  {
    //     title: '返回',
    //     handler: function () {
    //         goBack();
    //     }
    // }
    ];   
		
   



	buildDetail(options);
});