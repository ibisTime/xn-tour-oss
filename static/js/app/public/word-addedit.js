$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var fields = [{
		field: "word",
        title:"关键词",
		required:true,  
		maxlength:32,
        readonly:view
	}, {
		field: "weight",
		title:"权重",
        type:'select',
        key:"weight_type",
        formatter:Dict.getNameForList("weight_type"),
        readonly:view,
		required:true,  
	}, {
		field: "level",
		title:"等级",
        type:'select',
        key:"word_level",
        readonly:view,
		required:true,   
	},{
		field: "reaction",
		title:"反应",
        type:'select',
        key:"word_reaction",
        readonly:view,
		required:true,  
	},{
        title:"备注",
        field:"remark",
        maxlength:255,
    }];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
        addCode:"618300",
        editCode:"618302",
		detailCode: '618306',
     });

   });