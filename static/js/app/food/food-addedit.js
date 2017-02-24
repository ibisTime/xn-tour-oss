$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    //var Dict.getNameForList("Dining_time");
    var descriptionDict = Dict.getName("dining_time"),
        items = [];
    for(var i = 0; i < descriptionDict.length; i++){
        items.push({
            key: descriptionDict[i].dkey,
            value: descriptionDict[i].dvalue
        });
    }
    var descriptionDict = Dict.getName("dining_num"),
        items2 = [];
    for(var i = 0; i < descriptionDict.length; i++){
        items2.push({
            key: descriptionDict[i].dkey,
            value: descriptionDict[i].dvalue
        });
    }
    var fields = [{
        title: '美食名称',
        field: 'name',
        readonly:view,
        required: true,
        maxlength:32
    },{
        title:"美食类型",
        field: 'type',
        required: true,
		type:'select',
        listCode:"806052",
        keyName:"code",
        valueName:"name",
        params:{
        location:"depart_deli"
        },
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
		readonly:view,
        maxlength:3
	},{
		title: '纬度',
		field: 'latitude',
		required: true,
		number:true,
		readonly:view,
        maxlength:3 
        
	},{
		title: '用餐时段',
		field: 'supplyTime',
		type:"checkbox", 
        items: items,
		readonly:view ,
        required: true,
	},{
		title: '用餐人数',
		field: 'maxSeat',
		type:"checkbox", 
        items: items2,
		readonly:view ,
        required: true,
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