<<<<<<< HEAD
$(function() {
    var code = getQueryString('lineCode');
    //var view =getQueryString("v");

    var fields = [{
        hidden: true,
        field: "lineCode",
        value: code
    }, {
        title: '针对路线',
        field: 'name',
        readonly: true
    }, {
        title: 'Tab名称',
        field: 'type',
        type: 'select',
        key: "tab_type",
        formatter: Dict.getNameForList('tab_type'),
		value: "1",
        required: true,
		onChange: function(v){
			if(v == "1"){
				$("#description1").parent().parent().show();
				$("#description2,#description3,#description4").parent().parent().hide();
			}else if(v == "2"){
				$("#description2").parent().parent().show();
				$("#description1,#description3,#description4").parent().parent().hide();
			}else if(v == "3"){
				$("#description3").parent().parent().show();
				$("#description2,#description1,#description4").parent().parent().hide();
			}else if(v == "4"){
				$("#description4").parent().parent().show();
				$("#description2,#description3,#description1").parent().parent().hide();
			}
		}
    }, {
        title: '图文详述', // 1亮点，
        field: 'description1',
        type: 'textarea',
		required: true,
		afterSet: function(v, data){
			$('#description1')[0].editor.$txt.html(findTab(data.lineTabList, 1));
		}
    }, {
        title: '图文详述', // 2行程，
        field: 'description2',
        type: 'textarea',
        hidden: true,
		required: true,
		afterSet: function(v, data){
			$('#description2')[0].editor.$txt.html(findTab(data.lineTabList, 2));
		}
    }, {
        title: '图文详述', // 3费用，
        field: 'description3',
        type: 'textarea',
        hidden: true,
		required: true,
		afterSet: function(v, data){
			$('#description3')[0].editor.$txt.html(findTab(data.lineTabList, 3));
		}
    }, {
        title: '图文详述', // 4须知
        field: 'description4',
        type: 'textarea',
        hidden: true,
		required: true,
		afterSet: function(v, data){
			$('#description4')[0].editor.$txt.html(findTab(data.lineTabList, 4));
		}
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 255
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '618102',
    };

    options.buttons = [{
            title: '确定',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
					data.description = data["description" + data.type];
                    reqApi({
                        code: "618092",
                        json: data
                    }).done(function() {
                        sucDetail();
                    });
                }
            }
        },
        {
            title: '返回',
            handler: function() {
                goBack();
            }
        }
    ];

    buildDetail(options);

	function findTab(arr, type){
		var res = "";
		$.each(arr, function(i, a){
			if(a.type == type)
				res = a.description;
		});
		return res;
	}

});
=======
$(function() {
	var code = getQueryString('lineCode');
	//var name =getQueryString("name");
	 
	var fields = [{
		hidden: true,
		field: "lineCode",
		value: code
	}, {
		title: '针对路线',
		field: 'name',
		// formatter:function(v,data){
		// 	return name;
		// },
		readonly: true
	},{
		title: 'Tab名称',
		field: 'type',
		type:'select',
		key:"tab_type",
		formatter: Dict.getNameForList('tab_type'),
		required: true
	}, {
		title: '图文详述',
		field: 'description',
		type: 'textarea',
		required: true,
		
	},{
		title: '备注',
		field: 'remark',
		maxlength:255
	}];
	
	var options = {
        fields: fields,
        code: code,
		lineCode:code,
        detailCode: '618102',
		//detailCode: '618097',
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                 
                reqApi({
                    code: "618092",
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
>>>>>>> refs/remotes/origin/master
