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
	},
	{
		title:"房间数",
		field:"quantity",
		 
	},
	{
		title:"酒店类型",
		field:"category",
		search:true,      
		type:"select",
		listCode:"806052",
        keyName:"code",
        valueName:"name",
        params:{
            location:"depart_hotel"
        } ,
		search:true,
		visible:false,
	},{
		title:"房型",
		field:"roomType",
		type:"select",
		key:"hh_type",
		formatter:Dict.getNameForList("hh_type")
	},
	{ 
		title: '下单时间',
		field: 'applyDatetime',
        formatter:dateTimeFormat
	},{
		title:"订单状态",
		field:"status",
        type:"select",
		search:true,
        key:"htorder_status",
        formatter:Dict.getNameForList("htorder_status")
	},{
		title:"买家嘱托",
		field:"applyNote",
        
	}];
	buildList({
		router: 'horder',
		columns: columns,
		pageCode: '618050',
		 
	});
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            } 
		 
		   
			if(selRecords[0].status !=1 && selRecords[0].status!=0){
                     toastr.info("该订单不能被取消");
                    return;	
            }else{
               confirm("确认取消该订单？").then(function() {
                    reqApi({
                        code: '618043',
                        json: {"code": selRecords[0].code}
                    }).then(function() {
                    toastr.info("操作成功");
                        $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                    });
                  });
            }
       });
        
      $('#check2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
			if(selRecords[0].status ==2){
                window.location.href ="horder_check.html?code="+selRecords[0].code;
            }else{
                toastr.info("该订单不是待审核状态");
                return;
            }
            
        }); 
         $('#enterBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
			if(selRecords[0].status ==32){
                window.location.href ="horder_in.html?code="+selRecords[0].code;
            }else{
                toastr.info("该订单不是待可以入住的状态");
                return;
            }
            
        }); 
});