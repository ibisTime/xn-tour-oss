$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    var typeObj = {};

    reqApi({
        code: "806052",
        json: {
            location: "goout"
        },
        sync: true
    }).then(function(res) {
        $.each(res, function(i, r) {
            if (r.code == 31 || r.code == 32 || r.code == 33 || r.code == 38)
                typeObj[r.code] = r.name;
        });
    });
    var fields = [{
        title: "专线名称",
        field: "name",
        required: true,
        maxlength: 32,
        readonly: view
    }, {
        title: '乘车地点',
        field: 'address',
        required: true,
        maxlength: 32,

        readonly: view
    }, {
        title: '类型',
        field: 'type',
        type: 'select',
        data: typeObj,
        required: true,
        readonly: view,
    }, {
        title: '核载人数',
        field: 'maxNum',
        number: true,
        required: true,
        readonly: view
    }, {
        title: '起点',
        field: 'startSite',
        type: "select",
        key: "zero_type",
        required: true,
        readonly: view,

    }, {
        title: '终点',
        field: 'endSite',
        type: "select",
        key: "destination_type",
        required: true,
        readonly: view
    }, {
        title: "价格",
        field: "price",
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: view
    }, {
        title: '出发时间',
        field: 'outDatetime',
        type: "datetime",
        required: true,
        readonly: view,
        formatter: dateTimeFormat,
    }, {
        title: "图片",
        field: "pic",
        type: "img",
        required: true,
        readonly: view,
    }, {
        title: '剩余票数',
        field: 'remainNum',
        number: true,
        required: true,
        readonly: view,
    }, {
        title: "备注",
        field: 'remark',
        maxlength: 255
    }];

    // buildDetail({
    //     fields: fields,
    //     code: code,
    //     view: view,
    //     addCode: '618160',
    //     editCode: '618162',
    //     detailCode: '618172'
    // });
    var options = {
        fields: fields,
        code: code,
        detailCode: '618172',

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
                        code: "618160",
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