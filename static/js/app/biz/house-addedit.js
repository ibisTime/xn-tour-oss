$(function() {
    var code = getQueryString('code');
    var  hotalCode=getQueryString('hotalCode');
    var view = !!getQueryString('v');
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
    }, {
            field: 'roomNum',
            title: '房间号',
            number:true,
            required: true,
            readonly: view,   
        },{
            field: 'type',
            title: '房间类型',
            type:"select",
            key:"hh_type",
            formatter:Dict.getNameForList("hh_type"),
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
            items: items,
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
        // searchParams:{
        //     type:"1",
        //     hotalCode:hotalCode
        // },
         urlParams: {
             hotalCode:hotalCode
         }
    };

    buildDetail(options);
});