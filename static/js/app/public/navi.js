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
			if(v == "depart_deli"){
				return '出发-美食';
			}
			if(v == "travel"){
				return '旅游';
			}
			if(v == "home_page"){
				return '首页';
			}	
			if(v == "goout"){
				return '出发';
			}
			if(v == "go_query"){
				return '查询';
			}
				
		   
		}  
	},{
		field: 'type',
		title: '导航类型',
		formatter: function(v){
			if(v == "3")
				return "模块";
			if(v == "2")
				return "banner";
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
			systemCode:"CD-CLW000005",
			type:3
		}
		 
	});
         
    



});