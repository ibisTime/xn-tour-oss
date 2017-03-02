$(function() {
	var code = getQueryString('Code');
	
	
	var fields = [ {
		title: '下单人',
		field: 'booker',
		readonly:true
	},
	{
		title: '手机号',
		field: 'mobile',
		formatter:function(v,data){
          return data.res.mobile
		},
		readonly:true,
	},
	//  {
	// 	title: '出行时间',
	// 	field: 'outDatetime',
	// 	formatter:dateTimeFormat,
	// 	readonly:true
	// },
	 {
		title: '预约时间',
		field: 'bookDatetime',
		readonly:true,
        formatter:dateTimeFormat
	}, {
		title: '起点',
		field: 'midSite',
		readonly:true
	},{
		title:"终点",
		field:"endSite",
	    readonly:true
	}, {
		title: '预约人数',
		field: 'totalNum',
		readonly:true
	},{
		title: '支付金额',
		field: 'payAmount',
		readonly:true,
        formatter:moneyFormat
    },{
        title:"状态",
        field:"status",
        key:"order_status",
        type:"select",
        readonly:true
    },{
        title:"备注",
        field:'remark',
        readonly:true
    },{
		hidden: true,
		field: "orderCodeList",
		value:["code"] ,
        required: true
	}, {
		title: '支付类型',
		field: 'payType',
        type:'select',
        key:'pay_type',
		required: true,
	}];
	
	var options = {
        fields: fields,
        code: code,
        detailCode: '618222',
	}; 

    options.buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
                reqApi({
                    code: "618212",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    },
	 {
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    buildDetail(options);
	
});