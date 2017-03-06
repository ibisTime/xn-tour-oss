$(function() {
	
    var carpoolCode = getQueryString('code');
     var code = getQueryString('code');

	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"拼车单号",
        field:'carpoolCode'
    },{
		title: '数量',
		field: 'quantity'
	},{
		title:"下单人",
		field:"name",
		// formatter:function(v,data){
        //     return data.carpool.name
        // }
	},{
		title:"手机号",
		field:"mobile",
		// formatter:function(v,data){
        //     return data.carpool.mobile
        // }
	},{
		title:"下单说明",
		field:"applyNote",
        
    },{
        title:"下单时间",
        field:"applyDatetime",
        formatter:dateTimeFormat   
    },{
        title:"首次支付金额",
        field:"firstPayAmount",
        formatter:moneyFormat    
    },
    // {
    //     title:"首次支付编号",
    //     field:"firstPayCode",
         
    // },
    {
        title:"第二次支付金额",
        field:"firstPayAmount",
        formatter:moneyFormat    
    },
    // {
    //     title:"第二次支付编号",
    //     field:"secondpayCode",
    //  }, 
     {
		title:"状态",
		field:"status",
        type:"select",
        key:"carpoord_status",
        formatter:Dict.getNameForList("carpoord_status"),
        search:true
	} ];
	buildList({
		router: 'carpoli',
		columns: columns,
        code:code,
		pageCode: '618253',
        searchParams:{
           carpoolCode:carpoolCode
        }
		//deleteCode: ''
	});
    $("#receiveBtn").remove();
    $("#cancelBtn").remove();
     $("#finishBtn").remove();
     $("#exportBtn").remove();

     $("#detail2Btn").on("click",function(){
      var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
       window.location.href="carpoli_addedit.html?code="+selRecords[0].code;

    })
});