$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title:'大类',
        field:"category",
        value:"0",
        type:"hidden", 
    },{
        field:"type",
        value:"0",
        type:"hidden",
    },{
        field:"advTitle",
        value:"0",
        type:"hidden",
    },{
        field:"quantity",
        value:"0",
        type:"hidden",
    },{
        title: '商品名称',
        field: 'name',
        readonly:view,
        required: true,
        maxlength:255
    }, {
        title: '缩略图',
        field: 'advPic',
        readonly:view,
        required: true,
        type:"img"
    }, {
        field: 'costPrice',
        title: '成本价',
        value:"0",
        type:"hidden",
    },{
        title: '图文详述',
        field: 'description',
        type: 'textarea',
        readonly:view,
        required: true
    },  {
        title: '商品图片',
        field: 'pic1',
        type: 'img',
        required: true,
        readonly:view
    },{
        title: '备注',
        field: 'remark',
        readonly:view,
        maxlength:255
    }];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '618410',
		editCode: '618412',
		detailCode: '618422',
        dataType:"product"
	});
});