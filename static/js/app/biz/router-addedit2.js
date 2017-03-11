$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    var items = Dict.getName("router_type").map(function(item) {
        return {
            key: item.dkey,
            value: item.dvalue
        };
    });

    var fields = [{
            title: '线路名称',
            field: 'name',
            required: true,
            maxlength: 32,
            readonly: view
        }, {
            title: '线路类型',
            field: 'type',
            type: 'checkbox',
            items: items,
            required: true,
            readonly: view
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
            required: true,
            readonly: view,
            title: "类别",
        },
        {
            title: '线路形式',
            field: 'style',
            type: 'select',
            key: 'router_type2',

            required: true,
            readonly: view
        }, {
            title: '旅行时间',
            field: 'travelTime',
            type: 'select',
            key: 'router_time',
            required: true,
            readonly: view
        }, {
            title: '集合地',
            field: 'joinPlace',
            required: true,
            readonly: view
        }, {
            title: "出行日期",
            field: "outDate",
            type: "date",
            formatter: dateFormat,
            required: true,
            readonly: view
        }, {
            title: '价格',
            field: 'price',
            amount: true,
            formatter: moneyFormat,
            required: true,
            readonly: view
        }, {
            title: '线路图片',
            field: 'pathPic',
            type: "img",
            required: true,
            readonly: view
        }
    ];
    var options = {
        fields: fields,
        code: code,
        detailCode: '618102',

    };

    options.buttons = [{
            title: '确定',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    delete data["code"];
                    $('#jsForm').find('.btn-file [type=file]').parent().next().each(function(i, el) {
                        var values = [];
                        var imgs = $(el).find('.img-ctn');
                        imgs.each(function(index, img) {
                            values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                        });

                        data[el.id] = values.join('||');
                    });
                    for (var i = 0, len = fields.length; i < len; i++) {
                        var item = fields[i];
                        if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                            data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                        } else if (item.emptyValue && !data[item.field]) {
                            data[item.field] = item.emptyValue;
                        } else if (item.readonly && item.pass) {
                            data[item.field] = $('#' + item.field).attr('data-value') || $('#' + item.field).html();
                        }
                        if (item.type == 'select' && item.passValue) {
                            data[item.field] = $('#' + item.field).find('option:selected').html();
                        }

                        if (item.type == "checkbox") {
                            data[item.field] = $.isArray(data[item.field]) ? data[item.field].join(",") : data[item.field];
                        }
                    }
                    reqApi({
                        code: "618090",
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