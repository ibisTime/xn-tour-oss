$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '用户名',
		field: 'loginName',
        search:true
	},{
		title: '手机号',
		field: 'mobile',
        search:true
	}, {
		title:"身份证号",
		field:"idNo",
	},
	 {
		field: 'toStatus',
        title: '状态',
        formatter: Dict.getNameForList('user_status'),
        type: 'select',
        key: 'user_status'
	}, 
	{ 
		title: '备注',
		field: 'remark',
	}];
	buildList({
		router: 'member',
		columns: columns,
		pageCode: '805054',
		//deleteCode: '',
		//  searchParams: {
        //     kind: '01'
        // }
	});
         
         $('#loginBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }

            window.location.href = "member_pwd_change.html?userId=" + selRecords[0].userId + '&loginName=' + selRecords[0].loginName;
            
        });
      $('#phoneBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }     
			var status = selRecords[0].status,toStatus;
				status == 0 ? toStatus = 2 : toStatus = 0;
			 var msg= selRecords[0].toStatus==0?"确定注销该账户？":"确定激活该账户？";
			 confirm(msg).then(function() {
                // reqApi({
                //     code: '805052',
                //     json: {"userId": selRecords[0].userId,"toStatus": selRecords[0].toStatus}
                // }).then(function() {
                //     toastr.info("操作成功");
				// 	$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                // });
				
				reqApi({
					code: '805052',
					json: {
						userId: selRecords[0].userId,
						toStatus: toStatus
					}
				}).then(function() {
					toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
				});
			 
            });

        });
       
		$('#inteBtn').click(function() {
			var selRecords = $('#tableList').bootstrapTable('getSelections');
					if(selRecords.length <= 0){
						toastr.info("请选择记录");
						return;
					}		
			window.location.href = "member_inte.html?userId=" +selRecords[0].userId;
			 
		});




});