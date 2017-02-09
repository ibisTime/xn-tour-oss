$(function() {
	var hotalCode = getQueryString("hotalCode");
    var name  = getQueryString("name");

	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"民宿名称",
        field:'realName',
        listCode:"618011",
        kayName:"code",
        valueName:"realName", 
        
    },{
		title: '房间号',
		field: 'roomNum',     
	},{
		title: '房间类型',
		field: 'type',
        type:"select",
        key:"hm-type2",
        formatter:Dict.getNameForList("hm-type2")
	},{
		title: '设施服务',
		field: 'description',
        type:"checkbox",
        //key:""
	}, {
        title:"价格",
        field:"price",
        formatter:moneyFormat
    } ];
	buildList({
		router: 'house1',
		columns: columns,
		pageCode: '618030',
		deleteCode: '618021',
        searchParams:{
            type:"2"
            
        }
	});
  
        $('#detailBtn').remove();
        $('#guanBtn').remove();
		$('#pulBtn').remove();
        $('#frameBtn').remove();
});