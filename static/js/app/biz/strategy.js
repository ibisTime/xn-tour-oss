$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '针对线路',
		formatter:function(v,data){
			return data.line.name
		},
		search:true
	},{
		field : 'title',
		title : '攻略标题',
		search:true
	},{
		title: '收藏次数',
		field: 'collectionTimes' 
	},{
		title:"更新时间",
		field:"updateDatetime",
	    formatter: function(value, row, index){
        	return row['updateDatetime'] ? dateTimeFormat(row['updateDatetime']) : dateTimeFormat(value);
        },
		//formatter:dateTimeFormat,
	},{
		title: '状态',
		field: 'status',
		type:"select",
		key:'hotel_status',
		formatter:Dict.getNameForList("hotel_status")
	},{
		title:"备注",
		field:"remark",
	},];
	buildList({
		router: 'strategy',
		columns: columns,
		pageCode: '618115',
		//deleteCode: '618111'
	});

	$("#frameBtn").on("click",function(){
			var selRecords = $("#tableList").bootstrapTable("getSelections");
			if ( selRecords.length <=0){
				toastr.info("请选择记录");
				return;
			}
			var msg = selRecords[0].status == 1 ? "确认下架该攻略？": "确认上架该攻略？";

			confirm(msg).then(function() {
				reqApi({
					code: '618113',
					json: {"code": selRecords[0].code}
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
			if ( selRecords[0].status ==1){
				toastr.info("请先下架，再修改信息");
				return;
			}

			window.location.href="strategy_addedit.html?code="+selRecords[0].code;

	});
    $('#delete2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            //var msg = selRecords[0].status == 1 ? "确认下架该活动？": "确认上架该活动？";
            if(selRecords[0].status== 1){
                toastr.info("已上架，不能删除该记录");
                return;
            }
            confirm("确定删除该记录？").then(function() {
                reqApi({
                    code: '618111',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });

});