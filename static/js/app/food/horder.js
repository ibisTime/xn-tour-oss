$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
        title:"订单编号",
        field:'',
   
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
	},
	// {
	// 	title:"价格",
	// 	field:"",
	// 	formatter:moneyFormat
	// },
	// {
	// 	title:"房型",
	// 	field:"",
    //     type:"select",
    //     key:"home_type",
    //     search:true
	// },
	{
		title:"房间号",
		field:"roomNum",
		listCode:'618031',
		keyName:"code",
		valueName:"roomNum"
	},{
		title:"酒店状态",
		field:"",
        type:"select",
        key:"hotel_status",
	},{
		title: '下单时间',
		field: '',
        formatter:dateTimeFormat
	},{
		title:"订单状态",
		field:"",
        type:"select",
        key:"horder_status",
       
	}];
	buildList({
		router: 'horder',
		columns: columns,
		pageCode: '618050',
		deleteCode: ''
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
                    sucDetail();
                });
            });

        });
      

});