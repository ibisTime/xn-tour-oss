$(function() {
    var code;
    reqApi({
        code: "807717",
        json: {
            ckey: "inte"
        },
        sync: true
    }).then(function(data){
        code = data.id;
    });
	
	var fields = [ {
		title: '',
		field: 'cvalue',
        value:"cvalue",
		hidden:true
	},{
		title: '积分规则',
		field: 'note',
        //value:"note",
        type:"textarea",
		
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