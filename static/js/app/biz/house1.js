$(function() {
	var hotalCode = getQueryString("hotalCode");
    var name  = getQueryString("name");
    var descriptionDict = Dict.getNameForList("ss_type");
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"民宿名称",
        field:'name',
        value:name,
        formatter: function(){
            return name;
        }
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
        formatter: function(data){
            var arr = data.split(/,/), str = "";
            for(var i = 0; i < arr.length; i++){
                str += descriptionDict(arr[i]) + "、";
            }
            return i && str.substr(0, str.length - 1) || "";
        }
	}, {
        title:"价格",
        field:"price",
        amount:true,
        formatter:moneyFormat
    } ];
	buildList({
		router: 'house1',
		columns: columns,
		pageCode: '618030',
		deleteCode: '618021',
        searchParams:{
            type:"2",
            hotalCode:hotalCode
        },
         urlParams: {
             hotalCode:hotalCode
         }
	});
  
        $('#detailBtn').remove();
        $('#guanBtn').remove();
		$('#pulBtn').remove();
        $('#frameBtn').remove();
});