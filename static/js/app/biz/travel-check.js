$(function() {
    var code = getQueryString('code');
    //var  view =getQueryString('v');

    var fields = [{
        field: 'lineCode',
        title: '针对线路',
        formatter: function(v, data) {
            return data.line.name
        },
        readonly: true
    }, {
        field: 'mobile',
        title: '用户名',
        // formatter: function(v, data) {
        //     return data.line.mobile
        // },
        readonly: true
    }, {
        field: 'name',
        title: '游记名称',
        readonly: true
    }, {
        title: "更新时间",
        field: "publishDatetime",
        formatter: function(value, row, index) {
            return row['updateDatetime'] ? dateTimeFormat(row['updateDatetime']) : dateTimeFormat(value);
        },
        readonly: true
    }, {
        title: "图片",
        field: "pic",
        type: "img",
        readonly: true
    }, {
        title: "内容",
        field: "description",
        type: "textarea",
        readonly: true
    }, {
        title: "备注",
        field: "approveNote",
        maxlength: 255
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '618132'
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approvelResult"] = "1";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618123",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approvelResult"] = "0";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "618123",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);


});