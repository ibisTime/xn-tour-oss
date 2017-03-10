$(function() {
    var descriptionDict = Dict.getNameForList("dining_time");


    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            title: "美食名称",
            field: 'name',
            search: true
        }, {
            title: '美食类型',
            field: 'type',
            type: "select",
            listCode: "806052",
            keyName: "code",
            valueName: "name",
            params: {
                location: "depart_deli"
            },
            search: true
        }, {
            title: "位置",
            field: "province1",
            formatter: function(v, data) {
                var result = (data.province || "") + (data.city || "") + (data.area || "");
                return result || "-";
            },
            afterSet: function(v, data) {
                if (view) {
                    $('#province').html(data.province);
                    data.city && $('#city').html(data.city);
                    data.area && $('#area').html(data.area);
                }
            },
        }, {
            title: "价格",
            field: "price",
            //  formatter:moneyFormat
        }, {
            title: '是否推荐',
            field: 'location',
            type: 'select',
            key: "hotel_location",
            formatter: Dict.getNameForList('hotel_location')
        },
        {
            title: 'UI顺序',
            field: 'orderNo',
        }, {
            title: "状态",
            field: "status",
            type: "select",
            key: "food_status",
            formatter: Dict.getNameForList("food_status"),
        }
    ];
    buildList({
        router: 'food',
        columns: columns,
        pageCode: '618070',
        //deleteCode: '618061'
    });
    $('#delete2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("已上架，不可删除记录");
            return;
        }
        confirm("确定删除该记录？").then(function() {
            reqApi({
                code: '618061',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });

    });
    //
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {

            confirm("确定下架该美食？").then(function() {
                reqApi({
                    code: '618064',
                    json: { "code": selRecords[0].code }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });
        } else {
            toastr.info("该美食不是上架的状态");
            return;
        }

    });
    $('#frameBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 1) {
            toastr.info("该美食已上架");
            return;
        }
        window.location.href = "food_top.html?code=" + selRecords[0].code;

    });
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("请先下架，再修改信息");
            return;
        }

        window.location.href = "food_addedit.html?code=" + selRecords[0].code;

    });
});