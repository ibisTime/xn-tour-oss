$(function() {
    var code = getQueryString('lineCode');
    var specialLine = [],
        hotel = [],
        food = [];
    var onLineStatus = {
        "0": "已下架",
        "1": "已上架"
    }
    reqApi({
        code: "618103",
        json: {
            start: 1,
            limit: 1000,
            lineCode: code,
            status: "1"
        },
        sync: true
    }).then(function(data) {
        $.each(data.list, function(i, d) {
            if (d.type == "1")
                specialLine.push({
                    code: d.specialLine.code,
                    name: d.specialLine.name,
                    isOnline: d.isOnline
                });
            else if (d.type == "2")
                hotel.push({
                    code: d.hotal.code,
                    name: d.hotal.name,
                    category: d.hotal.category,
                    isOnline: d.isOnline
                });
            else if (d.type == "3")
                food.push({
                    code: d.food.code,
                    name: d.food.name,
                    isOnline: d.isOnline
                })
        });
    });

    var fields = [{
            hidden: true,
            field: "lineCode",
            value: code
        }, {
            title: '推荐类型',
            field: 'type',
            type: 'select',
            key: "tujian_type",
            formatter: Dict.getNameForList('tujian_type'),
            required: true,
            onChange: function(v) {
                if (v == 1) {
                    $('#comCode').renderDropdown({
                        listCode: '618170',
                        keyName: 'code',
                        valueName: 'name',
                        params: {
                            status: "1",
                            start: 1,
                            limit: 10
                        }
                    });
                    $('#comCode')[0].pageOptions = {
                        pageCode: '618170',
                        keyName: 'code',
                        valueName: 'name',
                        searchName: 'name'
                    };
                    $('#comCode')[0].pageParams = {
                        start: 1,
                        limit: 10
                    };
                    $.extend($('#comCode')[0].pageParams, { status: "1" });
                    $('#comCode')[0].pageParams.start += 1;
                    $("#tuijian1").parent().show();
                    $("#tuijian2,#tuijian3").parent().hide();
                } else if (v == 2) {
                    $('#comCode').renderDropdown({
                        listCode: '618010',
                        keyName: 'code',
                        valueName: 'name',
                        params: {
                            status: "1",
                            start: 1,
                            limit: 10,

                        }
                    });
                    $('#comCode')[0].pageOptions = {
                        pageCode: '618010',
                        keyName: 'code',
                        valueName: 'name',
                        searchName: 'name'
                    };
                    $('#comCode')[0].pageParams = {
                        start: 1,
                        limit: 10
                    };
                    $.extend($('#comCode')[0].pageParams, { status: "1" });
                    $('#comCode')[0].pageParams.start += 1;

                    $("#tuijian2").parent().show();
                    $("#tuijian1,#tuijian3").parent().hide();
                } else if (v == 3) {
                    $('#comCode').renderDropdown({
                        listCode: '618070',
                        keyName: 'code',
                        valueName: 'name',
                        params: {
                            status: "1",
                            start: 1,
                            limit: 10
                        }
                    });
                    $('#comCode')[0].pageOptions = {
                        pageCode: '618070',
                        keyName: 'code',
                        valueName: 'name',
                        searchName: 'name'
                    };
                    $('#comCode')[0].pageParams = {
                        start: 1,
                        limit: 10
                    };
                    $.extend($('#comCode')[0].pageParams, { status: "1" });
                    $('#comCode')[0].pageParams.start += 1;
                    $("#tuijian3").parent().show();
                    $("#tuijian2,#tuijian1").parent().hide();
                }
            }
        },
        {
            title: '推荐内容',
            field: 'comCode',
            required: true,
            type: 'select',

        },
        {
            title: '已经推荐', //出行
            field: 'tuijian1',
            type: 'o2m',
            readonly: true,
            columns: [{
                field: 'name',
                title: '名称',
                formatter: function(value, data) {
                    return '<a href=speline_addedit.html?v=1&code=' + data.code + ' style="line-height: inherit;">' + value + '</a>';
                }
            }, {
                field: 'isOnline',
                title: '状态',
                formatter: function(v, data) {
                    return onLineStatus[v];
                }
            }],
            useData: specialLine,
            hidden: true
        }, {
            title: '已经推荐', //酒店
            field: 'tuijian2',
            type: 'o2m',
            readonly: true,
            columns: [{
                field: 'name',
                title: '名称',
                formatter: function(value, data) {
                    if (data.category == "4")
                        return '<a href=home_addedit.html?v=1&code=' + data.code + ' style="line-height: inherit;">' + value + '</a>';
                    else {
                        return '<a href=hotel_addedit.html?v=1&code=' + data.code + ' style="line-height: inherit;">' + value + '</a>';
                    }
                }
            }, {
                field: 'isOnline',
                title: '状态',
                formatter: function(v, data) {
                    return onLineStatus[v];
                }
            }],
            useData: hotel,
            hidden: true
        }, {
            title: '已经推荐', //美食出行
            field: 'tuijian3',
            type: 'o2m',
            readonly: true,
            columns: [{
                field: 'name',
                title: '名称',
                formatter: function(value, data) {
                    return '<a href=../food/food_addedit.html?v=1&code=' + data.code + ' style="line-height: inherit;">' + value + '</a>';
                }
            }, {
                field: 'isOnline',
                title: '状态',
                formatter: function(v, data) {
                    return onLineStatus[v];
                }
            }],
            useData: food,
            hidden: true
        }
    ];

    var options = {
        fields: fields,
        lineCode: code,
        detailCode: '618102',
    };

    options.buttons = [{
            title: '确定',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();

                    reqApi({
                        code: "618093",
                        json: data
                    }).done(function() {
                        sucDetail();
                    });
                }
            }
        },
        {
            title: '返回',
            handler: function() {
                goBack();
            }
        }
    ];

    buildDetail(options);

});