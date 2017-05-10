$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
            title: "订单编号",
            field: "code1",
            formatter: function(v, data) {
                return data.code
            },
            readonly: view
        }, {
            title: '下单人',
            field: 'name',
            readonly: view

        }, {
            title: '线路名称',
            field: 'lineCode',
            formatter: function(v, data) {
                return data.line.name;
            },
            readonly: view
        },
        {
            title: '联系方式',
            field: "mobile",
            formatter: function(v, data) {
                return data.mobile;
            },
            readonly: view
        },
        {
            title: "支付金额",
            field: "amount",
            formatter: moneyFormat,
            readonly: view
        }, {
            title: '出行时间',
            field: 'outDate',
            formatter: dateFormat
        }, {
            title: '下单时间',
            field: 'applyDatetime',
            formatter: dateTimeFormat,
            readonly: view
        }, {
            title: "订单状态",
            field: "status",
            type: "select",
            key: "sporder_status",
            formatter: Dict.getNameForList("sporder_status"),
            readonly: view

        }, {
            title: "下单说明",
            field: "applyNote"
        }
    ];


    buildDetail({
        fields: fields,
        code: code,
        view: view,
        //addCode: '',
        //editCode: '',
        detailCode: '618152'
    });
});