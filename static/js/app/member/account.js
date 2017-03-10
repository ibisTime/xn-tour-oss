$(function() {

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'realName',
            title: '户名',
            search: true
        }, {
            field: 'accountNumber',
            title: '账号'
        },
        //  {
        //     field: 'type',
        //     title: '类型',
        //     type: 'select',
        //     key: 'account_kind',
        //     formatter: Dict.getNameForList('account_kind'),
        //     search: true
        // }, 
        {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'account_status',
            formatter: Dict.getNameForList('account_status'),
            search: true
        }, {
            field: 'amount',
            title: '余额',
            formatter: moneyFormat
        }, {
            field: 'frozenAmount',
            title: '冻结金额',
            formatter: moneyFormat
        }, {
            field: 'createDatetime',
            title: '创建时间',
            formatter: dateTimeFormat
        }
    ];
    buildList({
        router: 'account',
        columns: columns,
        pageCode: '802500',
        searchParams: {
            currency: "CNY"
        }
    });

    $('#applyBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "apply.html?accountCode=" + selRecords[0].accountNumber;
    });
    $('#flowBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "ledger.html?type=CNY&accountCode=" + selRecords[0].accountNumber;
    });

});