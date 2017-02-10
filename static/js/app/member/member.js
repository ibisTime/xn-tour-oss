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
		title: '密码',
		field: 'loginPwd',
        
	},{
		title:"身份证号",
		field:"idNo",
	},{
		title:"积分余额",
		field:"",
	},{
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
			window.location.href = "member_phone_change.html?code=" + selRecords[0].code + "&loginName=" + encodeURI(encodeURI(selRecords[0].loginName)) ;
           
        });
       
		$('#inteBtn').click(function() {
			var selRecords = $('#tableList').bootstrapTable('getSelections');
					if(selRecords.length <= 0){
						toastr.info("请选择记录");
						return;
					}		
			window.location.href = "member_inte.html?code=" + selRecords[0].code;
			 
		});




});