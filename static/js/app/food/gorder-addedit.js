$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    // var Status=Dict.getNameForList("order_status");


    var fields = [{
            title: "订单编号",
            field: 'code1',
            formatter: function(v, data) {
                return data.code
            },
            readonly: view
        }, {
            title: '商品名称',
            field: 'name',
            readonly: view,
            formatter: function(v, data) {
                return data.productOrderList[0].productName;
            },
        }, {
            title: '商品数量',
            field: 'quantity',
            readonly: view,
            formatter: function(v, data) {
                return data.productOrderList[0].quantity;
            },
        }, {
            title: '积分价格',
            field: 'amount1',
            formatter: moneyFormat,
            readonly: view
        }, {
            title: '下单人',
            field: 'mobile',
            readonly: view
        }, {
            title: '下单人联系方式',
            field: 'mobile1',
            formatter: function(v, data) {
                return data.mobile;
            },
            readonly: view
        },
        {
            title: '下单时间',
            field: 'applyDatetime',
            formatter: dateTimeFormat,
            readonly: view
        }, {
            title: "收货地址",
            field: "reAddress",
            formatter: function(v, data) {
                return data.reAddress
            },
            readonly: view
        }, {
            title: "收货人",
            field: "receiver",
            formatter: function(v, data) {
                return data.receiver
            },
            readonly: view
        }, {
            title: "收货人手机号码",
            field: "reMobile",
            formatter: function(v, data) {
                return data.reMobile
            },
            readonly: view
        }, {
            title: "订单状态",
            field: "status",
            type: "select",
            key: "order_status",
            formatter: Dict.getNameForList("order_status"),
            readonly: view
        }, {
            title: "发货人",
            field: "deliverer",
            readonly: view
        }, {
            title: "发货时间",
            field: "deliveryDatetime",
            formatter: dateTimeFormat,
            readonly: view
        }, {
            title: "快递单号",
            field: "logisticsCode",
            readonly: view
        }, {
            title: "快递公司",
            field: "logisticsCompany",
            type: "select",
            key: "wl_company",
            formatter: Dict.getNameForList("wl_company"),
            readonly: view
        }, {
            title: '物流单',
            field: 'pdf',
            type: "img",
            readonly: view
        }
    ];


    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '618472'
    });
});