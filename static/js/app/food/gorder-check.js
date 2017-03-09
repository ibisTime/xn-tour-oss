$(function() {
    var code = getQueryString('code');
    //var  view =getQueryString('v');

    var fields = [{
            title: "订单编号",
            field: 'code1',
            formatter: function(v, data) {
                return data.code
            },
            readonly: true
        }, {
            title: '商品名称',
            field: 'name',
            readonly: true,
            formatter: function(v, data) {
                return data.productOrderList[0].productName;
            },
        }, {
            title: '商品数量',
            field: 'quantity',
            readonly: true,
            formatter: function(v, data) {
                return data.productOrderList[0].quantity;
            },
        }, {
            title: '积分价格',
            field: 'amount1',
            readonly: true
        },
        {
            title: '下单时间',
            field: 'applyDatetime',
            formatter: dateTimeFormat, // 
            readonly: true
        }, {
            title: "收货地址",
            field: "reAddress",
            formatter: function(v, data) {
                return data.reAddress
            },
            readonly: true
        }, {
            title: "收货人",
            field: "receiver",
            formatter: function(v, data) {
                return data.receiver
            },
            readonly: true
        }, {
            title: "收货人手机号码",
            field: "reMobile",
            formatter: function(v, data) {
                return data.reMobile
            },
            readonly: true
        }, {
            title: "订单状态",
            field: "status",
            formatter: function(v, data) {
                return data.productOrderList[0].status
            },
            readonly: true
        }, {
            title: "备注",
            field: 'approveNote',

            maxlength: 255,
            //required:true,
        }
    ];

    var options = {
        fields: fields,
        code: code,
        detailCode: '618472'
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["approvelResult"] = "1";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618457",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["approvelResult"] = "0";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618457",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);

});