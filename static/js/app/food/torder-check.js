$(function() {
    var code = getQueryString('code');
    //var  view =getQueryString('v');

    var fields = [{
        title: "订单编号",
        field: "code1",
        formatter: function(v, data) {
            return data.code
        },
        readonly: true
    }, {
        title: '下单人',
        field: 'realName',
        readonly: true

    }, {
        title: '联系方式',
        field: 'mobile',
        readonly: true
    }, {
        title: '专线名称',
        field: "name",
        formatter: function(v, data) {
            return data.specialLine.name;
        },
        readonly: true
    }, {
        title: "支付金额",
        field: "amount",
        formatter: moneyFormat,
        readonly: true
    }, {
        title: '下单时间',
        field: 'applyDatetime',
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: "订单状态",
        field: "status",
        type: "select",
        key: "sporder_status",
        formatter: Dict.getNameForList("sporder_status"),
        readonly: true

    }, {
        title: "审核说明",
        field: 'approveNote',
        maxlength: 255,
        required: true,
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '618192'
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
                    code: "618186",
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
                    code: "618186",
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