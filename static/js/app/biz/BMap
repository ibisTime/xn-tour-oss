$(function() {
    var lineCode = getQueryString('lineCode');
    // var code = getQueryString('code');

    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
        field : 'type',
        title : '推荐类型',
        required: true,
        formatter: Dict.getNameForList("tujian_type"),
        },{
        field : 'comCode',
        title : '推荐内容',
        required: true,
        formatter: function(value, data){
            return data.type == "1" ? data.specialLine.name : data.type == "2" ? data.hotal.name : data.food.name
        }
        // formatter: Dict.getNameForList("router_type2"),
        }
    ];
    buildList({
        // router: 'router',
        searchParams: {
            lineCode: lineCode
        },
        columns: columns,
        pageCode: '618098'
        //deleteCode: ''
    });





     $('#addBtn').off("click").click(function() {

        window.location.href = "router_recom.html?lineCode="+lineCode ;
    });
    //  $("#edit2Btn").off("click").on("click",function(){
    //         var selRecords = $("#tableList").bootstrapTable("getSelections");
    //         if ( selRecords.length <=0){
    //             toastr.info("请选择记录");
    //             return;
    //         }
    //         if ( selRecords[0].status ==1){
    //             toastr.info("请先下架，再修改信息");
    //             return;
    //         }

    //         window.location.href="router_recom.html?lineCode="+lineCode ;

    // });

    $('#delete2Btn').off("click").click(function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if(selRecords.length <= 0){
                toastr.info("请选择记录");
                return;
            }
            //var msg = selRecords[0].status == 1 ? "确认下架该活动？": "确认上架该活动？";
            if(selRecords[0].status== 1){
                toastr.info("已上架，不能删除该记录");
                return;
            }
            confirm("确定删除该记录？").then(function() {
                reqApi({
                    code: '618106',
                    json: {"code": selRecords[0].code}
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        });


    $('#edit2Btn').off("click").hide();
    $('#tabBtn').off("click").hide();
    $('#detail2Btn').off("click").hide();
    $('#frameBtn').off("click").hide();
    $('#downBtn').off("click").hide();
    $('#addeditBtn').off("click").hide();
    $('#recomBtn').off("click").hide();


});