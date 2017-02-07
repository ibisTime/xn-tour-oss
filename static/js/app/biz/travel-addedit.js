$(function() {
	var code = getQueryString('code');
	var  view =getQueryString('v');
	
	var fields = [ {
		title: '关键词',
		field: '',
        readonly:view
	},{
		field : '',
		title : '用户名',
        readonly:view
	},{
		field : '',
		title : '游记路线',
        readonly:view
	},{
		field : '',
		title : '针对线路',
		key:"zd_router",
        type:"select",
        readonly:view
	},{
		title:"更新时间",
		field:"",
		formatter:dateFormat,
        readonly:view
	},{
		title: '收藏次数',
		field: ''
	},{
		title: '点赞次数',
		field: '',
        readonly:view
	},{
		title: '举报次数',
		field: '',
        readonly:view
	},{
		title: '审核状态',
		field: '',
		type:"select",
		key:'tracheck_status',
        readonly:view
	},{
		title:"备注",
		field:"",
        readonly:view
	},];
	
	buildDetail({
		fields: fields,
		code: code,
		view:view,
		// addCode: '',
		// editCode: '',
		detailCode: ''
	});
	
	
});