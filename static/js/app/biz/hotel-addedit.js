$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title: '酒店名称',
        field: 'name',
        readonly:view,
        required: true,
        maxlength:32
    }, {
        field: 'type',
        title: '酒店类型',
		type:'select',
        required: true,
        readonly:view,
    },{
		title: '酒店位置',
        field:"province1",
		required: true,
		type: 'citySelect',
		readonly:view,
        formatter: function (v, data) {
          var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
          return result || "-";
         },
	}, {
		title: '详细地址',
		field: 'detail',
		required: true,
		maxlength: 32,
		hidden: !!view
	}, 
    // {
	// 	title: '酒店位置',
	// 	field: 'province1',
	// 	hidden: !view,
	// 	readonly: true,
	// 	formatter: function(v, r) {
	// 		var res = $.unique([r.province, r.city, r.area]).reverse();
	// 		return res.join(' ') + ' ' + r.address;
	// 	}
	// }, 
    {
        title:"酒店电话",
        field: '',
        required: true,
        phone :true,
        readonly:view
    }, {
        title: '酒店特色',
        field: '',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        readonly:view,
        required:true
    }, {
        title: '酒店美食',
        field: '',
        type: "textarea",
        normalArea: true,
        maxlength: 255,
        required: true,
        readonly:view,
    }, {
        title: '酒店图片',
        field: '',
        type: 'img',
        required: true,
        readonly:view
    }, {
        title: '',
        field: '222',
        type: 'o2m',
        editTable: true,
        addeditTable: true,
        readonly: view,
        requird:true,
        columns: [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: '',
            title: '房间号',
            number:true,
            required: true,
            readonly: view,   
        },{
            field: 'type',
            title: '房间类型',
            type:"select",
            key:"",
            required: true,
            readonly: view
        }, {
            field: 'price',
            title: '价格',
            amount: true,
            formatter:moneyFormat,
            required: true,
            readonly: view
        }]
    }];

    var options = {
        fields: fields,
        code: code,
        addCode:"",
        editCode:" ",
        detailCode: '617204'
    };

    options.buttons = [{
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    !view && options.buttons.unshift({
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                for (var i = 0, len = fields.length; i < len; i++) {
                    var item = fields[i];
                    if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                        data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                    } else if (item.emptyValue && !data[item.field]) {
                        data[item.field] = item.emptyValue;
                    }
                }
                data['id'] = data['code'];
                data["222"] = $('#222List').bootstrapTable('getData');
                if( !data["222"].length ){
                    toastr.info("房间信息不能为空");
                    return;
                }
                reqApi({
                    code: "",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    });

    buildDetail(options);
});