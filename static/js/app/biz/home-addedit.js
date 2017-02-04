$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title: '民宿主人',
        field: '',
        readonly:view,
        required: true,
        maxlength:32
    }, {
        title: '身份证件',
        field: '',
        idCard :true,
        readonly:view,
        required: true,
    }, {
        field: '',
        title: '联系电话',
		tm:true,
        required: true,
        readonly:view,
    },{
        field: '',
        title: '登录账号',
		maxlength:32,
        required: true,
        readonly:view,
    },{
        field: '',
        title: '民宿名称',
		maxlength:32,
        required: true,
        readonly:view,
    },{
		title: '民宿位置',
		required: true,
		type: 'citySelect',
		hidden: !!view,
	}, {
		placeholder: '详细地址',
		field: 'address',
		required: true,
		maxlength: 100,
		hidden: !!view
	}, {
		title: '酒店位置',
		field: 'province1',
		hidden: !view,
		readonly: true,
		formatter: function(v, r) {
			var res = $.unique([r.province, r.city, r.area]).reverse();
			return res.join(' ') + ' ' + r.address;
		}
	}, {
        title:"民宿电话",
        field: '',
        required: true,
        phone :true,
        readonly:view
    }, {
        title: '民宿特色',
        field: '',
        type: '',
        required: true,
        readonly:view,
        maxlength:255
    }, {
        title: '民宿美食',
        field: '',
        type: '',
        required: true,
        readonly:view,
        maxlength:255
    }, {
        title: '民宿图片',
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
            field: '',
            title: '房间类型',
            type:"select",
            key:"",
            required: true,
            readonly: view
        }, {
            field: '',
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
        editCode:"",
        detailCode: ''
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