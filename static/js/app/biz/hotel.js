$(function() {

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            title: "酒店名称",
            field: 'name',
            search: true
        },
        {
            title: '酒店类别',
            field: 'category',
            type: "select",
            listCode: "806052",
            keyName: "code",
            valueName: "name",
            params: {
                location: "depart_hotel"
            }
        },
        {
            title: '酒店类型',
            field: 'type',
            type: "select",
            key: "hotel_type",
            formatter: Dict.getNameForList("hotel_type")
        }, {
            title: "酒店位置",
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
            title: "酒店电话",
            field: "telephone",
            search: true
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
            key: "hotel_status",
            formatter: Dict.getNameForList("hotel_status")
        }
    ];
    buildList({
        router: 'hotel',
        columns: columns,
        pageCode: '618010',
        //deleteCode: '618002',
        searchParams: {
            categoryList: ["1", "2", "3", "5", "6", "7", "8"]

        }
    });

    $('#pulBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("该酒店已经上架");
            return;
        }
        window.location.href = "hotel_tu.html?code=" + selRecords[0].code;
    });

    $('#frameBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 2) {
            toastr.info("该酒店已下架");

            return;
        }
        confirm("确认下架该酒店？").then(function() {
            reqApi({
                code: '618005',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });

    });
    $('#guanBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "house.html?hotalCode=" + selRecords[0].code + "&name=" + selRecords[0].name;
    });
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info("请先下架，再进行酒店信息修改");
            return;
        }
        window.location.href = "hotel_addedit.html?code=" + selRecords[0].code;
    });
    $('#delete2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 0) {
            toastr.info("只有未上架才可删除记录");
            return;
        }
        confirm("确定删除该记录？").then(function() {
            reqApi({
                code: '618002',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });

    });
});