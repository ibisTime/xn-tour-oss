$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');

	var fields = [{
		title: '投诉人',
		field: 'commiter',
        readonly:true
	},{
		title: '联系方式',
		field: 'contact',
        readonly:true
	}, {
		title: '投诉时间',
		field: 'commitDatetime',
        formatter:dateTimeFormat,
        readonly:true
	},{
		field : 'type',
		title : '类型',
        type:"select",
        key:"complain_type",
		formatter:Dict.getNameForList("complain_type"),
		search: true,
        readonly:true
	},{
		title:"投诉内容",
		field:"content",
        type:"textarea",
        normalArea :true ,
        readonly:true
	},{
		title:"回复",
		field:"dealNote",
        type:"textarea",
        normalArea :true ,
		required:true,
        maxlength:255   
	},{
		title:"处理人",
		field:"dealer",
        type:"hidden",
        value:sessionStorage.getItem('userName'),
	},];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
		// addCode:"618201",
        // editCode:"618201",
		detailCode: '618207',
		searchParams:{
			status:"1"
		}
	});
 
});