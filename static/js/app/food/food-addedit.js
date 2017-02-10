$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title: '美食名称',
        field: 'name',
        readonly:view,
        required: true,
        maxlength:32
    }, {
        field: 'price',
        title: '价格',
		amount:true,
        formatter:moneyFormat,
        required: true,
        readonly:view,
    },{
        field:"province1"
		title: '地址',
		required: true,
		type: 'citySelect',
		readonly:view
	}, {
		placeholder: '详细地址',
		field: 'detail',
		required: true,
		maxlength: 100,
		readonly:view 
	},   {
        title:"美食类型",
        field: 'type ',
        required: true,
        type:"select",
        key:"food_type",
        formatter:Dict.getNameForList("food_type"),
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