$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    },{
		field : 'name',
		title : '导航名称',
		search: true
	},{
		field : 'location',
		title : '导航位置',
		type:"select",
		formatter: function(v){
			if(v == "depart_hotel"){
				return '出发-酒店';
			}
		}
	},{
		field: 'type',
		title: '导航类型',
		formatter: function(v){
			if(v == "3")
				return "模块";
		}
	},{
    	field : 'orderNo',
	   	title : '顺序'
    }];
	buildList({
		router: 'navi',
		columns: columns,
		pageCode: '806050',
		searchParams:{
			companyCode: 0,
			systemCode:"CD-CLW000005"
		}
		 
	});
         
    



});