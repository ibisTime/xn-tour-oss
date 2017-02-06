$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [ {
		title: '活动名称',
		field: '',
        maxlength:255,
        required :true,
        readonly:view
    },{
        title: '活动时间',
		field: '',
        type:'date',
        formatter:dateTimeFormat,
        required :true,
        readonly:view
    },{
        title: '活动地点',
		field: '',
        maxlength:32,
        required :true,
        readonly:view
    },{
        title: '活动详情',
		field: '',
        type:'textarea',
        normalArea :true, 
        maxlength:255,
        required :true,
        readonly:view
    },{
		title:"备注",
		field:"",
        maxlength:255,
        readonly:view
       
	}];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '',
		editCode: '',
		detailCode: ''
	});
});