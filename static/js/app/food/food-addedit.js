$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    //var Dict.getNameForList("Dining_time");
    var descriptionDict = Dict.getName("dining_time"),
        items = [];
    for(var i = 0; i < descriptionDict.length; i++){
        items.push({
            key: descriptionDict[i].dkey,
            value: descriptionDict[i].dvalue
        });
    }
    var descriptionDict = Dict.getName("dining_num"),
        items2 = [];
    for(var i = 0; i < descriptionDict.length; i++){
        items2.push({
            key: descriptionDict[i].dkey,
            value: descriptionDict[i].dvalue
        });
    }
    var fields = [{
        title: '美食名称',
        field: 'name',
        readonly:view,
        required: true,
        maxlength:32
    },{
        title:"美食类型",
        field: 'type',
        required: true,
		type:'select',
        listCode:"806052",
        keyName:"code",
        valueName:"name",
        params:{
        location:"depart_deli"
        },
        readonly:view
    }, {
        title: '美食图片',
        field: 'pic',
        type: 'img',
        required: true,
        readonly:view
    },{
        field: 'price',
        title: '价格',
		// amount:true,
        // formatter:moneyFormat,
        required: true,
        readonly:view,
    },{
        field:"province1",
		title: '地址',
		required: true,
		type: 'citySelect',
        formatter: function (v, data) {
		          var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
		          return result || "-";
		      },
				afterSet: function (v, data) {
		          if (view) {
		              $('#province').html(data.province);
		              data.city && $('#city').html(data.city);
		              data.area && $('#area').html(data.area);
		              }
		      },
		readonly:view
	}, {
		title: '详细地址',
		field: 'detail',
		required: true,
		maxlength: 100,
		readonly:view 
	},{
		title: '经度',
		field: 'longitude',
		required: true,
		west:true,
		readonly:view,
        hidden:!view,
	},{
		title: '纬度',
		field: 'latitude',
		required: true,
		north:true,
        hidden:!view,
		readonly:view   
	},{
		title: '用餐时段',
		field: 'supplyTime',
		type:"checkbox", 
        items: items,
		readonly:view ,
        required: true,
	},{
		title: '用餐人数',
		field: 'maxSeat',
		type:"checkbox", 
        items: items2,
		readonly:view ,
        required: true,
	}];
    
   var options = {
        fields: fields,
		code: code,
		view:view,
		addCode: '618060',
		editCode: '618062',
		detailCode: '618072',
        dataType: "food"
    };

    buildDetail(options);


    $('#subBtn').off("click").click(function() {
        if ($('#jsForm').valid()) {
            var data = $('#jsForm').serializeObject();
            $('#jsForm').find('.btn-file [type=file]').parent().next().each(function(i, el) {
                var values = [];
                var imgs = $(el).find('.img-ctn');
                imgs.each(function(index, img) {
                    values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                });
                data[el.id] = values.join('||');
            });
            if ($('#jsForm').find('#province')[0]) {
                var province = $('#province').val();
                var city = $('#city').val();
                var area = $('#area').val();
                if (!city) {
                    data['city'] = province;
                    data['area'] = province;
                } else if (!area) {
                    data['city'] = province;
                    data['area'] = city;
                }
            }
            for (var i = 0, len = fields.length; i < len; i++) {
                var item = fields[i];
                if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                    data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                } else if (item.emptyValue && !data[item.field]) {
                    data[item.field] = item.emptyValue;
                } else if (item.readonly && item.pass) {
                    data[item.field] = $('#' + item.field).attr('data-value') || $('#' + item.field).html();
                }
                if (item.type == 'select' && item.passValue) {
                    data[item.field] = $('#' + item.field).find('option:selected').html();
                }
                if (item.type == "checkbox") {
                    data[item.field] = $.isArray(data[item.field]) ? data[item.field].join(",") : data[item.field];
                }
            }
             data['id'] = data['code'];
             
                var addr = data.province + data.city + data.area + data.detail;
                var myGeo = new BMap.Geocoder();
                myGeo.getPoint(addr, function(point) {
                    if (point) {
                        data.longitude = point.lng;
                        data.latitude = point.lat;
                        reqApi({
                            code: code ? options.editCode : options.addCode,
                            json: data
                        }).done(function(data) {
                            sucDetail();
                        });
                    } else {
                        alert("无法解析当前地址的经纬度!");
                    }
                });
             
        }
    });    
    
});