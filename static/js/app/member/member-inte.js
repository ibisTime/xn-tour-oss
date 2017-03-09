$(function() {
    var userId = getQueryString("userId");

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '账户',
        field: 'accountNumber',

    }, {
        title: '账户类型',
        field: 'currency',
        key: 'account_type',
        formatter: Dict.getNameForList("account_type")

    }, {
        title: "账户金额",
        field: "amount",
        formatter: moneyFormat
    }, {
        title: '备注',
        field: 'remark',
    }];
    buildList({
        router: 'member-inte',
        columns: columns,
        pageCode: "802503",
        searchParams: {
            userId: userId
        },
    });
    $('#detailBtn').remove();
    $('#inteBtn').remove();
    $('#phoneBtn').remove();
    $('#loginBtn').remove();
    $('#exportBtn').remove();
    $("#activeBtn").remove();
    $('#streamBtn').remove();
});