$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '线路名称',
        search:true
	},{
		field : 'type',
		title : '专线类型',
		type:"select",
        listCode:"806052",
        keyName:"code",
        valueName:"name",
        params:{
            location:"goout"
        }
	},{
		title: '起点',
		field: 'startSite'
	},{
		title:"终点",
		field:"endSite",
		
	},{
		title: '价格',
		field: 'price',
		formatter:moneyFormat
	},{
		title:"出发时间",
		field:"outDatetime",
        search:true,
        formatter:dateTimeFormat
	},{
		title:"状态",
		field:"status",
        type:"select",
        key:"spe_status",
		formatter:Dict.getNameForList("spe_status"),
        search:true
	},{
		title:"备注",
		field:"remark",
	}];
	buildList({
		router: 'speline',
		columns: columns,
		pageCode: '618170',
		deleteCode: '618161'
	});

	$("#frameBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			var msg = selRecords[0].status == 1 ? "确认下架该线路？": "确认上架该线路？";
           
			confirm('价格:<input type="number" value="'+selRecords[0].price+'">').then(function() {
				reqApi({
					code: '618163',
					json: {"code": selRecords[0].code}
				}).then(function() {
					toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				});
			});
	});



});