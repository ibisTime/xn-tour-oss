$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title: '商品名称',
        field: '',
        readonly:view,
        required: true,
        maxlength:32
    }, {
        title: '积分价格',
        field: '',
        readonly:view,
        required: true,
        number:true
    }, {
        field: '',
        title: '人民币价格',
		amount:true,
        formatter:moneyFormat,
        required: true,
        readonly:view,
    },{
        title: '图文详述',
        field: '222',
        type: 'textarea',
        readonly:view,
        required: true,
        maxlength:255
    },  {
        title: '商品图片',
        field: '',
        type: 'img',
        required: true,
        readonly:view
    },{
        title: '备注',
        field: '',
        readonly:view,
        maxlength:255
    }, ];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '',
		editCode: '',
		detailCode: ''
	});
});