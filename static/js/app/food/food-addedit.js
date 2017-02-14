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
        title:"导航类型",
        field: 'category',
        required: true,
        type:"select",
		listCode:"",
		keyName:"code",
		valueCode:"", 
        readonly:view
    },  {
        title:"美食类型",
        field: 'type',
        required: true,
        type:"select",
        key:"food_type",
        formatter:Dict.getNameForList("food_type"),
        readonly:view
    }, {
        title: '美食图片',
        field: 'pic',
        type: 'img',
        required: true,
        readonly:view
    },{
        field: 'price',
        title: '价格',
		amount:true,
        formatter:moneyFormat,
        required: true,
        readonly:view,
    },{
        field:"province1",
		title: '地址',
		required: true,
		type: 'citySelect',
        formatter: function (v, data) {
		          var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
		          return result || "-";
		      },
				afterSet: function (v, data) {
		          if (view) {
		              $('#province').html(data.province);
		              data.city && $('#city').html(data.city);
		              data.area && $('#area').html(data.area);
		              }
		      },
		readonly:view
	}, {
		title: '详细地址',
		field: 'detail',
		required: true,
		maxlength: 100,
		readonly:view 
	},{
		title: '经度',
		field: 'longitude',
		required: true,
		number:true,
		readonly:view 
	},{
		title: '纬度',
		field: 'latitude',
		required: true,
		number:true,
		readonly:view 
	}];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '618060',
		editCode: '618062',
		detailCode: '618072'
	});
});