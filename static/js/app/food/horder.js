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
		formatter :function(v, data){        
		    return  data.hotal.name;
		},
        search:true
	},{
		title: '酒店电话',
		field: 'telephone',
		formatter:function(v ,data){
			return  data.hotal.telephone
		}
	},{
		title: '酒店地址',
		field: 'province1',
		formatter: function (v, data) {
		          var result = ( data.hotal.province || "" ) + ( data.hotal.city || "" ) + ( data.hotal.area || "" );
		          return result || "-";
		      },
				afterSet: function (v, data) {
		          if (view) {
		              $('#province').html(data.hotal.province);
		              data.hotal.city && $('#city').html(data.hotal.city);
		              data.hotal.area && $('#area').html(data.hotal.area);
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
		search:true,      //hh_type
		type:"select",
		formatter :function(v, data){        
			return   data.hotal.category;
		},
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
		 
	});
         
         $('#cancelBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            } 
		 
		   
			if(selRecords[0].status !=2){
                     toastr.info("该订单不能被取消");
                    return;	
            }else{
               confirm("确认取消该订单？").then(function() {
                    reqApi({
                        code: '618044',
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
			if(selRecords[0].status ==6){
                window.location.href ="horder_check.html?code="+selRecords[0].code;
            }else{
                toastr.info("该订单不是待审核状态");
                return;
            }
            
        });

});