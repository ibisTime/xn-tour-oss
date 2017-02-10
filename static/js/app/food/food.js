$(function() {
	
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
        key:"food_type",
        formatter:Dict.getNameForList("food_type")
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
        field:"",
        formatter:moneyFormat
    },{
		title:"状态",
		field:"",
        type:"select",
        key:"food_type",
        formatter:Dict.getNameForList("food_type"),
	}];
	buildList({
		router: 'food',
		columns: columns,
		pageCode: '618070',
		deleteCode: '618061'
	});

        // $('#pulBtn').click(function() {
        //     var selRecords = $('#tableList').bootstrapTable('getSelections');
        //     if(selRecords.length <= 0){
        //         toastr.info("请选择记录");
        //         return;
        //     }
        //     var msg = selRecords[0].status == 1 ? "确认推荐该酒店？": "确认取消推荐该酒店？";
             
        //      confirm(msg).then(function() {
        //         reqApi({
        //             code: '',
        //             json: {"code": selRecords[0].code}
        //         }).then(function() {
        //             sucDetail();
        //         });
        //      });
        // });
         
         $('#frameBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].status == 1 ? "确认上架该美食？": "确认下架该美食？";

            confirm(msg).then(function() {
                reqApi({
                    code: '',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    sucDetail();
                });
            });

        });
       


});