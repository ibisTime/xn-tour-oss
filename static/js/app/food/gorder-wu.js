$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: "发货单号",
        field: 'orderCode',
        required: true,
        readonly: view,
        maxlength: 32
    }, {
        title: '物流公司',
        field: 'logisticsCompany',
        type: "select",
        key: "wl_company",
        formatter: Dict.getNameForList("wl_company"),
        readonly: view,
        required: true,
    }, {
        title: '物流单号',
        field: 'logisticsCode',
        readonly: view,
        required: true,
        maxlength: 32
    }, {
        title: "发货人",
        field: "deliverer",
        required: true,
        readonly: view
    }, {
        title: "发货时间",
        field: "deliveryDatetime",
        type: "datetime",
        required: true,
        formatter: dateTimeFormat,
        readonly: view
    }, {
        title: '物流单',
        field: 'pdf',
        type: "img",
        required: true,
        readonly: view
    }];


    buildDetail({
        fields: fields,
        code: code,
        view: view,
        editCode: "618455",
        detailCode: '618472'
    });
});