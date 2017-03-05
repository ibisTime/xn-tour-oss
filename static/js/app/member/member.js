$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '用户名',
		field: 'realName',
        search:true
	},{
		title: '手机号',
		field: 'mobile',
        search:true
	}, {
		title:"身份证号",
		field:"idNo",
	},{
		title:"状态",
		field:"status",
		type:"select",
		key:"account_status",
		formatter:Dict.getNameForList("account_status")
	},
	{ 
		title: '备注',
		field: 'remark',
	}];
	buildList({
		router: 'member',
		columns: columns,
		pageCode: '805054',
		searchParams:{
			kind:"f1"
		}
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
			if (selRecords[0].status == 2) {
            toastr.info("该账户已被注销");
            return;
        }
			var status = selRecords[0].status,toStatus;
				status == 0 ? toStatus = 2 : toStatus = 0;
			// var msg= selRecords[0].toStatus==0?"确定激活该账户？":"";
			 confirm("确定注销该账户？").then(function() {
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
       $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
		if (selRecords[0].status == 0) {
            toastr.info("该账户是已正常状态");
            return;
        }
        confirm("确定激活该账户？").then(function() {
				reqApi({
					code: '805052',
					json: {
						userId: selRecords[0].userId,
						toStatus: '0'
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

       $("#detail2Btn").click(function(){
           var selRecords = $('#tableList').bootstrapTable('getSelections');
					if(selRecords.length <= 0){
						toastr.info("请选择记录");
						return;
					}		
			window.location.href = "member_addedit.html?userId=" +selRecords[0].userId;

	   });


});