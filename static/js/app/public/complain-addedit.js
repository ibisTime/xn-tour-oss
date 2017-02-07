$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: '投诉人',
		field: '',
        readonly:true
	},{
		title: '联系方式',
		field: '',
        readonly:true
	}, {
		title: '投诉时间',
		field: '',
        formatter:dateTimeFormat,
        readonly:true
	},{
		field : '',
		title : '类型',
        type:"select",
        key:"complain_type",
		search: true,
        readonly:true
	},{
		title:"投诉内容",
		field:"",
        type:"textarea",
        normalArea :true ,
        readonly:true
	},{
		title:"回复",
		field:"",
        type:"textarea",
        normalArea :true ,
        //readonly:view,
        maxlength:255
	}];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
        editCode:"",
		detailCode: ''
	});
 
});