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
        type:'hidden',
        // key:"weight_type",
		value:"1",
		required:true,  
	}, {
		field: "level",
		title:"等级",
         type:'hidden',
		value:"0",
		required:true,   
	},{
		field: "reaction",
		title:"反应",
        type:'hidden',
		value:"3",
        key:"word_reaction",
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