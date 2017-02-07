$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: 'banner名称',
		field: '',
        required:true,
        readonly:view,
        maxlength:32
	},{
		title: '位置',
		field: '',
        type:"select",
        key:"banner_location",
        required:true,
        readonly:view
	}, {
		title: '顺序',
		field: '',
        number:true,
        required:true,
        readonly:view
	},{
		title:"链接",
		field:"",
        url:true,
        readonly:view
	},{
		title:"banner图片",
		field:"",
        type:"img",
        required:true,
        readonly:view
	},{
		title: '备注',
		field: '',
        readonly:view,
        maxlength:255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
        addCode:"",
        editCode:"",
		detailCode: ''
	});
 
});