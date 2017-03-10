$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'publisher1',
        title: '用户名',
        formatter: function(v, data) {
            return data.res.mobile
        },
    }, {
        field: 'name',
        title: '游记名称',
        search: true
    }, {
        field: 'lineCode',
        title: '针对线路',
        formatter: function(v, data) {
            return data.line.name
        },
        search: true
    }, {
        title: '是否推荐',
        field: 'location',
        type: "select",
        key: 'trahot_status',
        formatter: Dict.getNameForList("trahot_status"),

    }, {
        title: "更新时间",
        field: "publishDatetime",
        formatter: function(value, row, index) {
            return row['updateDatetime'] ? dateTimeFormat(row['updateDatetime']) : dateTimeFormat(value);
        }
    }, {
        title: '收藏次数',
        field: 'collectionTimes'
    }, {
        title: '点赞次数',
        field: 'likeTimes'
    }, {
        title: '审核状态',
        field: 'status',
        type: "select",
        key: 'tracheck_status',
        formatter: Dict.getNameForList("tracheck_status"),
        search: true
    }, {
        title: "备注",
        field: "remark",
    }];
    buildList({
        router: 'travel',
        columns: columns,
        pageCode: '618130',
        //deleteCode: '618121'
    });
    $('#delete2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("该记录不可删除");
            return;
        }
        confirm("确定删除该记录？").then(function() {
            reqApi({
                code: '618121',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });

    });
    $("#check2Btn").on("click", function() {
        var selRecords = $("#tableList").bootstrapTable("getSelections");
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 0) {
            toastr.info("该游记不是待审核状态");
            return;
        }
        window.location.href = 'travel_check.html?code=' + selRecords[0].code;
    });

    $("#topBtn").on("click", function() {
        var selRecords = $("#tableList").bootstrapTable("getSelections");
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 1) {
            toastr.info("该游记不能被置顶");
            return;
        }
        var msg = selRecords[0].location == 0 ? "确认置顶该游记？" : "确认取消置顶该游记？";

        confirm(msg).then(function() {
            reqApi({
                code: '618124',
                json: { "code": selRecords[0].code, orderNo: 1 }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });



});