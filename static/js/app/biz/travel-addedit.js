$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        field: 'lineCode',
        title: '针对线路',
        formatter: function(v, data) {
            return data.line.name
        },
    }, {
        field: 'mobile',
        title: '用户名',
        readonly: view,
        // formatter: function(v, data) {
        //     return data.line.mobile
        // },
    }, {
        field: 'name',
        title: '游记名称',
        readonly: view
    }, {
        title: "更新时间",
        field: "publishDatetime",
        formatter: function(value, row, index) {
            return row['updateDatetime'] ? dateTimeFormat(row['updateDatetime']) : dateTimeFormat(value);
        },
        readonly: view
    }, {
        title: '收藏次数',
        field: 'collectionTimes'
    }, {
        title: '点赞次数',
        field: 'likeTimes',
        readonly: view
    }, {
        title: "图片",
        field: "pic",
        type: "img",
        readonly: view
    }, {
        title: '审核状态',
        field: 'status',
        type: "select",
        key: 'tracheck_status',
        formatter: Dict.getNameForList("tracheck_status"),
        readonly: view
    }, {
        title: "备注",
        field: "remark",
        readonly: view
    }, ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        // addCode: '',
        // editCode: '',
        detailCode: '618132'
    });


});