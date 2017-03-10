$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        title: "拼车单号",
        field: 'carpoolCode',
        readonly: true,
    }, {
        title: "下单人",
        field: "name",
        readonly: true,

    }, {
        title: "下单人联系方式",
        field: "mobile",
        readonly: true,
    }, {
        title: "下单时间",
        field: "applyDatetime",
        formatter: dateTimeFormat,
        readonly: true,
    }, {
        title: "首次支付金额",
        field: "firstAmount",
        formatter: moneyFormat,
        readonly: true,
    }, {
        title: "尾款",
        field: "secondAmount",
        formatter: moneyFormat,
        readonly: true,
    }, {
        title: "司机",
        field: 'driver',
        formatter: function(v, data) {
            return data.carpool.driver;
        },
        readonly: true,

    }, {
        title: "司机联系方式",
        field: 'mobiled',
        formatter: function(v, data) {
            return data.carpool.mobile;
        },
        readonly: true,

    }, {
        title: "拼车起点",
        field: 'startSite',
        formatter: function(v, data) {
            return data.carpool.startSite;
        },
        readonly: true,

    }, {
        title: "拼车目的地",
        field: 'endSite',
        formatter: function(v, data) {
            return data.carpool.endSite;
        },
        readonly: true,
    }, {
        title: "状态",
        field: "status",
        type: "select",
        key: "carpoord_status",
        formatter: Dict.getNameForList("carpoord_status"),
        search: true,
        readonly: true,
    }, {
        title: "下单说明",
        field: "applyNote",
        readonly: true,

    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '618255'
    });

    $("#subBtn").remove();
});