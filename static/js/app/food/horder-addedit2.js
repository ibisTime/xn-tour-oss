$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var view1 = !!getQueryString('v1');
    var RoomType = Dict.getNameForList("hh_type");
    var fields = [{
            title: '订单编号',
            field: "code1",
            '[value]': 'code',
            readonly: view
        }, {
            title: '酒店名称',
            field: 'name',
            formatter: function(v, data) {
                return data.oriData.name;
            },
            readonly: view
        }, {
            title: "房间类型",
            field: 'roomType',
            formatter: function(v, data) {
                return data.oriData.roomType;
            },
            readonly: view

        }, {
            title: '开始入住时间',
            field: 'startDate',
            formatter: dateTimeFormat,
            readonly: view

        }, {
            title: '退住时间',
            field: 'endDate',
            formatter: dateTimeFormat,
            readonly: view
        },
        {
            title: "入住人手机号",
            field: "checkInMobile",
            tel: true,
            readonly: view1 ? false : true
        }, {
            title: "入住人姓名",
            field: "checkInName",
            readonly: view1 ? false : true
        },
        {
            title: "数量",
            field: "quantity",
            readonly: view
        }, {
            title: "下单人",
            field: "mobile",
            formatter: function(v, data) {
                return data.oriData.applyUserName;
            },
            readonly: view
        }, {
            title: "下单时间",
            field: "applyDatetime",
            formatter: dateTimeFormat,
            readonly: view
        }, {
            title: "金额",
            field: "amount",
            formatter: moneyFormat,
            readonly: view
        }, {
            title: '支付金额',
            field: 'payAmount',
            formatter: moneyFormat,
            readonly: view
        }, {
            title: "状态",
            field: "status",
            key: "htorder_status",
            formatter: Dict.getNameForList("htorder_status"),
            readonly: view

        }, {
            title: "下单说明",
            field: "applyNote",
            readonly: view
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        beforeSubmit: function(data) {
            data.orderCode = code;
            return data;
        },
        editCode: "618048",
        detailCode: "618052",
        dataType: "hotalOrder"
    });
});
