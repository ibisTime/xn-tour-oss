$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},
	// {
	// 	title: '关键词',
	// 	field: 'content',
    //     visible:false,
    //     search:true
	// },
	{
		field : 'commer1',
		title : '用户名',
		formatter:function(v,data){
			return  data.res.nickname;
		}
	},{
		field : 'topCode',
		title : '针对美食',
		formatter:function(v,data){
			return data.line.name
		},
	},{
		field : "type",
		title : '美食类型',
		formatter:function(v,data){
			if (v==9){
				return "自助餐"
			} else if (v==16){
				return "西餐"
			}else if (v==15){
				return "外卖"
			}else if (v==14){
				return "烧烤烤肉"
			}else if (v==13){
				return "火锅"
			}else if (v==12){
				return "日韩料理"
			}else if (v==11){
				return "小吃快餐"
			}else if (v==10){
				return "甜点饮品"
			}	

		}
	},{
		title:"评论时间",
		field:"commDatetime",
		formatter:dateTimeFormat,
	},{
		title: '审核状态',
		field: 'status',
		type:"select",
		key:'tracheck_status',
		formatter:Dict.getNameForList("tracheck_status"),
        search:true
	},{
		title:"备注",
		field:"remark",
	}];
	buildList({
		router: 'fcom',
		columns: columns,
		pageCode: '618315',
		searchParams:{
			type:"3"
		}
	});
     $('#edit2Btn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
             
             if(selRecords[0].status  !=0){
                toastr.info("该评论不是待审核状态");
                return;
            }
             window.location.href = "fcom_addedit.html?code="+selRecords[0].code;

        });
	

});