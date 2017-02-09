$(function() {
	
        var columns = [{
            field : '',
            title : '',
            checkbox : true
        },{
            field: 'name',
            title: '民宿名称',
            search :true
        },{
            title: '民宿位置',
            field:"location",
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
                }     
        },{
            field: 'telephone',
            title: '民宿电话',
            mobile:true,
            search :true 
        },
        {
            field: 'price',
            title: '价格',
            amount: true,
            formatter:moneyFormat,
    
        } ];
	buildList({
		router: 'home',
		columns: columns,
		pageCode: '618010',
		deleteCode: '618002',
        searchParams:{
            type:"2",
             
        }
	});
          $('#guanBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            window.location.href = "house1.html?code =" +selRecords[0].code;    
        });
        
         
         $('#frameBtn').click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            var msg = selRecords[0].status == 1 ? "确认上架该民宿？": "确认下架该民宿？";

            confirm(msg).then(function() {
                reqApi({
                    code: '618004',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                   toastr.info("操作成功");
					$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });
       


});