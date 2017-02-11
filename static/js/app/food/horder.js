$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"订单编号",
        field:'code',
   
    },{
		title: '酒店名称',
		field: 'name',
		listCode:"",
		valueName:"",
		keyName:"",
        search:true
	},{
		title: '酒店电话',
		field: 'telephone',
	},{
		title: '酒店地址',
		field: 'province1',
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
		// listCode:'618031',
		// keyName:"code",
		// valueName:"roomNum"
	},
	{
		title:"房间数",
		field:"quantity",
		 
	},{
		title:"房型",
		field:"room_type",
		search:true,
		type:"select",
		key:"home_type",
		formatter:Dict.getNameForList("home_type"),
		 
	},{
		title: '下单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat
	},{
		title:"订单状态",
		field:"status",
        type:"select",
        key:"horder_status",
        formatter:Dict.getNameForList("horder_status")
	},{
		title:"买家嘱托",
		field:"remark",
        
	}];
	buildList({
		router: 'horder',
		columns: columns,
		pageCode: '618050',
		deleteCode: '',
		searchParams:{
			type:"1"
		}
	});
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
           // var msg = selRecords[0].status == 1 ? "确认上架该酒店？": "确认下架该酒店？";
		   
            confirm("确认取消该订单？").then(function() {
                reqApi({
                    code: '618044',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                   toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });
      

});