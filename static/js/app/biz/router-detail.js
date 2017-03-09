$(function() {
    var code = getQueryString('code');
    var items = Dict.getName("router_type").map(function(item) {
        return {
            key: item.dkey,
            value: item.dvalue
        };
    });

    var specialLine = [],
        hotel = [],
        food = [];
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
                    name: d.specialLine.name
                });
            else if (d.type == "2")
                hotel.push({
                    code: d.hotal.code,
                    name: d.hotal.name,
                    category: d.hotal.category
                });
            else if (d.type == "3")
                food.push({
                    code: d.food.code,
                    name: d.food.name
                })
        });
    });



    var fields = [{
            title: '线路名称',
            field: 'name',
            maxlength: 32,
            readonly: true
        }, {
            title: '线路类型',
            field: 'type',
            type: 'checkbox',
            items: items,
            readonly: true
        },
        {
            field: 'category',
            type: "select",
            listCode: "806052",
            keyName: "code",
            valueName: "name",
            params: {
                location: "travel"
            },
            afterSet: function(v, r) {
                if (v == "travel") {
                    return "旅游"
                }
            },

            readonly: true,
            title: "类别",
        },
        {
            title: '线路形式',
            field: 'style',
            type: 'select',
            key: 'router_type2',
            readonly: true
        }, {
            title: '旅行时间',
            field: 'travelTime',
            type: 'select',
            key: 'router_time',
            readonly: true
        }, {
            title: '集合地',
            field: 'joinPlace',
            readonly: true
        }, {
            title: "出行日期",
            field: "outDate",
            type: "date",
            formatter: dateFormat,
            readonly: true
        }, {
            title: '线路价格',
            field: 'price',
            amount: true,
            required: true,
            readonly: true
        }, {
            title: 'UI位置',
            field: 'location',
            type: 'select',
            key: "hotel_location",
            required: true,
            readonly: true
        }, {
            title: 'UI顺序',
            field: 'orderNo',
            required: true,
            readonly: true
        }, {
            title: '线路图片',
            field: 'pathPic',
            type: "img",
            readonly: true
        }, {
            title: '备注',
            field: "remark",
            maxlength: 255,
            readonly: true

        }, {
            title: "亮点Tab",
            field: 'ldTab',
            type: "textarea",
            formatter: function(v, data) {
                for (var i = 0, len = data.lineTabList.length; i < len; i++) {
                    if (data.lineTabList[i].type == 1)
                        return data.lineTabList[i].description;
                };
                return "-";
            },
            readonly: true

        },
        {
            title: "行程Tab",
            field: 'xcTab',
            type: "textarea",
            formatter: function(v, data) {
                for (var i = 0, len = data.lineTabList.length; i < len; i++) {
                    if (data.lineTabList[i].type == 2)
                        return data.lineTabList[i].description;
                };
                return "-";
            },
            readonly: true,
        }, {
            title: "费用Tab",
            field: 'fyTab',
            type: "textarea",
            readonly: true,
            formatter: function(v, data) {
                for (var i = 0, len = data.lineTabList.length; i < len; i++) {
                    if (data.lineTabList[i].type == 3)
                        return data.lineTabList[i].description;
                };
                return "-";
            },
        }, {
            title: "须知Tab",
            field: 'xzTab',
            type: "textarea",
            readonly: true,
            formatter: function(v, data) {
                for (var i = 0, len = data.lineTabList.length; i < len; i++) {
                    if (data.lineTabList[i].type == 4)
                        return data.lineTabList[i].description;
                };
                return "-";
            }
        },

        {
            title: '出行推荐列表',
            field: 'tuijian1',
            type: 'o2m',
            readonly: true,
            columns: [{
                field: 'name',
                title: '名称',
                formatter: function(value, data) {
                    return '<a href=speline_addedit.html?v=1&code=' + data.code + ' style="line-height: inherit;">' + value + '</a>';
                }
            }],
            useData: specialLine
        }, {
            title: '酒店推荐列表',
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
            }],
            useData: hotel
        }, {
            title: '美食推荐列表',
            field: 'tuijian3',
            type: 'o2m',
            readonly: true,
            columns: [{
                field: 'name',
                title: '名称',
                formatter: function(value, data) {
                    return '<a href=../food/food_addedit.html?v=1&code=' + data.code + ' style="line-height: inherit;">' + value + '</a>';
                }
            }],
            useData: food
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '618102',

    });
    $("#subBtn").remove();

    function findTab(arr, type) {
        var res = "";
        $.each(arr, function(i, a) {
            if (a.type == type)
                res = a.description;
        });
        return res;
    }
});