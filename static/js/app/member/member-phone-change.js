$(function() {
	$("#userId").html(getQueryString("userId"));
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
		
		data.loginPwdStrength = calculateSecurityLevel(data.newLoginPwd);
		data.userId = sessionStorage.getItem("userId");
		reqApi({
			code: '805049',
			json: data
		}).then(function(data) {
			location.href = "../main.html";
		});
	});
	
	//返回
	$('#backBtn').click(function() {
		sessionStorage.setItem('activeMenu', 'member.htm');
		$('.nav li a', window.parent.frames['topFrame'].document).first().trigger('click');
	});
	
	 
});