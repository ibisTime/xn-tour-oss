$(function() {
	$("#userId").html(getQueryString("userId"));
	$("#loginName").html(decodeURI(getQueryString("loginName")));
	//提交
	$('#subBtn').click(function() {
	    if(!$("#jsForm").valid()){
			return false;
		}
		var data = {};
		var t = $('form').serializeArray();
		$.each(t, function() {
			data[this.name] = this.value;
		});
		data["userId"] = $("#userId").html();
		data['adminUserId'] = 'CSHU201600000000000001';

		reqApi({
			code: '805078',
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
			adminPwd: {
				required: true,
				maxlength: 12,
				minlength: 6
			}
		}
	});
});