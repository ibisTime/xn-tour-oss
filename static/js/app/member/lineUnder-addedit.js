$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var userId = getQueryString('userId') || '';

    var fields = [{
        field: 'bizType',
        type: 'hidden',
        value: '-11'
    }, {
        field: 'bizNote',
        type: 'hidden',
        value: '线下取现'
    }, {
        field: 'accountNumberList',
        title: '用户账户',
        required: true,
        type: "select",
        pageCode: "802500",
        keyName: "accountNumber",
        // valueName: '{{realName.DATA}}',
        required: true,
        // multiple: true,
        type: 'select',
        dict: [
            ['type', 'account_kind']
        ],
        params: {
            currency: 'CNY',
            userId: userId,
            type: 'NOT_P'
        },
        valueName: '{{realName.DATA}} - {{typeName.DATA}}',
        searchName: 'realName'
    }, {
        field: 'transAmount',
        title: '取现金额',
        required: true,
        amount: true
    }, {
        field: 'bankcardCode',
        title: '取现说明',
        required: true,
        maxlength: 32
    }, ];

    var options = {
        fields: fields,
        code: code,
        //addCode: '802510',
        view: view
    };

    buildDetail(options);

    $("#subBtn").off("click").on("click", function() {
        if ($('#jsForm').valid()) {
            var data = $('#jsForm').serializeObject();
            data.accountNumberList = [data.accountNumberList];
            data.transAmount = -data.transAmount;

            reqApi({
                code: "802510",
                json: data
            }).done(function(data) {
                sucDetail();
            });
        }
    })

});