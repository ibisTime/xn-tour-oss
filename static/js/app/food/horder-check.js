$(function() {
    var code = getQueryString('code');

    var fields = [{
            title: '酒店名称',
            field: 'name',
            formatter: function(v, data) {
                return data.oriData.name;
            },
            readonly: true
        }, {
            title: "房间类型",
            field: 'roomType',
            formatter: function(v, data) {
                return data.oriData.roomType;
            },
            readonly: true
        }, {
            title: '开始入住时间',
            field: 'startDate',
            formatter: dateTimeFormat,
            readonly: true

        }, {
            title: '退住时间',
            field: 'endDate',
            formatter: dateTimeFormat,
            readonly: true
        },
        {
            title: "入住人手机号",
            field: "checkInMobile",
            readonly: true

        }, {
            title: "入住人姓名",
            field: "checkInName",
            readonly: true
        },
        {
            title: "数量",
            field: "quantity",
            readonly: true
        }, {
            title: "下单人",
            field: "applyUser",
            formatter: function(v, data) {
                return data.oriData.applyUser;
            },
            readonly: true
        }, {
            title: "下单说明",
            field: "applyNote",
            readonly: true
        }, {
            title: "下单时间",
            field: "applyDatetime",
            formatter: dateTimeFormat,
            readonly: true
        }, {
            title: "金额",
            field: "amount",
            formatter: moneyFormat,
            readonly: true
        }, {
            title: '支付金额',
            field: 'payAmount',
            formatter: moneyFormat,
            readonly: true
        }, {
            title: "状态",
            field: "status",
            key: "htorder_status",
            formatter: Dict.getNameForList("htorder_status"),
            readonly: true
        },
        {
            title: "审核说明",
            field: 'approveNote',
            maxlength: 255,
            required: true
        }
    ];

    var options = {
        fields: fields,
        code: code,
        detailCode: '618052',
        dataType: "hotalOrder"
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
                    code: "618046",
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
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approveResult"] = "0";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618046",
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