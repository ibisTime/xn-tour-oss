$(function() {
    var code = getQueryString('code');
    //var  view =getQueryString('v');

    var fields = [{
            title: '订单号',
            field: 'code1',
            formatter: function(v, data) {
                return data.code
            },
            readonly: true
        }, {
            title: '下单人',
            field: 'booker1',
            readonly: true,
            formatter: function(v, data) {
                return data.res.mobile
            },
            readonly: true
        },
        {
            title: '手机号',
            field: 'mobile',
            formatter: function(v, data) {
                return data.res.mobile
            },
            readonly: true,
        }, {
            title: '预约时间',
            field: 'bookDatetime',
            readonly: true,
            formatter: dateTimeFormat
        }, {
            title: '起点',
            field: 'midSite',
            readonly: true
        }, {
            title: "终点",
            field: "endSite",
            readonly: true
        }, {
            title: '预约人数',
            field: 'totalNum',
            readonly: true
        }, {
            title: '支付金额',
            field: 'payAmount',
            readonly: true,
            formatter: moneyFormat
        }, {
            title: "状态",
            field: "status",
            key: "order_status",
            type: "select",
            readonly: true
        },
        {
            title: "审核回复",
            field: "approveNote",
            maxlength: 255,
            required: true
        }
    ];

    var options = {
        fields: fields,
        code: code,
        detailCode: '618222'
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["approveResult"] = "1";

                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618216",
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
                data["approveResult"] = "0";
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "618216",
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