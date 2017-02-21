$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
    var isBranch = getQueryString('b');

	var fields = [{
		field: "status",
		required: 'true',
		hidden: true
	}, {
		field: "companyCode",
		hidden: true,
		value: sessionStorage.getItem('systemCode')
	}, {
		field: "belong",
		required: 'true',
		hidden: true
	}, {
		field: 'isCompanyEdit',
		hidden: true,
		value: 0
	}, {
		field: "parentCode",
		required: 'true',
		hidden: true
	}, {
		field: "contentType",
		required: 'true',
		hidden: true
	}, {
		title: '导航名称',
		field: 'name',
        required:true,
        readonly:view,
        maxlength:32
	},{
		title: "导航位置",
		field: 'location',
		readonly: true,
		afterSet:function(v){
			if(v == "depart_hotel"){
				$('#location').html('出发-酒店')
					.attr("data-location", v);
			}
		},
		formatter:function(v,data){
			return  data.location
		}
		   
	},{
		title: "导航类型",
		field: 'type',
        readonly:true,
		afterSet: function(v){
			if(v == "3")
				$("#type").attr("data-type", v).html("模块");
		}
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true,
		readonly: view,
		 
	},{
		title: '图片',
		field: 'pic',
		required: true,
		type:"img",
		readonly: view,
		 
	},  {
		title: 'url地址',
		field: 'url',
		//maxlength: 250,
		required: true,
		afterSet: function(v, data){
			if(/^page:/i.test(v)){
				$("#url").closest("li").hide();
			}
		}
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
	} ];
	
	buildDetail({
		fields: fields,
		code: code,
        view:view,
        addCode:"806040",
        editCode:"806042",
		detailCode: '806053',
		beforeSubmit: function(data){
			data.location = $("#location").attr("data-location");
			data.type = $("#type").attr("data-type");
			return data;
		}
	});
 
});