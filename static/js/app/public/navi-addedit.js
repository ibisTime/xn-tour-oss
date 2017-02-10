$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: '导航名称',
		field: 'name',
        required:true,
        readonly:view,
        maxlength:32
	},{
		title: "导航位置",
		field: 'location',
        type:"select",
        key:"button_type",
        formatter:Dict.getNameForList("button_type"),
        required:true,
        readonly:view
	},{
		title: "导航类型",
		field: 'type',
        type:"select",
        key:"button_location",
        formatter:Dict.getNameForList("button_location"),
        required:true,
        readonly:view
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true,
		readonly: view,
		 
	},  {
		title: 'url地址',
		field: 'remark',
		//maxlength: 250,
		required: true,
		readonly: view
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
	} ];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
        addCode:"",
        editCode:"",
		detailCode: ''
	});
 
});