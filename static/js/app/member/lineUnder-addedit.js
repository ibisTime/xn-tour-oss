$(function() {
	var code = getQueryString('code');
	var view= !!getQueryString('v');
	var userId= getQueryString

('userId') || '';
	
	var fields = [{
		field: 'bizType',
		type: 'hidden',
		value: '-11'
	

},{
		field: 'bizNote',
		type: 'hidden',
		value: '线下取现'
	},{
		field : 'bankcardNumber',
		title : '取现银行卡卡号',
		required: true,
		maxlength: 60
	},{
		field: 'accountNumberList',
		title: '用户账户',
		required: true,
		type: 'select',
		multiple: true,
		pageCode: '802500',
		dict: [['currency', 'currency_kind'], ['type', 'account_kind']],
	     params: {
			currency: 'FRB',
	  		userId: userId
		},
		
        keyName: 'accountNumber',
		valueName: '{{realName.DATA}} - {{currencyName.DATA}} - {{typeName.DATA}}',
        searchName: 'realName',
		help: '支持户名查询'
	},{
		field : 'transAmount',
		title : '取现金额',
	     required: true,
		amount: true
	}];
	
	var options = {
		fields: fields,
		code: code,
	    addCode: '802510',
		view: view
	};
	
	buildDetail(options);

	$("#subBtn").off("click").on(     "click", function () {
		var data = $('#jsForm').serializeObject();
		data.transAmount = -data.transAmount;
	

	reqApi({
			code: "802510",
			json: data
		}).done(function(data) {
		sucDetail();
		});
	})
	
});