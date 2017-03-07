$(function() {
	var hotalCode = getQueryString("hotalCode");
    var name  = getQueryString("name");
    var descriptionDict = Dict.getNameForList("ss_type");
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },
    {
        title:"民宿名称",
        field:'name1',
        value:name,
        formatter: function(){
            return name;
        }
    },{
		title: '房间类型',
		field: 'name',
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
    } , {
        title:"总数",
        field:"totalNum",
        number:true    
    }];
	buildList({
		router: 'house1',
		columns: columns,
		pageCode: '618030',
		//deleteCode: '618021',
        searchParams:{
           // type:"2",
            hotalCode:hotalCode
        },
         urlParams: {
             hotalCode:hotalCode
         }
	});  
          $('#downBtn').remove();
        $('#detailBtn').remove();
        $('#guanBtn').remove();
		$('#pulBtn').remove();
        $('#frameBtn').remove();
        $("#edit2Btn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			window.location.href = "house1_addedit.html?code=" + selRecords[0].code+"&hotalCode="+selRecords[0].hotalCode;
			 
	   });

       $('#delete2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            confirm("确定删除该记录？").then(function() {
                reqApi({
                    code: '618021',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });

});