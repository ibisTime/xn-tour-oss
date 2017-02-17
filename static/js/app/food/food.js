$(function() {
     var descriptionDict = Dict.getNameForList("dining_time");


	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"美食名称",
        field:'name',
        search:true
    },{
		title: '美食类型',
		field: 'type',
        type:"select",
        listCode:"806052",
        keyName:"code",
        valueName:"name",
        params:{
        location:"depart_deli"
        },
        search:true
	},{
		title:"位置",
		field:"province1",
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
        title:"价格",
        field:"price",
        formatter:moneyFormat
    },{
		title:"状态",
		field:"status",
        type:"select",
        key:"food_status",
        formatter:Dict.getNameForList("food_status"),
	}];
	buildList({
		router: 'food',
		columns: columns,
		pageCode: '618070',
		deleteCode: '618061'
	});
         
         $('#frameBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].status == 0 ? "确认上架该美食？": "确认下架该美食？";

            confirm(msg).then(function() {
                reqApi({
                    code: '618063',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				
                });
            });

        });
       
});