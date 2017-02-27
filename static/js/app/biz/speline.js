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
            location:"goout",
			//codeList:["31","32","35","38"]
        },
		//search:true,
	},{
		title: '起点',
		field: 'startSite',
		type:"select",
		key:"zero_type",
		formatter:Dict.getNameForList("zero_type")
	},{
		title:"终点",
		field:"endSite",
		type:"select",
		key:"destination_type",
		formatter:Dict.getNameForList("destination_type")
	},{
		title: '价格',
		field: 'price',
		formatter:moneyFormat
	},{
		title:"出发时间",
		field:"outDatetime",
		type:"date",
        //search:true,
        formatter:dateTimeFormat,
       
	},{
		title:"状态",
		field:"status",
        type:"select",
        key:"spe_status",
		formatter:Dict.getNameForList("spe_status"),
        search:true
	},{
		field1:"dateStart",
		field2:"dateEnd",
		title1:"出行时间",
        type1:"datetime",
		search:true,
		visible:false
	},
	 
	{
		title:"备注",
		field:"remark",
	}];
	buildList({
		router: 'speline',
		columns: columns,
		pageCode: '618170',
		//deleteCode: '618161'
	});

	$("#frameBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			var msg = selRecords[0].status == 1 ? "确认下架该线路？": "确认上架该线路？";
           
			// confirm('价格:<input type="number" id="money" value="'+selRecords[0].price+'">').then(function() {
			confirm(msg).then(function() {
				//var money=$("#money").val();
				reqApi({
					code: '618163',
					json: {"code": selRecords[0].code,price:selRecords[0].price}
				}).then(function() {
					toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				});
			});
	});
     $("#edit2Btn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			if ( selRecords[0].status!=0){
				toastr.info("只有未上架，才可进行信息修改");
				return;
			}
           window.location.href="speline_addedit.html?code="+selRecords[0].code;
			 
			 
	});
    $('#delete2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            if(selRecords[0].status  != 0){
                toastr.info("只有未上架才可删除记录");
                return;
            }
            confirm("确定删除该记录？").then(function() {
                reqApi({
                    code: '618161',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });

});