$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title:"订单编号",
        field:'code',
		// listCode:"618031",
		// keyName:"code",
		// valueName:"",
        readonly:view
    },{
		title: '酒店名称',
		field: 'name',
        readonly:view
	},{
		title: '酒店电话',
		field: 'telephone',
        readonly:view
	},{
		title: '酒店地址',
		field: 'province1',
        readonly:view,
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
	},{
		title:"价格",
		field:"price",
		formatter:moneyFormat,
        readonly:view
	},{
		title:"房型",
		field:"type",
        type:"select",
        key:"home_type",
        readonly:view
	},{
		title:"房间号",
		field:"roomNum",
        readonly:view
	},{
		title:"酒店状态",
		field:"status",
        type:"select",
        key:"hotel_status",
        readonly:view
	},{
		title:"入驻时间",
		field:"startDate",
        formatter:dateTimeFormat,
	},{
		title:"入驻人数",
		field:"quantity",  
	},{
		title: '下单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat,
        readonly:view
	},{
		title:"订单状态",
		field:"applyDatetime",
        type:"select",
        key:"horder_status",
		formatter:Dict.getNameForList("horder_status"),
        readonly:view
       
	}];
    
    buildDetail({
		fields: fields,
		code: code,
		view:view,
		// addCode: '',
		// editCode: '',
		detailCode: '618052'
	});
});