$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		field: "word",
        title:"关键词",
	    search:true
	}, {
		field: "weight",
		title:"权重",
        type:'select',
        key:"weight_type",
        formatter:Dict.getNameForList("weight_type"),
	}, {
		field: "level",
		title:"等级",
        type:'select',
        key:"word_level",
        formatter:Dict.getNameForList("word_level"),
	},{
		field: "reaction",
		title:"反应",
        type:'select',
        key:"word_reaction",
        formatter:Dict.getNameForList("word_reaction"),
	}];
	buildList({
		router: 'word',
		columns: columns,
		pageCode: '618305',
		deleteCode:"618301"
	});
    
});