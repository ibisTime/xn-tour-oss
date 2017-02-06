$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title: '美食名称',
        field: '',
        readonly:view,
        required: true,
        maxlength:32
    }, {
        field: '',
        title: '价格',
		amount:true,
        formatter:moneyFormat,
        required: true,
        readonly:view,
    },{
		title: '地址',
		required: true,
		type: 'citySelect',
		readonly:view
	}, {
		placeholder: '详细地址',
		field: 'address',
		required: true,
		maxlength: 100,
		hidden: !!view
	}, {
		title: '地址',
		field: 'province1',
		hidden: !view,
		readonly: true,
		formatter: function(v, r) {
			var res = $.unique([r.province, r.city, r.area]).reverse();
			return res.join(' ') + ' ' + r.address;
		}
	}, {
        title:"美食类型",
        field: '',
        required: true,
        type:"select",
        key:"food_type",
        readonly:view
    }, {
        title: '美食图片',
        field: '',
        type: 'img',
        required: true,
        readonly:view
    }];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '',
		editCode: '',
		detailCode: ''
	});
});