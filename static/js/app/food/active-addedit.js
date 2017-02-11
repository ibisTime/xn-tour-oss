$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [ {
		title: '活动名称',
		field: 'name',
        maxlength:255,
        required :true,
        readonly:view
    },{
        title: '活动开始时间',
		field: 'startDate',
        type:'datetime',
        formatter:dateTimeFormat,
        required :true,
        readonly:view
    },{
        title: '活动结束时间',
		field: 'endDate',
        type:'datetime',
        formatter:dateTimeFormat,
        required :true,
        readonly:view
    },{
        title: '活动地点',
		field: 'site',
        maxlength:32,
        required :true,
        readonly:view
    },{
        title: '活动详情',
		field: 'description',
        type:'textarea',
        normalArea :true, 
        maxlength:255,
        required :true,
        readonly:view
    },{
		title:"备注",
		field:"remark",
        maxlength:255,
        readonly:view
       
	}];
    

    buildDetail({
		fields: fields,
		code: code,
		view:view,
		addCode: '618080',
		editCode: '618082',
		detailCode: '618092'
	});
});