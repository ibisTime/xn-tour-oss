$(function() {
    var accountCode = getQueryString('accountCode') || '';
    var type = getQueryString('type'); //CNY XNB

    // 40-45 30 -30 01 02
    var XNBData = {},
        CNYData = {},
        bizData;
    var arr = Dict.getName('biz_type');
    $.each(arr, function(i, d) {
        if (isXNB(d.dkey)) {
            XNBData[d.dkey] = d.dvalue;
        } else {
            CNYData[d.dkey] = d.dvalue;
        }
    });
    bizData = type == "CNY" ? CNYData : XNBData;

    function isXNB(type) {
        if (type == "40" || type == "41" || type == "42" || type == "43" ||
            type == "44" || type == "45" || type == "30" || type == "-30" || type == "01" || type == "02")
            return true;
        return false;
    }
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
    }, {
        field: 'currency',
        title: '币种',
        type: 'select',
        key: 'currency_type',
        formatter: Dict.getNameForList('currency_type'),
        //search: true
    }, {
        field: 'channelType',
        title: '渠道',
        type: 'select',
        key: 'channel_type',
        formatter: Dict.getNameForList('channel_type'),
        search: true
    }, {
        field: 'bizType',
        title: '业务类型',
        type: 'select',
        data: bizData,
        search: true
    }, {
        field: 'transAmount',
        title: '变动金额',
        formatter: moneyFormat
    }, {
        field: 'preAmount',
        title: '变动前金额',
        formatter: moneyFormat
    }, {
        field: 'postAmount',
        title: '变动后金额',
        formatter: moneyFormat
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'jour_status',
        formatter: Dict.getNameForList('jour_status'),
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        columns: columns,
        pageCode: "802520",
        searchParams: {
            accountNumber: accountCode,
            // status: 'effect'
        }
    });
    $('#detailBtn').remove();
    $('#inteBtn').remove();
    $('#phoneBtn').remove();
    $('#loginBtn').remove();
    $('#exportBtn').remove();
    $("#activeBtn").remove();
    $('#streamBtn').remove();
    $("#importBtn").remove();
    $('#flowBtn').remove();
    $('#applyBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "apply.html?accountCode=" + selRecords[0].accountNumber;
    });

    $('#enchasBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "lengder.html?accountNumber=" + selRecords[0].accountNumber;
    });
});