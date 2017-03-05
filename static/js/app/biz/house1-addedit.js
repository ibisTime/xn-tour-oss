$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var  hotalCode=getQueryString('hotalCode');
    var descriptionDict = Dict.getName("ss_type"),
        items = [];
    for(var i = 0; i < descriptionDict.length; i++){
        items.push({
            key: descriptionDict[i].dkey,
            value: descriptionDict[i].dvalue
        });
    }

    var fields = [{
        field: "hotalCode",
        value: hotalCode,
        type: 'hidden'
    },{
            field: 'name',
            title: '房间类型',
             maxlength:32,
            // type:"select",
            // key:"hh_type",
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
            items:items,
            required: true,
            readonly: view
        },{
            field: 'picture',
            title: '房间图片',
            type:"img",
            required: true,
            readonly: view
        },{
            field: 'totalNum',
            title: '房间总数',
            value:"1",
            required: true,
            readonly: true,   
        },];

    var options = {
        fields: fields,
        code: code,
        view:view,
        addCode:"618020",
        editCode:"618022",
        detailCode: '618032',
        searchParams:{
           // type:"2",
            hotalCode:hotalCode
            
        }
    };

    buildDetail(options);
});