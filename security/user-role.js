$(function() {
	reqApi({
		code: '805021',
		json: {}
	}).done(function(data) {
		var html = "<option value=''>请选择</option>";
		if(typeof(data) != "undefined"){
			for(var i = 0;i < data.length;i++){
				html += "<option value='"+data[i].code+"'>" + data[i].name + "</option>";
			}
		}
		$("#roleCode").html(html);
	});
	
	$("#userId").html(getQueryString("userId"));
	$("#loginName").html(decodeURI(getQueryString("loginName")));
	
	//查询当前用户的角色
	var data = {"userId":$("#userId").html()};
	reqApi({
		code: '805056',
		json: data
	}).done(function(data) {
		$("#roleCode").val(data.roleCode);
		$("#remark").val(data.remark);
	});
	
	//提交
	$('#subBtn').click(function() {
		if(!$("#jsForm").valid()){
			return false;
		}
		var url = $("#basePath").val()+"/user/role/change";
		var data = {"userId":$("#userId").html(),"roleCode":$("#roleCode").val(), 'remark': $('#remark').val()};
		reqApi({
			code: '805053',
			json: data
		}).done(function(data) {
			sucDetail();
		});
	});
	
	//返回
	$('#backBtn').click(function() {
		goBack();
	});
	
	//入参合法性校验
	$("#jsForm").validate({
		rules: {
			roleCode: {
				required: true,
				maxlength: 32
			},
			remark: {
				maxlength: 200
			}
		}
	});
});