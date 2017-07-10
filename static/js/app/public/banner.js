$(function() {

	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: 'banner名称',
		field: 'name',
        search:true
	},{
		title: '位置',
		field: 'location',
        formatter: function(v){
			if(v == "index_banner"){
				return '微信端首页';
			}else if(v == "pc_index_banner"){
				return 'pc端首页';
			}
		}
	}, {
		title: '顺序',
		field: 'orderNo',

	}, {
		title: '备注',
		field: 'remark',
	}];
	buildList({
		columns: columns,
		pageCode: '806050',
		deleteCode: '806041',
		searchParams:{
			companyCode: 0,
			type:2,
			systemCode:"CD-CLW000005",
		}
	});



});
