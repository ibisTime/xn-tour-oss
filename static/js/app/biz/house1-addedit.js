$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var  hotalCode=getQueryString('hotalCode');
    var fields = [{
        field: "hotalCode",
        value: hotalCode,
        type: 'hidden'
    },{
            field: 'roomNum',
            title: '房间号',
            number:true,
            required: true,
            readonly: view,   
        },{
            field: 'type',
            title: '房间类型',
            type:"select",
            key:"hm-type2",
            required: true,
            readonly: view
        },{
            field: 'price',
            title: '价格',
            amount: true,
            formatter:moneyFormat,
            required: true,
            readonly: view
        },{
            field: 'description',
            title: '设施服务',
            type:"checkbox", 
            items:[{
                key:"1",
                value:"免费Wi-Fi"
            },{
                key:"2",
                value:"不含早餐"
            },{
                key:"3",
                value:"无烟房"
            }],
            required: true,
            readonly: view
        },{
            field: 'picture',
            title: '房间图片',
            type:"img",
            required: true,
            readonly: view
        }];

    var options = {
        fields: fields,
        code: code,
        view:view,
        addCode:"618020",
        editCode:"618022",
        detailCode: '618032',
        searchParams:{
            type:"1",
            hotalCode:hotalCode
            
        }
    };

    buildDetail(options);
});