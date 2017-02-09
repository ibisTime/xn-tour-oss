$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
        title:"酒店名称",
        field:'name', 
        search:true 
    },{
		title: '酒店类别',
		field: 'category',
        type:"select",
        key:"hotel_type2",
        formatter:Dict.getNameForList("hotel_type2")
	},{
		title: '酒店类型',
		field: 'type',
        type:"select",
        key:"hotel_type",
        formatter:Dict.getNameForList("hotel_type")
	},{
		title:"酒店位置",
		field:"location",
		formatter: function (v, data) {
		          var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
		          return result || "-";
		      },
				afterSet: function (v, data) {
		          if (view) {
		              $('#province').html(data.province);
		              data.city && $('#city').html(data.city);
		              data.area && $('#area').html(data.area);
		              }
		      },
	},{
		title:"酒店电话",
		field:"telephone",
        search:true
    },{
        title:"价格",
        field:"price",
        formatter:moneyFormat
    },{
		title:"状态",
		field:"status",
        type:"select",
        key:"hotel_status",
        formatter:Dict.getNameForList("hotel_status")
	}];
	buildList({
		router: 'hotel',
		columns: columns,
		pageCode: '618010',
		deleteCode: '618002',
        searchParams:{
            type:"1",
             
        }
	});
   
        $('#pulBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].location == 1 ? "确认取消推荐该酒店？": "确认推荐该酒店？";
             
             confirm(msg).then(function() {
                reqApi({
                    code: '618005',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                   toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
             });
        });
         
         $('#frameBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].status == 1 ? "确认上架该酒店？": "确认下架该酒店？";

            confirm(msg).then(function() {
                reqApi({
                    code: '618004',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });
       $('#guanBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            window.location.href = "house.html?code =" +selRecords[0].code +"&hotalCode="+selRecords[0].hotalCode+"&name="+selRecords[0].name;    
        });
    

});