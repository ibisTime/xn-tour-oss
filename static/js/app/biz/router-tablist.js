$(function() {
	var lineCode = getQueryString('lineCode');
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '针对线路',
        formatter:function(v,data){
            return data.line.name;
        } 
	}, {
		title: 'Tab名称',
		field: 'type',
		type:'select',
		key:"tab_type",
		formatter: Dict.getNameForList('tab_type'),
		required: true
	},{
		title:"备注",
		field:"remark",
	}];
	buildList({
		router: 'router_tablist',
		columns: columns,
		pageCode: '618096',
        searchParams:{
           // type:"2",
             lineCode:lineCode,
        },
         urlParams: {
             lineCode:lineCode,
         }  
	});
        $('#downBtn').remove();
        $('#detailBtn').remove();
        $('#guanBtn').remove();
		$('#pulBtn').remove();
        $('#frameBtn').remove();
        $('#addeditBtn').remove() ;
        $("#frameBtn").remove();
        $("#tabBtn").remove();
        $("#recomBtn").remove();
        $("#edit2Btn").on("click",function(){
                var selRecords = $("#tableList").bootstrapTable("getSelections");
                if ( selRecords.length <=0){
                    toastr.info("请选择记录");
                    return;
                }    
            window.location.href="router_tab.html?code="+selRecords[0].code+"&name="+selRecords[0].name;       
        });
        $('#detail2Btn').click(function() {
                var selRecords = $('#tableList').bootstrapTable('getSelections');
                if(selRecords.length <= 0){
                    toastr.info("请选择记录");
                    return;
                }
                
                window.location.href = "router_tab.html?code=" +selRecords[0].code;    
            }); 

});44