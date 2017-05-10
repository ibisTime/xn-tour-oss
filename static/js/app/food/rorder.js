$(function() {
    var routerType = Dict.getNameForList("router_type");
    var routerType2 = Dict.getNameForList("router_type2");
    // var routerDi= Dict.getNameForList("router_di");
    var routerTime = Dict.getNameForList("router_time");
    var typeDict = Dict.getNameForList("router_type");

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            title: "订单编号",
            field: 'code',
            search: true
        }, {
            title: '线路名称',
            field: 'name',
            formatter: function(v, data) {
                return data.line.name;
            }

        }, {
            title: '集合地',
            field: 'joinPlace',
            //type:'select',
            formatter: function(v, data) {
                return data.line.joinPlace;
            },
        }, {
            title: '线路时间',
            field: 'travelTime',
            formatter: function(v, data) {
                return routerTime(data.line.travelTime);
            },
            type: "select",
        },
        {
            title: "线路形式",
            field: "style",
            formatter: function(v, data) {
                return routerType2(data.line.style);
            },
        },
        {
            title: "线路类型",
            field: "type",
            type: "checkbox",
            formatter: function(v, data) {
                var arr = data.line.type.split(/,/),
                    str = "";
                for (var i = 0; i < arr.length; i++) {
                    str += typeDict(arr[i]) + "、";
                }
                return i && str.substr(0, str.length - 1) || "";

            }
        },
        {
            title: '价格',
            field: 'amount',
            formatter: moneyFormat
        },
        {
            title: '出行时间',
            field: 'outDate',
            formatter:dateFormat
        },
        {
            title: '下单时间',
            field: 'applyDatetime',
            formatter: dateTimeFormat
        },
        {
            title: "订单状态",
            field: "status",
            type: "select",
            search: true,
            key: "sporder_status",
            formatter: Dict.getNameForList("sporder_status"),
        },
        {
            title: "备注",
            field: "remark"
        }
    ];
    buildList({
        router: 'rorder',
        columns: columns,
        pageCode: '618150',

    });


    $('#cancelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 1 && selRecords[0].status != 0) {
            toastr.info("该订单不能被取消");
            return;
        } else {
            confirm("确认取消该订单？").then(function() {
                reqApi({
                    code: '618143',
                    json: { "code": selRecords[0].code, remark: "取消订单" }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });
        }

    });
    $('#receBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 1) {
            toastr.info("该订单不能接单");
            return;
        } else {
            confirm("确认接单？").then(function() {
                reqApi({
                    code: '618144',
                    json: { "code": selRecords[0].code, remark: "接单" }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });
        }

    });
    $('#finishBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 32) {
            toastr.info("该订单不是待完成状态");
            return;
        } else {
            confirm("确认该订单已经完成？").then(function() {
                reqApi({
                    code: '618147',
                    json: { "code": selRecords[0].code, remark: "接单" }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });
        }

    });
    $('#check2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 2) {
            window.location.href = "rorder_check.html?code=" + selRecords[0].code;
        } else {
            toastr.info("该订单不是待审核状态");
            return;
        }

    });
});