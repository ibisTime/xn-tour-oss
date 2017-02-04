$(function() {

    var router = '/user';

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'loginName',
        title: '用户名',
        search: true
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('user_status'),
        type: 'select',
        key: 'user_status'
    }, {
        field: 'roleCode',
        title: '角色',
        type: 'select',
        key:'user_type',
       // formatter: Dict.getNameForList('user_type'),
        // listCode: '805021',
        // keyName: 'code',
        // valueName: 'name',
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        router: 'user',
        columns: columns,
        pageCode: '805054',
        searchParams: {
            kind: '01'
        }
    });

    $('#assignBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "user_role.html?userId=" + selRecords[0].userId + "&loginName=" + encodeURI(encodeURI(selRecords[0].loginName)) + "&kind=" + selRecords[0].kind;
    });

    $('#resetBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        location.href = "user_pwd_reset.html?userId=" + selRecords[0].userId + '&loginName=' + selRecords[0].loginName;
    });

    $('#rockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var status = selRecords[0].status,
            toStatus;
        status == 0 ? toStatus = 2 : toStatus = 0;
        reqApi({
            code: '805052',
            json: {
                userId: selRecords[0].userId,
                toStatus: toStatus
            }
        }).then(function() {
            sucList();
        });
    });

    $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        reqApi({
            code: '805052',
            json: {
                userId: selRecords[0].userId,
                toStatus: '0'
            }
        }).then(function() {
            sucList();
        });
    });

});