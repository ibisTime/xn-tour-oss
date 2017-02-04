/**
 * 日期格式转化
 * @param date
 * @param format
 * @returns
 */
function dateFormat(date) {
    if (date == '' || typeof(date) == 'undefined') {
        return '-';
    }
    var format = "yyyy-MM-dd";

    date = new Date(date);
    var o = {
        'M+': date.getMonth() + 1, //month
        'd+': date.getDate(), //day
        'H+': date.getHours(), //hour
        'm+': date.getMinutes(), //minute
        's+': date.getSeconds(), //second
        'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
        'S': date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
}

function dateTimeFormat(date) {
    if (date == '' || typeof(date) == 'undefined') {
        return '-';
    }
    var format = "yyyy-MM-dd HH:mm:ss";
    date = new Date(date);
    var o = {
        'M+': date.getMonth() + 1, //month
        'd+': date.getDate(), //day
        'H+': date.getHours(), //hour
        'm+': date.getMinutes(), //minute
        's+': date.getSeconds(), //second
        'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
        'S': date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
}

/**
 * 金额格式转化
 * @param money
 * @param format
 */
/**
 * 废弃
 function moneyFormat(money,format){
	if(isNaN(money)){
		return '';
	}
	if(format == '' || format == null || format == undefined){
		format = 2;
	}
	return parseFloat(money/1000).toFixed(format);
} */

/**
 * 金额格式转化
 * @param money
 * @param format
 */
function moneyFormat(money, format) {
    var flag = true;
    if (isNaN(money)) {
        return '0.00';
    }
    if (money < 0) {
        money = -1 * money;
        flag = false;
    }
    if (format == '' || format == null || format == undefined || typeof format == 'object') {
        format = 2;
    }
    //钱除以1000并保留两位小数
    //money = (money/1000).toFixed(format).toString();
    money = (money / 1000).toString();
    money = money.replace(/(\.\d\d)\d+/ig, "$1");
    money = parseFloat(money).toFixed(format);
    //千分位转化
    var re = /\d{1,3}(?=(\d{3})+$)/g;
    money = money.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
        return s1.replace(re, "$&,") + s2;
    });
    if (!flag) {
        money = "-" + money;
    }
    return money;
}

function moneyParse(money, rate) {
    rate = rate || 1000;
    return ((+('' + money).replace(/,/g, '')) * rate).toFixed(0);
}

/**
 * 编辑金额格式转化
 * @param money
 * @param format
 */
function editMoneyFormat(money, format) {
    if (isNaN(money)) {
        return '';
    }
    if (format == '' || format == null || format == undefined) {
        format = 2;
    }
    return parseFloat(money / 1000).toFixed(format);
}

/**
 * 百分比格式转化
 * @param percent
 * @param format
 */
function percentFormat(percent, format) {
    return percent;
    /*if(isNaN(percent)){
     return '';
     }
     if(format == '' || format == null || format == undefined){
     format = 5;
     }
     return parseFloat(percent).toFixed(format);
     */
}


/**
 * 百分比格式转化
 * @param percent
 * @param format
 * @returns
 */
function percentFormatByLarge(percent, format) {
    if (isNaN(percent)) {
        return '';
    }
    if (format == '' || format == null || format == undefined) {
        format = 3;
    }
    return parseFloat(percent * 10000).toFixed(format);
}

/**
 * 金额放大，乘于1000，格式化
 * @param money
 * @param format
 */
function moneyFormatByEnLarge(money, format) {
    if (isNaN(money)) {
        return '';
    }
    return parseFloat(money * 1000).toFixed(format);
}
/**
 * 利率缩小100倍
 */
function RateFormatByHundredDivided(rate) {
    if (isNaN(rate)) {
        return '';
    }
    return parseFloat(rate / 100.0).toFixed(5);
}
/**
 * 利率放大100倍
 */
function RateFormatByLargeHundred(rate) {
    if (isNaN(rate)) {
        return '';
    }
    return parseFloat(rate * 100.0).toFixed(2);
}

/**
 * 显示遮罩
 */
function maskPop() {
    var maskDiv = '<div class="mask-pop"></div>';
    $('body').append(maskDiv);
    $('.mask-pop').show();
}

/**
 * 隐藏遮罩
 */
function unMaskPop() {
    var maskDiv = '<div class="mask-pop"></div>';
    $('body').append(maskDiv);
    $('.mask-pop').hide();
}

/**
 * 通过正则表达式获取URL传递参数
 * @param name
 * @returns
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

/**
 * 通过正则表达式获取按钮菜单URL传递参数
 * @param url
 * @param name
 * @returns
 */
function getMenuUrl(url, name) {
    if (isBlank(url)) {
        return null;
    }
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = url.substr(url.lastIndexOf("/") + 1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

/**
 * jquery URL传递 暂时没有
 * @param key
 * @returns
 */
function getUrlParam(key) {
    var json = {},
        data;
    $.each(location.search.substr(1).split("&"), function (i, n) {
        data = n.split("=");
        json[data[0]] = data[1];
    });
    return key != undefined ? json[key] : json;
}

/**
 * 按钮权限控制
 */
function showPermissionControl() {
    //获取menuCode
    var url = $("#basePath").val() + "/menu/list";
    var webUrl = window.location.pathname;
    var menuUrl = webUrl.substring($("#basePath").val().length);
    var data = {"url": menuUrl};
    //var data = {"url":menuUrl,"kind":getCurrentKind()};
    //doGetAjaxIsAsync(url, data, false, doGetMenuCode);

    //直接从url获取menuCode，二级页面返回，权限控制不了
    var pUrl = $("#basePath").val() + "/role/menuList";
    if (window.parent.frames[1]) {
        var pData = {
            "parentCode": $('.left-menu .active',
                window.parent.frames[1].document).attr('id'),
            "type": "2",
            roleCode: getRoleId()
        };
        //doGetAjaxIsAsync(pUrl, pData, false, doSuccessBackPermission);
        reqApi({
            code: '805026',
            json: pData,
            sync: true
        }).then(function (data) {
            $('.tools .toolbar').empty();
            for (var i = 0; i < data.length; i++) {
                var menuUrl = data[i].url;
                menuUrl = menuUrl.substr(menuUrl.lastIndexOf("/") + 1);
                //$("#"+menuUrl+"Btn").show();
                $('.tools .toolbar').append('<li style="display:block;" id="' + menuUrl + 'Btn"><span><img src="' +
                    __uri('../images/t01.png') + '"/></span>' + data[i].name + '</li>');
            }
        });
    }
}

//获取菜单编号回执方法
function doGetMenuCode(res) {
    if (res.success == true && !isBlank(res.data)) {
        $("#permissionCode").val(res.data[0].code);
    } else {
        //alert("获取菜单编号失败,权限不受控制!");
    }
}


// 扩展方法
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            var value = this.value || '';
            if ($('#' + this.name).parent('li').attr('type') == 'amount') {
                value = moneyParse(value);
            }
            if ($('#' + this.name).attr('multiple')) {
                var values = [];
                $('#' + this.name).prev().find('.search-choice').each(function (i, item) {
                    values.push($(item).attr('data-value'));
                });
                o[this.name] = values;
            } else {
                o[this.name] = value;
            }
        }
    });
    return o;
};

$.fn.renderDropdown = function (data, keyName, valueName, defaultOption, filter) {
    var value, listCode, params, dict, filter = filter || '';
    if ($.isPlainObject(data)) {
        value = data.value;
        listCode = data.listCode;
        params = data.params || {};
        keyName = data.keyName;
        valueName = data.valueName;
        defaultOption = data.defaultOption;
        dict = data.dict;
    }
    if (listCode) {
        reqApi({
            code: listCode,
            json: params,
            sync: true
        }).then(function (d) {
            data.data = d;
        });
    }
    data = (data.data && data.data.list) || data.data || data || [];
    if (dict) {
        dict.forEach(function (item) {
            var dictData = Dict.getName(item[1]);
            data.forEach(function (i) {
                i[item[0] + 'Name'] = Dict.findName(dictData, i[item[0]]);
            });

        });
    }
    keyName = keyName || 'dkey';
    valueName = valueName || 'dvalue';
    var html = "<option value=''></option>" + (defaultOption || '');
    var filters = filter.split(',');
    for (var i = 0; i < data.length; i++) {
        if (filter && filters.indexOf(data[i][keyName]) > -1) {
            html += "<option value='" + data[i][keyName] + "'>" + (data[i][valueName] || valueName.temp(data[i])) + "</option>";
        } else if (!filter) {
            html += "<option value='" + data[i][keyName] + "'>" + (data[i][valueName] || valueName.temp(data[i])) + "</option>";
        }
    }
    this.html(html);
    if (value) {
        this.val(value);
    }
    return data;
};

$.fn.renderDropdown2 = function (data, defaultOption) {
    var html = "<option value=''></option>" + (defaultOption || '');
    for (var k in data) {
        if (data.hasOwnProperty(k)) {
            html += "<option value='" + k + "'>" + data[k] + "</option>";
        }
    }
    this.html(html);
};

function renderLink(link, name) {
    return '<a href="' + link + '" target="_blank">' + name + '</a>';
}

function renderA(el, link) {
    if (!link) {
        return;
    }
    var values = link.split('/');
    el.attr('href', link);
    el.html(values[values.length - 1]);
}

// array

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

Array.prototype.each = function (fn) {
    fn = fn || Function.K;
    var a = [];
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < this.length; i++) {
        var res = fn.apply(this, [this[i], i].concat(args));
        if (res != null) a.push(res);
    }
    return a;
};

Array.prototype.uniquelize = function () {
    var ra = new Array();
    for (var i = 0; i < this.length; i++) {
        if (!ra.contains(this[i])) {
            ra.push(this[i]);
        }
    }
    return ra;
};

Array.complement = function (a, b) {
    return Array.minus(Array.union(a, b), Array.intersect(a, b));
};

Array.intersect = function (a, b) {
    return a.uniquelize().each(function (o) {
        return b.contains(o) ? o : null
    });
};

Array.minus = function (a, b) {
    return a.uniquelize().each(function (o) {
        return b.contains(o) ? null : o
    });
};

Array.union = function (a, b) {
    return a.concat(b).uniquelize();
};

$(document).on('click', '.toolbar li[id*=Btn]', function (e) {
    var text = $(this).text();
    localStorage.setItem('syj-btn', text);
});

//资源链接

function linkSrc(value) {
    if (!value) {
        return '-';
    }
    var values = value.split('/');
    return '<a target="_blank" href="' + value + '">' + values[values.length - 1] + '</a>';
}

function getUserId() {
    return sessionStorage.getItem('userId');
}

function getRoleId() {
    return sessionStorage.getItem('roleCode');
}

function getUserName() {
    return sessionStorage.getItem('userName');
}

function getSystemId() {
    return sessionStorage.getItem('systemCode');
}

function getRoleLevel() {
    return sessionStorage.getItem('roleLevel');
}


$(function () {
    //下拉框
    setTimeout(function () {
        chosen();
        // 面包屑
        var topTitle = $('.nav .selected h2', window.parent.frames[0].document).text();
        var leftFirstTitle = $('.left-menu .active', window.parent.frames[1].document).parent().prev().find('.title').text();
        var leftSecondTitle = $('.left-menu .active', window.parent.frames[1].document).text();
        var html = '<li>' + topTitle + '</li><li>' + leftFirstTitle + '</li><li>' + leftSecondTitle + '</li>';
        var BtnTitle = localStorage.getItem('syj-btn');
        localStorage.setItem('syj-btn', '');
        if (BtnTitle) {
            html += '<li>' + BtnTitle + '</li>';
        }
        $('.place ul').html(html);
    }, 1);

});
var oriVal = $.fn.val;
$.fn.val = function (value) {
    var res = oriVal.apply($(this), arguments);
    if ($(this).is('select')) {
        $(this).trigger('chosen:updated');
    }
    return res || '';
};

$(document).on('click', 'input[type=reset]', function () {
    var me = this;
    setTimeout(function () {
        $(me).closest('.search-form').find('select').trigger('chosen:updated');
    }, 100);
});

var oriHtml = $.fn.html;
$.fn.html = function (value) {
    var res = oriHtml.apply($(this), arguments);
    if ($(this).is('select')) {
        $(this).trigger('chosen:updated');
    }
    return res;
};

// 压缩图片
function zipImg(file, pos) {
    if (file.type != 'image/jpeg') {
        var reader = new FileReader();
        reader.onload = function (evt) {
            var image = evt.target.result;
            $(pos).attr("src", image);
        }
        reader.readAsDataURL(file);
    } else {
        var mpImg = new MegaPixImage(file);
        mpImg.render(pos, {quality: 0.5});
    }
}


//后退
function goBack() {
    if ('referrer' in document) {
        if (/top\.html/.test(window.document.referrer)) {
            window.history.back();
            return;
        }
        window.location = document.referrer;
    } else {
        window.history.back();
    }
}

String.prototype.temp = function (obj) {
    return this.replace(/\{\{(\w+)\.DATA\}\}/gi, function (matchs) {
        var returns = obj[matchs.replace(/\{\{(\w+)\.DATA\}\}/, '$1')];
        return (returns + "") == "undefined" ? "" : returns;
    });
};

function objectArrayFilter(arr, keys) {
    keys = keys.split(',');
    var newArr = [];
    arr.forEach(function (item) {
        if (keys.indexOf(item.dkey) > -1) {
            newArr.push(item);
        }
    });
    return newArr;
}

function buildList(options) {

    options = options || {};

    if (options.type != 'o2m') {
        showPermissionControl();
    }

    options.router = options.router || /.*\/([^\/]*)\.html/.exec(location.href)[1];

    var html = '<ul>';
    var dropDownList = [];
    var urlParams = options.urlParams;
    var urlParamsStr = '';
    var columns = options.columns;
    if (urlParams) {
        for (var i in urlParams) {
            urlParamsStr += '&' + i + '=' + urlParams[i];
        }
    }
    for (var i = 0, len = columns.length; i < len; i++) {
        var item = columns[i];
        if (item.amount) {
            item.formatter = moneyFormat;
        }
        if (item.search) {
            if (item.key || item.type == 'select') {
                html += '<li><label>' + item.title + '</label><select ' + (item.multiple ? 'multiple' : '') + ' id="' + item.field + '" name="' + item.field + '"></select></li>';
            } else if (item.type == 'date') {

            } else if (item.type == "citySelect") {
                html += '<li class="clearfix" style="width:56%;"><label>' + item.title + '</label><div id="city-group"><select id="province" name="province" class="control-def prov"></select>' +
                    '<select id="city" name="city" class="control-def city"></select>' +
                    '<select id="area" name="area" class="control-def dist"></select></div></li>';
            } else {
                html += '<li><label>' + item.title + '</label><input id="' + item.field + '" name="' + item.field + '" type="text"/></li>';
            }
        }

        if ((item.key || item.type == 'select') && options.type != 'o2m') {
            dropDownList.push(item);
        }


    }
    html += '<li><input id="searchBtn" type="button" class="btn" value="查询" /><input type="reset" class="btn" value="重置" /></li></ul>';
    $('.search-form').append(html);

    for (var i = 0, len = dropDownList.length; i < len; i++) {
        var item = dropDownList[i];
        if (item.data) {
            var data = item.data;
            $('#' + item.field).renderDropdown2(data);
            if (item.pageCode) {
                $('#' + item.field)[0].pageOptions = {
                    pageCode: item.pageCode,
                    keyName: item.keyName,
                    valueName: item.valueName,
                    dict: item.dict,
                    searchName: item.searchName
                };
                $('#' + item.field)[0].pageParams = {
                    start: 1,
                    limit: 10
                };
                $.extend($('#' + item.field)[0].pageParams, item.params || {});
                $('#' + item.field)[0].pageParams.start += 1;
            }

            (function (d) {
                item.formatter = function (v) {
                    return d[v] || d[+v];
                };
            })(data);

        } else if (item.key) {
            $('#' + item.field).renderDropdown(Dict.getName(item.key), '', '', item.defaultOption ? '<option value="0">' + item.defaultOption + '</option>' : '', item.filter || '');
        } else if (item.listCode) {
            var data = $('#' + item.field).renderDropdown($.extend({
                listCode: item.listCode,
                params: item.params,
                keyName: item.keyName,
                valueName: item.valueName
            }, (item.defaultOption ? {defaultOption: '<option value="0">' + item.defaultOption + '</option>'} : {})));
            var dataDict = {};
            if (item.defaultOption) {
                dataDict['0'] = item.defaultOption;
            }
            for (var j = 0, len1 = data.length; j < len1; j++) {
                dataDict[data[j][item.keyName]] = data[j][item.valueName] || item.valueName.temp(data[j]);
                if (item.amount) {
                    dataDict[data[j][item.keyName]] = moneyFormat(dataDict[data[j][item.keyName]]);
                }
            }

            item.formatter = (function (d) {
                return function (v) {
                    return d[v];
                };
            })(dataDict);
        }
        if (item.value) {
            $('#' + item.field).val(item.value);
        }

        if (item.noRender) {
            $('#' + item.field).html('<option value=""></option>');
        }
    }

    $("#city-group").citySelect && $("#city-group").citySelect({
        required: false
    });

    $('#searchBtn').click(function () {
        $('#tableList').bootstrapTable('refresh', {url: $('#tableList').bootstrapTable('getOptions').url});
    });

    if ($('.search-form').find('li').length == 1) {
        $('.search-form').find('li').hide();
    }

    $('#addBtn').click(function () {
        window.location.href = options.router + "_addedit.html?-=-" + urlParamsStr;
    });

    $('#exportBtn').click(function () {
        $('.export .btn').click();
    });

    $('#editBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        } else if (selRecords.length >= 2) {
            toastr.info("请选择一条记录");
            return;
        }
        if (options.beforeEdit) {
            if (!options.beforeEdit(selRecords[0])) {
                return;
            }
        }
        var codeParams = '';
        if (options.uid) {

            options.uid.forEach(function (i) {
                codeParams += '&' + i + '=' + selRecords[0][i];
            });
        }
        window.location.href = options.router + "_addedit.html?code=" + (selRecords[0].code || selRecords[0].id) + urlParamsStr + codeParams;
    });

    $('#deleteBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        } else if (selRecords.length >= 2) {
            toastr.info("请选择一条记录");
            return;
        }

        confirm("确认是否删除该记录？").then(function () {
            var codeParams = {
            		code: selRecords[0].code,
            		id: selRecords[0].id
            	};
            if (options.uid) {
                codeParams = {};
                options.uid.forEach(function (i) {
                    codeParams[i] = selRecords[0][i];
                });
            }
            var data = codeParams;

            reqApi({
                code: options.deleteCode,
                json: data
            }).done(function (data) {
                sucList();
            });
        });

    });

    $('#detailBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        } else if (selRecords.length >= 2) {
            toastr.info("请选择一条记录");
            return;
        }
        if (options.beforeDetail) {
            if (!options.beforeDetail(selRecords[0])) {
                return;
            }
        }
        var codeParams = '';
        if (options.uid) {

            options.uid.forEach(function (i) {
                codeParams += '&' + i + '=' + selRecords[0][i];
            });
        }
        location.href = options.router + "_addedit.html?v=1&code=" + (selRecords[0].code || selRecords[0].id || selRecords[0].userId) + urlParamsStr + codeParams;
    });

    // 导入
    var dw;
    $('#importBtn').click(function () {
        if (options.beforeImport) {
            if (!options.beforeImport()) {
                return;
            }
        }
        dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
            '<div class="alert-warning">xlsx文件导入，读取第一个sheet数据，第一行header定义字段属性（驼峰拼写）</div>' +
            '<div class="form-body">' +
            '<input type="file" id="importFile"/>' +
            '</div></form>'
        });
        dw.showModal();
        //$('#importFile').on('change', handleFile);
        $('#importFile').on('change', getImportDataFun(options, dw));
    });

    $(document).on('click', '.ui-popup-backdrop', function () {
        dw && dw.close().remove();
    });

    $('#checkBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        } else if (selRecords.length >= 2) {
            toastr.info("请选择一条记录");
            return;
        }
        if (options.beforeCheck) {
            if (!options.beforeCheck(selRecords[0])) {
                return;
            }
        }
        var codeParams = '';
        if (options.uid) {

            options.uid.forEach(function (i) {
                codeParams += '&' + i + '=' + selRecords[0][i];
            });
        }
        window.location.href = options.router + "_check.html?code=" + (selRecords[0].code || selRecords[0].id) + urlParamsStr + codeParams;
    });

    var singleSelect = true;
    var detailView = false;
    var detailFormatter = function () {
    };
    var sortName = '';
    var sortOrder = '';
    if ('singleSelect' in options) {
        singleSelect = options['singleSelect'];
    }
    if ('detailFormatter' in options) {
        detailView = true;
        detailFormatter = options['detailFormatter'];
    }

    if ('sortName' in options) {
        sortName = options['sortName'].replace(/[A-Z]/g, function (word) {
            return '_' + word.toLowerCase()
        });
    }
    if ('sortOrder' in options) {
        sortOrder = options['sortOrder'];
    }
    var tableEl = $('#tableList');
    if (options.tableId) {
        tableEl = $('#' + options.tableId);
    }
    tableEl.bootstrapTable({
        method: "post",
        url: urlDispatch(options.pageCode) + "/api",
        striped: true,
        sortName: sortName,
        sortOrder: sortOrder,
        clickToSelect: true,
        singleSelect: singleSelect,
        detailView: detailView,
        detailFormatter: detailFormatter,
        queryParams: function (params) {
            var json = {};
            json.start = params.offset / params.limit + 1;
            json.limit = params.limit;
            var searchFormParams = $('.search-form').serializeObject();
            for (var p in searchFormParams) {
                if (!searchFormParams[p]) {
                    delete searchFormParams[p];
                }
            }
            //车贷权限控制
            if (options.pageCode == "617015") {
                json["userId"] = getUserId();
                json["level"] = getRoleLevel();
            }
            $.extend(json, options.searchParams, searchFormParams, {
                token: sessionStorage.getItem('token'),
                systemCode: sessionStorage.getItem('systemCode')
            });
            params.order && (json.orderDir = params.order);
            params.sort && (json.orderColumn = params.sort.replace(/[A-Z]/g, function (word) {
                return '_' + word.toLowerCase()
            }));
            var res = {code: options.pageCode, json: JSON.stringify(json)};
            return res;
        },
        queryParamsType: 'limit',
        responseHandler: function (res) {
            return {
                rows: res.data.list || res.data,
                total: res.data.totalCount || res.data.length
            };
        },
        pagination: true,
        sidePagination: 'server',
        totalRows: 0,
        pageNumber: 1,
        pageSize: options.pageSize || 10,
        pageList: options.pageList || [10, 20, 30, 40, 50],
        columns: options.columns
    });

    chosen();
}

function selectImage(file, name) {
    setTimeout(function () {
        $(file).valid();
    }, 10);
    if (!file.files || !file.files[0]) {
        name.src = '';
        return;
    }
    zipImg(file.files[0], document.getElementById(name) || name);
}

function buildDetail(options) {
    options = options || {};
    var code = options.code;
    var fields = options.fields;
    var title = $('.left-menu .active a', window.parent.frames[1] ? window.parent.frames[1].document : document).html();
    $('#page-title').html(title);
    var html = '<input type="hidden" id="code" name="code" class="control-def" />';
    var dropDownList = [], rules = {}, textareaList = [];
    var dateTimeList = [], imgList = [];
    for (var i = 0, len = fields.length; i < len; i++) {
        var item = fields[i];
        rules[item.field] = {};
        if (!('readonly' in item) && options.view) {
            item.readonly = true;
        }
        if (item.type == 'img') {
            rules[item.field + 'Img'] = {};
            rules[item.field + 'Img'].required = item.required;
            rules[item.field + 'Img'].isNotFace = false;
        }
        if (item.required) {

            rules[item.field].required = item.required;
        }

        if (item.maxlength) {
            rules[item.field].maxlength = item.maxlength;
        }

        if (item.number) {
            rules[item.field].number = item.number;
        }

        if (item.email) {
            rules[item.field].email = item.email;
        }

        if (item.min) {
            rules[item.field].min = item.min;
        }

        if (item.max) {
            rules[item.field].max = item.max;
        }

        if ('isNotFace' in item) {
            rules[item.field].isNotFace = item.isNotFace;
        }

        if ('mobile' in item) {
            rules[item.field].mobile = item.mobile;
        }

        if (item['Z+']) {
            rules[item.field]['Z+'] = item['Z+'];
        }

        if (item['amount']) {
            rules[item.field]['amount'] = item['amount'];
        }

        if (item['tm']) {
            rules[item.field]['tm'] = item['tm'];
        }

        if (item['idCard']) {
            rules[item.field]['idCard'] = item['idCard'];
        }
        if (item['bankCard']) {
            rules[item.field]['bankCard'] = item['bankCard'];
        }

        if (item.type == 'title') {
            html += '<div ' + (item.field ? 'id="' + item.field + '"' : '') + ' style="' + (item.hidden ? 'display:none;' : '') + '" class="form-title">' + item.title + '</div>';
        } else if (item.type == 'hidden') {
            html = '<input type="hidden" id="' + item.field + '" name="' + item.field + '"/>' + html;
        } else if (item.readonly) {
            if (item.type == "citySelect") {
                html += '<li class="clearfix" style="display:inline-block;"><label>' + item.title + ':</label>' +
                    '<span id="province" name="province" style="display: inline-block;"></span>' +
                    '<span id="city" name="city" style="display: inline-block;padding: 0 8px;"></span>' +
                    '<span id="area" name="area" style="display: inline-block;"></span></li>'
            } else if(item.type == 'o2m' && item.useData){
                html += '<li class="clearfix" type="' + (item.amount ? 'amount' : '') + '" style="' + (item.width ? ('width: ' + item.width + ';display:inline-block;') : '') + (item.hidden ? 'display: none;' : '') + '"><label>' + item.title + '</label><div id="' + item.field + '" name="' + item.field + '"></div></li>';
            } else {
                html += '<li class="clearfix" type="' + (item.amount ? 'amount' : '') + '" style="' + (item.width ? ('width: ' + item.width + ';display:inline-block;') : '') + (item.hidden ? 'display: none;' : '') + '"><label>' + item.title + ':</label><span id="' + item.field + '" name="' + item.field + '"></span></li>';
            }
        } else {
            html += '<li class="clearfix" type="' + (item.amount ? 'amount' : '') + '" style="' + (item.width ? ('width: ' + item.width + ';display:inline-block;') : '') + (item.hidden ? 'display: none;' : '') + '"><label>' + (item.title ? ('<b>' + ((item.required && '*') || '') + '</b>' + item.title + ':') : '&nbsp;') + '</label>';
            if (item.type == 'radio') {
                for (var k = 0, len1 = item.items.length; k < len1; k++) {
                    var rd = item.items[k];
                    html += '<input type="radio" id="radio' + k + '" name="' + item.field + '" value="' + rd.key + '"><label title="' + (rd.value || '') + '" for="radio' + k + '" class="radio-text"><i class="zmdi ' + (rd.icon || '') + ' zmdi-hc-5x"></i></label>';
                }
                html += '</li>';
            } else if (item.type == 'password') {
                html += '<input id="' + item.field + '" type="password" name="' + item.field + '" class="control-def" ' + (item.placeholder ? ('placeholder="' + item.placeholder + '"') : '') + '/></li>'
            } else if (item.type == 'select') {
                dropDownList.push(item);
                html += '<select ' + (item.multiple ? 'multiple' : '') + ' id="' + item.field + '" name="' + item.field + '" class="control-def"></select></li>';
            } else if (item.type == 'img') {
                imgList.push(item);
                html += '<div class="btn-file"><span>选择文件</span>' +
                    '<input type="file" tabindex="1" id="' + item.field + 'Img" name="' + item.field + 'Img" />' +
                    '</div><div id="' + item.field + '" style="margin-left: 195px;"></div></li>';
            } else if (item.type == "file") {
                html += '<div class="btn-file"><span>选择文件</span>' +
                    '<input type="file" tabindex="1" id="' + item.field + '" name="' + item.field + '" />' +
                    '</div><div id="' + item.field + '" style="margin-left: 195px;"></div></li>';
            } else if (item.type == 'textarea' && !item.normalArea) {
                textareaList.push({field: item.field});
                html += '<div style="width:800px;float:left;"><textarea style="height:300px;" id="' + item.field + '" name="' + item.field + '"></textarea></div></li>';
            } else if (item.type == 'textarea' && item.normalArea) {
                html += '<div style="width:400px;float:left;"><textarea style="height:200px;width: 320px;border: 1px solid #e0e0e0;padding: 8px;" id="' + item.field + '" name="' + item.field + '"></textarea></div></li>';
            } else if (item.type == 'citySelect') {
                html += '<div id="city-group"><select id="province" name="province" class="control-def prov"></select>' +
                    '<select id="city" name="city" class="control-def city"></select>' +
                    '<select id="area" name="area" class="control-def dist"></select></div></li>';
                if (item.required) {
                    rules.province = {required: true};
                    // rules.city = {required: true};
                    // rules.area = {required: true};
                }

            } else if (item.type == 'datetime' || item.type == 'date') {
                dateTimeList.push(item);
                html += '<input id="' + item.field + '" name="' + item.field + '" class="lay-input"/></li>';
            } else if (item.type == "o2m") {
                html += '<div id="' + item.field + '" style="display: inline-block;"></div>';
            } else {
                html += '<input id="' + item.field + '" name="' + item.field + '" class="control-def" ' + (item.placeholder ? ('placeholder="' + item.placeholder + '"') : '') + '/></li>';
            }
        }


    }
    var btnHandlers = [];
    if (options.buttons) {
        var btnHtml = '<li>';

        for (var i = 0, len = options.buttons.length; i < len; i++) {
            var item = options.buttons[i];
            var id = 'btn-' + i;
            btnHandlers.push({id: id, handler: item.handler});
            btnHtml += '<input id="' + id + '" type="button" class="btn margin-left-20" value="' + item.title + '"/>';
        }
        btnHtml += '</li>';
        html += btnHtml;
    } else {
        html += '<li><input id="subBtn" type="button" class="btn margin-left-100" value="'+( options.saveText || "保存" )+'"/><input id="backBtn" type="button" class="btn margin-left-20" value="返回"/></li>';
    }

    $('#form-info').append(html);

    if (options.view) {
        $('#subBtn').remove();
    }

    for (var i = 0, len = btnHandlers.length; i < len; i++) {
        $('#' + btnHandlers[i].id).on('click', btnHandlers[i].handler);
    }

    $('#backBtn').click(function () {
        goBack();
    });
    $('#subBtn').click(function () {
        if ($('#jsForm').valid()) {
            var data = $('#jsForm').serializeObject();
            $('#jsForm').find('.btn-file [type=file]').parent().next().each(function (i, el) {
                var values = [];
                var imgs = $(el).find('.img-ctn');
                imgs.each(function (index, img) {
                    values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                });
                data[el.id] = values.join('||');
            });
            // if ($('#jsForm').find('#province')[0]) {
            //     var province = $('#province').val();
            //     var city = $('#city').val();
            //     var area = $('#area').val();
            //     if (!city) {
            //         data['city'] = province;
            //         data['area'] = province;
            //     } else if (!area) {
            //         data['city'] = province;
            //         data['area'] = city;
            //     }
            // }
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
            }
            data['id'] = data['code'];
            if (options.beforeSubmit) {
                if (!options.beforeSubmit(data)) {
                    return;
                }
            }
            reqApi({
                code: code ? options.editCode : options.addCode,
                json: data
            }).done(function (data) {
                sucDetail();
            });
        }
    });
    $("#jsForm").validate({'rules': rules});

    for (var i = 0, len = dropDownList.length; i < len; i++) {
        var item = dropDownList[i];
        var data = {};
        if (item.data) {
            data = $('#' + item.field).renderDropdown2(item.data);
        } else if (item.key) {
            data = $('#' + item.field).renderDropdown(Dict.getName(item.key), '', '', item.defaultOption ? '<option value="0">' + item.defaultOption + '</option>' : '');
        } else if (item.listCode) {
            data = $('#' + item.field).renderDropdown($.extend({
                listCode: item.listCode,
                params: item.params,
                keyName: item.keyName,
                valueName: item.valueName
            }, (item.defaultOption ? {defaultOption: '<option value="0">' + item.defaultOption + '</option>'} : {})));
            if (item.pageCode) {
                $('#' + item.field)[0].pageOptions = {
                    pageCode: item.pageCode,
                    keyName: item.keyName,
                    valueName: item.valueName,
                    dict: item.dict,
                    searchName: item.searchName
                };
                $('#' + item.field)[0].pageParams = {
                    start: 1,
                    limit: 10
                };
                $.extend($('#' + item.field)[0].pageParams, item.params || {});
                $('#' + item.field)[0].pageParams.start += 1;
            }
        } else if (item.pageCode) {
            var pageParams = {
                start: 1,
                limit: 10
            };
            $.extend(pageParams, item.params || {});
            data = $('#' + item.field).renderDropdown($.extend({
                listCode: item.pageCode,
                params: pageParams,
                keyName: item.keyName,
                valueName: item.valueName,
                dict: item.dict
            }, (item.defaultOption ? {defaultOption: '<option value="0">' + item.defaultOption + '</option>'} : {})));
            $('#' + item.field)[0].pageOptions = {
                pageCode: item.pageCode,
                keyName: item.keyName,
                valueName: item.valueName,
                dict: item.dict,
                searchName: item.searchName
            };
            $('#' + item.field)[0].pageParams = pageParams;
            $('#' + item.field)[0].pageParams.start += 1;
        }
        if (item.onChange) {

            (function (i, data) {
                $('#' + i.field).on('change', function (e) {
                    var record = Dict.findObj(data, this.value, i.keyName);
                    i.onChange(this.value, record);
                });
            })(item, data);

        }
    }

    for (var i = 0, len = textareaList.length; i < len; i++) {
        var item = textareaList[i];
        //UE.getEditor(item.field);
        // 生成编辑器
        var editor = new wangEditor(item.field);
        $('#' + item.field)[0].editor = editor;
        editor.config.menus = [
            "source", "|", "bold", "underline", "italic", "strikethrough",
            "eraser", "forecolor", "bgcolor", "|", "quote", "fontfamily",
            "fontsize", "head", "indent", "lineheight", "symbol", "|",
            "alignleft", "aligncenter", "alignright", "|", "link", "unlink", "table",
            "emotion", "|", "img", "video", "location", "insertcode",
            "|", "undo", "redo", "fullscreen"
        ];
        //如果你只需要上传图片功能，而不需要插入网络图片功能
        editor.config.printLog = false;
        editor.config.menuFixed = false;
        editor.config.hideLinkImg = true;
        editor.config.customUpload = true; // 设置自定义上传的开关
        editor.config.customUploadInit = uploadInit; // 配置自定义上传初始化事件，uploadInit方法在上面定义了
        //editor.config.uploadImgUrl = '/upload';
        editor.create();
    }

    for (var i = 0, len = dateTimeList.length; i < len; i++) {
        var item = dateTimeList[i];
        laydate({
            elem: '#' + item.field,
            min: item.minDate ? item.minDate : '',
            istime: item.type == 'datetime',
            format: item.type == 'datetime' ? 'YYYY-MM-DD hh:mm:ss' : 'YYYY-MM-DD'
        });
    }

    $("#city-group").citySelect && $("#city-group").citySelect({
        required: false
    });

    for (var i = 0, len = fields.length; i < len; i++) {
        var item = fields[i];
        if ('defaultValue' in item) {
            $('#' + item.field).val(item.defaultValue);
        }

        if (item.onBlur) {

            (function (i) {
                $('#' + i.field).on('blur', function (e) {
                    i.onBlur(this.value);
                });
            })(item);

        }

    }

    var detailParams = {code: code, id: code};
    if (code && typeof code == 'object') {
        detailParams = code;
        code = true;
        for (var i in detailParams) {
            if (!detailParams[i]) {
                code = false;
            }
        }
    }

    if (!code) {
        for (var i = 0, len = fields.length; i < len; i++) {
            var item = fields[i];
            if ('value' in item && !item.value.call) {
                $('#' + item.field)[item.readonly ? 'html' : 'val'](item.value);
            }

        }
    }
    if (options.beforeDetail) {
        options.beforeDetail(detailParams);
    }

    if (code) {
        reqApi({
            code: options.detailCode,
            json: detailParams
        }).done(function (data) {
            for (var i = 0, len = imgList.length; i < len; i++) {
                (function (i) {
                    setTimeout(function () {
                        var item = imgList[i];
                        uploadInit.call($('#' + item.field));
                    }, 10);
                })(i);
            }
            $('#code').val(data.code || data.id);
            for (var i = 0, len = fields.length; i < len; i++) {
                var item = fields[i];
                var value = item.value;
                var displayValue = data[item.field];
                if (item.onKeyup) {

                    (function (i, d) {
                        $('#' + i.field).on('keyup', function () {
                            i.onKeyup(this.value, d);
                        });
                    })(item, data);

                }
                if (item.field && item.field.indexOf('-') > -1) {
                    var fs = item.field.split('-');
                    displayValue = data[fs[0]] ? data[fs[0]][fs[1]] : '-';
                    if (fs.length == 3) {
                        displayValue = data[fs[0]] && data[fs[0]][fs[1]] && data[fs[0]][fs[1]][fs[2]] || '';
                    }
                }
                if (item.readonly) {
                    if (item.type == 'm2o') {
                        if (displayValue) {
                            var clickDiv = $('#' + item.field).html('<a>' + displayValue + '</a>');
                            (function (a) {
                                clickDiv.on('click', function () {
                                    window.open(a.url + '?v=1&code=' + data[a.codeField], '', 'width=1000,height=800');
                                });
                            })(item);
                        } else {
                            $('#' + item.field).html(item.defaultValue);
                        }

                    } else if (item.type == 'o2m') {
                        if (item.pageCode) {
                            $('#' + item.field).html('<table id="' + item.field + 'List"></table>');
                            var searchParams = {};
                            searchParams[item['key']] = item.o2mvalue || $('#code').val();
                            var options1 = {
                                columns: item.columns,
                                pageCode: item.pageCode,
                                tableId: item.field + 'List',
                                searchParams: searchParams,
                                type: 'o2m'
                            };
                            item.detailFormatter && (options1.detailFormatter = item.detailFormatter);
                            buildList(options1);
                        } else {
                            if(item.useData){
                                displayValue = data || [];
                            }
                            $('#' + item.field).html('<table id="' + item.field + 'List"></table>');
                            $('#' + item.field + 'List').bootstrapTable({
                                striped: true,
                                clickToSelect: true,
                                singleSelect: true,
                                columns: item.columns,
                                data: displayValue
                            });
                        }

                    } else if (item.type == 'select' && item.data) {
                        var realValue = displayValue;
                        if (item.value) {
                            if (item.value.call) {
                                realValue = item.value(data);
                            } else {
                                realValue = item.value;
                            }
                        }
                        $('#' + item.field).html(item.data[realValue] || '-');
                        $('#' + item.field).attr('data-value', realValue);
                        if (item.onChange) {
                            item.onChange(realValue);
                        }
                    } else if (item.type == 'select' && item.key) {
                        var list = [];
                        var realValue = displayValue;
                        if (item.value) {
                            if (item.value.call) {
                                realValue = item.value(data);
                            } else {
                                realValue = item.value;
                            }
                        }
                        if (!item.multiple) {
                            list = Dict.getName(item.key);
                            $('#' + item.field).html(Dict.getName(item.key, realValue || '0'));
                        } else {
                            var dv = '';
                            if (realValue) {
                                realValue.split('').forEach(function (i) {
                                    dv += Dict.getName(item.key, i) + ' | ';
                                });
                                dv = dv.slice(0, dv.length - 3);
                            }

                            $('#' + item.field).html(dv || '-');
                        }

                        $('#' + item.field).attr('data-value', realValue);
                        if (item.onChange) {
                            item.onChange(realValue, Dict.findObj(list, realValue));
                        }
                    } else if (item.type == 'radio') {
                        var selectOne = '';
                        for (var k = 0, len1 = item.items.length; k < len1; k++) {
                            if (item.items[k].key == displayValue) {
                                selectOne = item.items[k];
                                break;
                            }
                        }
                        $('#' + item.field).html('<div class="zmdi ' + selectOne.icon + ' zmdi-hc-5x" title="' + selectOne.value + '"></div>');
                    } else if (item.type == 'select' && (item.pageCode || item.listCode || item.detailCode)) {
                        var params = {};
                        if (!item.detailCode && item.pageCode) {
                            params = {start: 1, limit: 1000000000};
                        }
                        var realValue = data[item['[value]']] || displayValue || '';
                        if (item.value && item.value.call) {
                            realValue = item.value(data);
                        }
                        params[item.detailSearchName || item.keyName] = realValue;
                        item.params && $.extend(params, item.params);
                        if (!realValue) {
                            $('#' + item.field).html('-');
                        } else if (realValue == 0) {
                            $('#' + item.field).html(item.defaultOption);
                        } else {
                            (function (i, displayValue) {
                                reqApi({
                                    code: i.detailCode || i.listCode || i.pageCode,
                                    json: params
                                }).then(function (d) {
                                    var data;
                                    if (displayValue) {
                                        data = (d && d.list) || d[0] && d || [d];
                                        for (var j = 0; j < data.length; j++) {
                                            if (data[j][i.keyName] == displayValue) {
                                                $('#' + i.field).html(data[j][i.valueName] || i.valueName.temp(data[j]) || i.defaultOption);
                                            }
                                        }
                                    } else {
                                        data = (d && d.list && d.list[0]) || d[0] || d;
                                        $('#' + i.field).html(data[i.valueName] || i.valueName.temp(data) || i.defaultOption);
                                    }

                                    $('#' + i.field).attr('data-value', data[i.keyName]);
                                });
                            })(item, displayValue);
                        }


                    } else if (item.type == 'img') {
                        var value1 = item.value1;
                        var realValue = data[item['[value]']] || displayValue || '';
                        if(value1){
                            value1 = value1.split(".");
                            var temp = data[ value1[0] ];
                            for(var k = 1; temp && k < value1.length; k++){
                                if($.isArray(temp)){
                                    temp = temp[0];
                                }
                                temp = temp && temp[ value1[k] ] || "";
                            }
                            realValue = temp || "";
                        }
                        if ($.isArray(realValue)) {
                            var imgHtml = '';
                            realValue.forEach(function (img) {
                                imgHtml += '<img src="' + src + '" style="max-width: 300px;"/>';
                            });
                            $('#' + item.field).html(imgHtml);
                        } else {
                            var sp = realValue && realValue.split('||') || [];
                            var imgsHtml = '';
                            var defaultFile = getDefaultFileIcon();

                            sp.length && sp.forEach(function (item) {
                                var suffix = item.slice(item.lastIndexOf('.') + 1);
                                var src = (item.indexOf('http://') > -1 ? item : (OSS.picBaseUrl + '/' + item));
                                var src1 = (item.indexOf('http://') > -1 ? item.substring(item.lastIndexOf("/") + 1) : item);
                                var name = src1.substring(0, src1.lastIndexOf("_")) + "." + suffix;
                                if (isDocOrAviOrZip(suffix)) {

                                    imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                        '<div class="center-img-wrap">' +
                                        '<img width="100" src="' + getDocOrAviOrZipIcon(suffix) + '" />' +
                                        '<i class="zmdi zmdi-download zmdi-hc-fw"></i></div>' +
                                        '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                        '</div>';
                                } else if (isAcceptImg(suffix)) {
                                    imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                        '<div class="center-img-wrap">' +
                                        '<img src="' + src + OSS.picShow + '" class="center-img" />' +
                                        '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                        '</div>' +
                                        '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                        '</div>';
                                } else {
                                    imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                        '<div class="center-img-wrap">' +
                                        '<img width="100" src="' + defaultFile + '" />' +
                                        '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                        '</div>' +
                                        '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                        '</div>';
                                }
                            });
                            $('#' + item.field).html(imgsHtml);
                            $('#' + item.field).find('.zmdi-download').on('click', function (e) {
                                var dSrc = OSS.picBaseUrl + '/' + $(this).parents("[data-src]").attr('data-src');
                                window.open(dSrc, '_blank');
                            });
                        }

                    } else if (item.type == "citySelect") {
                        // if (data.province == data.city && data.city == data.area) {
                        //     data.city = "";
                        //     data.area = "";
                        // } else if (data.province == data.city && data.city != data.area) {
                        //     data.city = data.area;
                        // }
                        $('#province').html(data.province);
                        data.city && $('#city').html(data.city);
                        data.area && $('#area').html(data.area);
                    } else {
                        if (item.field && item.field.indexOf('-') > -1) {
                            $('#' + item.field).html((item.amount ? moneyFormat(displayValue) : displayValue) || '-');
                        } else if (item.field in data) {
                            $('#' + item.field).html((item.amount ? moneyFormat(data[item.field]) : data[item.field]));
                        } else {
                            $('#' + item.field).html('-');
                        }

                    }
                    if (item.formatter) {
                        $('#' + item.field).html(item.formatter(displayValue, data));
                    }
                    if (item['[value]']) {
                        if (item.type == 'img') {
                            var realValue = data[item['[value]']] || displayValue || '';
                            if (realValue.indexOf('http://') > -1) {
                                $('#' + item.field).attr('src', realValue);
                            }
                        } else {
                            $('#' + item.field).html(item.amount ? moneyFormat(data[item['[value]']]) : data[item['[value]']]);
                        }

                    }
                } else {
                    if (item.type == 'img') {
                        var realValue = data[item['[value]']] || displayValue || '';
                        var sp = realValue && realValue.split('||') || [];
                        var imgsHtml = '';
                        var defaultFile = getDefaultFileIcon();
                        sp.length && sp.forEach(function (item) {
                            var suffix = item.slice(item.lastIndexOf('.') + 1);
                            var src = (item.indexOf('http://') > -1 ? item : (OSS.picBaseUrl + '/' + item));
                            var src1 = (item.indexOf('http://') > -1 ? item.substring(item.lastIndexOf("/") + 1) : item);
                            var name = src1.substring(0, src1.lastIndexOf("_")) + "." + suffix;
                            if (isDocOrAviOrZip(suffix)) {
                                imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                    '<div class="center-img-wrap">' +
                                    '<img width="100" src="' + getDocOrAviOrZipIcon(suffix) + '" />' +
                                    '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                    '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                    '</div>' +
                                    '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                    '</div>';
                            } else if (isAcceptImg(suffix)) {
                                imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                    '<div class="center-img-wrap">' +
                                    '<img src="' + src + OSS.picShow + '" class="center-img" />' +
                                    '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                    '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                    '</div>' +
                                    '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                    '</div>';
                            } else {
                                imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                    '<div class="center-img-wrap">' +
                                    '<img width="100" src="' + defaultFile + '" />' +
                                    '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                    '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                    '</div>' +
                                    '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                    '</div>';
                            }
                        });
                        $('#' + item.field).html(imgsHtml);
                        $('#' + item.field).find('.zmdi-close-circle-o').on('click', function (e) {
                            $(this).parents("[data-src]").remove();
                        });
                        $('#' + item.field).find('.zmdi-download').on('click', function (e) {
                            var dSrc = OSS.picBaseUrl + '/' + $(this).parents("[data-src]").attr('data-src');
                            window.open(dSrc, '_blank');
                        });
                    } else if (item.type == 'radio') {
                        $('input[name=' + item.field + '][value=' + displayValue + ']').prop('checked', true);
                    } else if (item.type == 'textarea' && !item.normalArea) {
                        $('#' + item.field)[0].editor.$txt.html(data[item.field]);
                    } else if (item.type == 'textarea' && item.normalArea) {
                        $('#' + item.field).val(data[item.field]);
                    } else if (item.type == 'citySelect') {
                        // if (data.province == data.city && data.city == data.area) {
                        //     data.city = "";
                        //     data.area = "";
                        // } else if (data.province == data.city && data.city != data.area) {
                        //     data.city = data.area;
                        // }
                        $('#province').val(data.province);
                        $('#province').trigger('change');
                        data.city && $('#city').val(data.city);
                        data.area && $('#area').val(data.area);
                        if (item.onChange) {
                            (function (i) {
                                $("#province").on("change", function (e) {
                                    i.onChange($("#province").val(), $("#city").val(), $("#area").val());
                                });
                                $("#city").on("change", function (e) {
                                    i.onChange($("#province").val(), $("#city").val(), $("#area").val());
                                });
                                $("#area").on("change", function (e) {
                                    i.onChange($("#province").val(), $("#city").val(), $("#area").val());
                                });
                            })(item);
                        }
                        data.city ? $('#city').trigger('change') : $('#province').trigger('change');
                        data.area && $('#area').val(data.area);
                    } else if (item.type == "o2m" && item.editTable) {
                        var innerHtml = '';
                        if (item.addeditTable) {
                            innerHtml += '<li id="addBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>新增</li>' +
                                '<li id="editBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>修改</li>' +
                                '<li id="removeBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>删除</li>';
                        } else {
                            innerHtml = '<li id="editBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>修改</li>';
                        }
                        $('#' + item.field).html(
                            '<div class="tools">' +
                            '<ul class="toolbar">' + innerHtml +
                            '</ul>' +
                            '</div><table id="' + item.field + 'List"  data-editable-emptytext="无"></table>');
                        (function (item, options) {
                            addEditTableListener1("#addBtn-o2m", "#removeBtn-o2m", "#editBtn-o2m", '#' + item.field + 'List', item.columns, options);
                        })(item, options);

                        $('#' + item.field + 'List').bootstrapTable({
                            striped: true,
                            clickToSelect: true,
                            singleSelect: true,
                            columns: item.columns,
                            data: displayValue || []
                        });
                    } else if (item.type == 'datetime' || item.type == 'date') {
                        $('#' + item.field)
                            .val( (item.type == 'datetime' ?
                                    dateTimeFormat : dateFormat)(data[item.field]) );
                    } else {
                        $('#' + item.field).val(item.amount ? moneyFormat(displayValue) : displayValue);
                    }
                }

                if ('value' in item) {
                    if (item.value && item.value.call) {
                        $('#' + item.field).val(item.value(data));
                    } else {
                        $('#' + item.field).val(item.amount ? moneyFormat(item.value) : item.value);
                    }

                }

                if (item['[value]']) {
                    if (item.type == 'img') {
                        var realValue = data[item['[value]']] || displayValue || '';
                        if (realValue.indexOf('http://') > -1) {
                            $('#' + item.field).attr('src', realValue);
                        }
                    } else {
                        $('#' + item.field).val(item.amount ? moneyFormat(data[item['[value]']]) : data[item['[value]']]);
                    }

                }

                if (item.type == 'select') {
                    $('#' + item.field).trigger('change');
                }

                if (item.link) {
                    $('#' + item.field).html('<a target="_blank" href="' + displayValue + '">' + displayValue + '</a>');
                }

                if (item.afterSet) {
                    item.afterSet(displayValue, data);
                }
            }
            options.afterData && options.afterData(data);
        });
    } else {
        for (var i = 0, len = fields.length; i < len; i++) {
            var item = fields[i];
            var value = item.value;
            if (item.onKeyup) {

                (function (i) {
                    $('#' + i.field).on('keyup', function () {
                        i.onKeyup(this.value);
                    });
                })(item);

            }
            if (item.type == "o2m" && item.editTable) {
                var innerHtml = '';
                if (item.addeditTable) {
                    innerHtml += '<li id="addBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>新增</li>' +
                        '<li id="editBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>修改</li>' +
                        '<li id="removeBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>删除</li>';
                } else {
                    innerHtml = '<li id="editBtn-o2m" style="display: inline-block;float: none;"><span><img src="/static/images/t01.png"></span>修改</li>';
                }
                $('#' + item.field).html(
                    '<div class="tools">' +
                    '<ul class="toolbar">' + innerHtml +
                    '</ul>' +
                    '</div><table id="' + item.field + 'List"  data-editable-emptytext="无"></table>');
                (function (item, options) {
                    addEditTableListener1("#addBtn-o2m", "#removeBtn-o2m", "#editBtn-o2m", '#' + item.field + 'List', item.columns, options);
                })(item, options);

                $('#' + item.field + 'List').bootstrapTable({
                    striped: true,
                    clickToSelect: true,
                    singleSelect: true,
                    columns: item.columns,
                    data: []
                });
            } else if (item.type == 'citySelect') {
                if (item.onChange) {
                    (function (i) {
                        $("#province").on("change", function (e) {
                            i.onChange($("#province").val(), $("#city").val(), $("#area").val());
                        });
                        $("#city").on("change", function (e) {
                            i.onChange($("#province").val(), $("#city").val(), $("#area").val());
                        });
                        $("#area").on("change", function (e) {
                            i.onChange($("#province").val(), $("#city").val(), $("#area").val());
                        });
                    })(item);
                }
            }
        }
        for (var i = 0, len = imgList.length; i < len; i++) {
            (function (i) {
                setTimeout(function () {
                    var item = imgList[i];
                    uploadInit.call($('#' + item.field));
                }, 10);
            })(i);
        }
    }

    if (!window.parent.frames[1]) {
        $('.place').hide();
        $('.form-title').hide();
        $('.btn').hide();
    }
    chosen();
}

$(document).ajaxStart(function () {
    $.blockUI({
        overlayCSS: {backgroundColor: '#fff', opacity: 0.5},
        message: null
    });
}).ajaxStop($.unblockUI);

function chosen() {
    $('select').chosen && $('select').not('.norender').chosen({search_contains: true, allow_single_deselect: true});
    $('select').chosen && $('select').not('.norender').chosen().change(function () {
        var that = this;
        setTimeout(function () {
            $(that).parent().height($(that).prev().height());
        }, 1);

    });
}

function text3dot(text, count) {
    if (text.length <= count) {
        return text;
    } else {
        return text.slice(0, 10) + '...';
    }

}

$.fn.highlight = function (type) {
    var that = this;
    that.parent().removeClass('swing');
    setTimeout(function () {
        that.parent().addClass('swing');
    }, 1);
};

function uploadInit() {
    // this 即 editor 对象
    var editor = this;
    // 触发选择文件的按钮的id
    var btnId = editor.customUploadBtnId || editor.prev().find('input').attr('id');
    // 触发选择文件的按钮的父容器的id
    var containerId = editor.customUploadContainerId || editor.prev().next().attr('id');

    var dropId = editor.id || (editor.attr && editor.attr('id')) || 'jsForm';

    // var token;

    // reqApi({
    //     code: '807900',
    //     json: {},
    //     cache: true,
    //     sync: true
    // }).done(function(data) {
    //     token = data.uploadToken;
    // });

    var swfUrl = __uri("../../lib/Moxie.swf");
    // 创建上传对象
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4', //上传模式,依次退化
        browse_button: btnId, //上传选择的点选按钮，**必需**
        uptoken_url: '807900',
        //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
        // uptoken: token,
        //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
        unique_names: false,
        // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
        save_key: false,
        // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
        //domain: 'http://oi99f4peg.bkt.clouddn.com/',
        domain: OSS.picBaseUrl + "/",
        //bucket 域名，下载资源时用到，**必需**
        container: containerId, //上传区域DOM ID，默认是browser_button的父元素，
        max_file_size: '100mb', //最大文件体积限制
        // flash_swf_url: 'js/plupload/Moxie.swf', //引入flash,相对路径
        flash_swf_url: swfUrl,
        // filters: {
        //     mime_types: [
        //         //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
        //         {
        //             title: "图片文件",
        //             extensions: "jpg,gif,png,bmp"
        //         }, {
        //             title: '文件',
        //             extensions: "docx,doc,xls,xlsx,pdf,avi,mp4,zip,rar"
        //         }
        //     ]
        // },
        max_retries: 3, //上传失败最大重试次数
        dragdrop: true, //开启可拖曳上传
        drop_element: dropId, //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        chunk_size: '4mb', //分块上传时，每片的体积
        auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        init: {
            'FilesAdded': function (up, files) {
                if (editor.append) {
                    var defaultImg = getDefaultImgIcon();
                    var defaultFile = getDefaultFileIcon();
                    plupload.each(files, function (file) {
                        // 文件添加进队列后,处理相关的事情
                        var sourceLink = file.name;
                        var suffix = sourceLink.slice(sourceLink.lastIndexOf('.') + 1);
                        var imgCtn;
                        if (isDocOrAviOrZip(suffix)) {
                            imgCtn = $(
                                '<div id="' + file.id + '" class="img-ctn" style="display: inline-block;position: relative;vertical-align: top;">' +
                                '<div class="center-img-wrap">' +
                                '<img width="100" src="' + getDocOrAviOrZipIcon(suffix) + '"/>' +
                                '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                '</div>' +
                                '<div class="t_3dot w100p" title="' + file.name + '">' + file.name + '</div>' +
                                '<div class="progress-wrap">' +
                                '<div class="progress-infos">等待...</div>' +
                                '<div class="progress progress-striped" style="display: none;">' +
                                '<div class="progress-bar progress-bar-info" style="height: 20px;"></div>' +
                                '</div>' +
                                '</div>' +
                                '</div>').appendTo(editor);
                        } else if (isAcceptImg(suffix)) {
                            imgCtn = $('<div id="' + file.id + '" class="img-ctn" style="display: inline-block;position: relative;vertical-align: top;">' +
                                '<div class="center-img-wrap">' +
                                '<img src="' + defaultImg + '" class="center-img"/>' +
                                '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                '</div>' +
                                '<div class="t_3dot w100p" title="' + file.name + '">' + file.name + '</div>' +
                                '<div class="progress-wrap"><div class="progress-infos">等待...</div>' +
                                '<div class="progress progress-striped" style="display: none;">' +
                                '<div class="progress-bar progress-bar-info" style="height: 20px;"></div>' +
                                '</div>' +
                                '</div>' +
                                '</div>').appendTo(editor);
                        } else {
                            imgCtn = $('<div id="' + file.id + '" class="img-ctn" style="display: inline-block;position: relative;vertical-align: top;">' +
                                '<div class="center-img-wrap">' +
                                '<img width="100" src="' + defaultFile + '" class="center-img"/>' +
                                '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                '</div>' +
                                '<div class="t_3dot w100p" title="' + file.name + '">' + file.name + '</div>' +
                                '<div class="progress-wrap"><div class="progress-infos">等待...</div>' +
                                '<div class="progress progress-striped" style="display: none;">' +
                                '<div class="progress-bar progress-bar-info" style="height: 20px;"></div>' +
                                '</div>' +
                                '</div>' +
                                '</div>').appendTo(editor);
                        }
                        imgCtn.find('.zmdi-close-circle-o').on('click', function (e) {
                            up.removeFile(file);
                            imgCtn.remove();
                        });
                    });
                }
            },
            'BeforeUpload': function (up, file) {
                // 每个文件上传前,处理相关的事情
                //printLog('on BeforeUpload');
                if (editor.append) {
                    editor.find("#" + file.id).find(".progress-striped").show();
                }
            },
            'UploadProgress': function (up, file) {
                //
                // 显示进度条
                if (editor.showUploadProgress) {
                    editor.showUploadProgress(file.percent);
                } else if (editor.append) {
                    var uploaded = file.loaded;
                    var size = plupload.formatSize(uploaded).toUpperCase();
                    var formatSpeed = plupload.formatSize(file.speed).toUpperCase();
                    editor.find("#" + file.id)
                        .find(".progress-infos").text("已上传: " + size + " 上传速度： " + formatSpeed + "/s")
                        .parent().find(".progress-bar").css("width", parseInt(file.percent, 10) + "%");
                }
            },

            'FileUploaded': function (up, file, info) {
                // 每个文件上传成功后,处理相关的事情
                // 其中 info 是文件上传成功后，服务端返回的json，形式如
                // {
                //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                //    "key": "gogopher.jpg"
                //  }
                //printLog(info);
                // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                var domain = up.getOption('domain');
                var res = $.parseJSON(info);
                var sourceLink = domain + res.key; //获取上传成功后的文件的Url
                var sourceLink1 = res.key; //获取上传成功后的文件的Url

                //printLog(sourceLink);

                // 插入图片到editor
                editor.command && editor.command(null, 'insertHtml', '<img src="' + sourceLink + '" style="max-width:100%;"/>');
                if (editor.append) {
                    var imgCtn = editor.find("#" + file.id);
                    imgCtn.find(".progress-wrap").hide();
                    var suffix = sourceLink.slice(sourceLink.lastIndexOf('.') + 1);

                    if (isDocOrAviOrZip(suffix)) {
                        imgCtn.attr("data-src", sourceLink1);
                    } else if (isAcceptImg(suffix)) {
                        imgCtn.find("img").attr("src", sourceLink + OSS.picShow);
                        imgCtn.attr("data-src", sourceLink1);
                    } else {
                        imgCtn.attr("data-src", sourceLink1);
                    }
                    (function (imgCtn, sourceLink) {
                        imgCtn.find('.zmdi-download').on('click', function (e) {
                            window.open(sourceLink, '_blank');
                        });  //zmdi-name
                    })(imgCtn, sourceLink);
                }
            },
            'Error': function (up, err, errTip) {
                //上传出错时,处理相关的事情
                //printLog('on Error');
            },
            'UploadComplete': function () {
                //队列文件处理完毕后,处理相关的事情
                //printLog('on UploadComplete');

                // 隐藏进度条
                editor.hideUploadProgress && editor.hideUploadProgress();
            },
            // Key 函数如果有需要自行配置，无特殊需要请注释
            //,
            'Key': function (up, file) {
                // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                // 该配置必须要在 unique_names: false , save_key: false 时才生效
//                 var key = "";
                // do something with key here
                var sourceLink = file.name;
                var suffix = sourceLink.slice(0, sourceLink.lastIndexOf('.'));
                var suffix1 = sourceLink.slice(sourceLink.lastIndexOf('.') + 1);
                suffix = suffix + "_" + (new Date().getTime());
                return suffix + "." + suffix1;
            }
        }
    });
    // domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
    // uploader 为一个plupload对象，继承了所有plupload的方法，参考http://plupload.com/docs
}

function sleep(ms) {
    return (new Promise(function (resolve, reject) {
        setTimeout(function () {
            $.blockUI({
                overlayCSS: {backgroundColor: '#fff', opacity: 0.5},
                message: null
            });
        }, 1);

        setTimeout(function () {
            $.unblockUI();
            resolve();
        }, ms);
    }));
}

function sucList() {
    toastr.success('操作成功');
    $('#tableList').bootstrapTable('refresh', {url: $('#tableList').bootstrapTable('getOptions').url});
}

function sucDetail() {
    toastr.success('操作成功');
    sleep(1000).then(function () {
        goBack();
    });
}

function confirm(msg) {
    return (new Promise(function (resolve, reject) {
        var d = dialog({
            content: msg,
            ok: function () {
                var that = this;
                setTimeout(function () {
                    that.close().remove();
                }, 1000);
                resolve();
                return true;
            },
            cancel: function () {
                reject();
                return true;
            },
            cancelValue: '取消',
            okValue: '确定'
        });
        d.showModal();
    }));

}

function addEditTableListener1(addId, removeId, editId, tableId, columns, options) {
    //var isAdd = true;
    var idx = 0;
    $("#model-save").on("click", function () {
        if ($("#model-form").valid()) {
            var data = $("#model-form").serializeObject();
            $("#model-form").find('.btn-file [type=file]').parent().next().each(function (i, el) {
                var values = [];
                var imgs = $(el).find('.img-ctn');
                imgs.each(function (index, img) {
                    values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                });
                var id = el.id.substring(0, el.id.length - 6);
                data[id] = values.join('||');
            });
            // if ($("#model-form").find('#province-model')[0]) {
            //     var province = $('#province-model').val();
            //     var city = $('#city-model').val();
            //     var area = $('#area-model').val();
            //     if (!city) {
            //         data['city'] = province;
            //         data['area'] = province;
            //     } else if (!area) {
            //         data['city'] = province;
            //         data['area'] = city;
            //     }
            // }
            for (var i = 0, len = columns.length; i < len; i++) {
                var item = columns[i];
                if (item.hidden1) {
                    //data[item.field] = item.defaultValue;
                } else if (item.equal && (!$('#' + item.field + "-model").is(':hidden') || !$('#' + item.field + 'Img-model').is(':hidden'))) {
                    data[item.equal] = $('#' + item.field + "-model").val() || $('#' + item.field + "-model").attr('src');
                } else if (item.emptyValue && !data[item.field]) {
                    data[item.field] = item.emptyValue;
                }
            }
            var code = $("#code", $("#model-form")).val();
            var tableData = $(tableId).bootstrapTable('getData');
            if (code) {
                for (var l = 0; l < tableData.length; l++) {
                    if (tableData[l].code == code) {
                        break;
                    }
                }
                $(tableId).bootstrapTable('updateRow', {
                    index: l,
                    row: data
                });
            } else {
                data["code"] = "emptyCode" + (idx++);
                var index = tableData.length;
                $(tableId).bootstrapTable('insertRow', {
                    index: index,
                    row: data
                });
            }
            $('#model-form').modal('hide');
        }
    });
    editId && $(editId).on("click", function () {
        var selRecords = $(tableId).bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        buildDetail1({
            fields: columns,
            // code1: options.code,
            detailCode: options.detailCode,
            code: selRecords[0].code,
            record: selRecords[0]
        });
    });
    addId && $(addId).on("click", function () {
        buildDetail1({
            fields: columns
        });
    });
    removeId && $(removeId).on("click", function () {
        var selRecords = $(tableId).bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords.length = 1) {
            confirm("确认删除该信息？").then(function () {
                $(tableId).bootstrapTable('remove', {
                    field: 'code',
                    values: [selRecords[0].code]
                });
            });
        }

    });
}

function buildDetail1(options) {
    $("#model-body").empty();
    var code = options.code1;
    var fields = options.fields;
    var html = '<input type="hidden" id="code" name="code" class="control-def" />';
    var dropDownList = [],
        rules = {},
        textareaList = [];
    var dateTimeList = [],
        imgList = [];
    for (var i = 0, len = fields.length; i < len; i++) {
        var item = fields[i];
        rules[item.field] = {};
        if (item.checkbox) {
            continue;
        }
        if (!('readonly' in item) && options.view) {
            item.readonly = true;
        }
        if (item.type == 'img') {
            rules[item.field + 'Img'] = {};
            rules[item.field + 'Img'].required = item.required;
            rules[item.field + 'Img'].isNotFace = false;
        }
        if (item.required) {

            rules[item.field].required = item.required;
        }

        if (item.maxlength) {
            rules[item.field].maxlength = item.maxlength;
        }

        if (item.number) {
            rules[item.field].number = item.number;
        }

        if (item.email) {
            rules[item.field].email = item.email;
        }

        if (item.min) {
            rules[item.field].min = item.min;
        }

        if (item.max) {
            rules[item.field].max = item.max;
        }

        if ('isNotFace' in item) {
            rules[item.field].isNotFace = item.isNotFace;
        }

        if ('mobile' in item) {
            rules[item.field].mobile = item.mobile;
        }

        if (item['Z+']) {
            rules[item.field]['Z+'] = item['Z+'];
        }

        if (item['amount']) {
            rules[item.field]['amount'] = item['amount'];
        }

        if (item['tm']) {
            rules[item.field]['tm'] = item['tm'];
        }

        if (item['idCard']) {
            rules[item.field]['idCard'] = item['idCard'];
        }
        if (item['bankCard']) {
            rules[item.field]['bankCard'] = item['bankCard'];
        }

        if (item.type == 'title') {
            html += '<div ' + (item.field ? 'id="' + item.field + '-model"' : '') + ' style="' + (item.hidden ? 'display:none;' : '') + '" class="form-title">' + item.title + '</div>';
        } else if (item.type == 'hidden') {
            html = '<input type="hidden" id="' + item.field + '-model" name="' + item.field + '"/>' + html;
        } else if (item.readonly) {
            if (item.hidden1) {
                html = '<input type="hidden" id="' + item.field + '-model" name="' + item.field + '"/>' + html;
            } else {
                html += '<li class="clearfix" type="' + (item.amount ? 'amount' : '') + '" style="' + (item.width ? ('width: ' + item.width + ';display:inline-block;') : '') + (item.hidden ? 'display: none;' : '') + '"><label>' + item.title + ':</label><span id="' + item.field + '-model" name="' + item.field + '"></span></li>';
            }
        } else {
            html += '<li class="clearfix" type="' + (item.amount ? 'amount' : '') + '" style="' + (item.width ? ('width: ' + item.width + ';display:inline-block;') : '') + (item.hidden ? 'display: none;' : '') + '"><label>' + (item.title ? ('<b>' + ((item.required && '*') || '') + '</b>' + item.title + ':') : '&nbsp;') + '</label>';
            if (item.type == 'radio') {
                for (var k = 0, len1 = item.items.length; k < len1; k++) {
                    var rd = item.items[k];
                    html += '<input type="radio" id="radio' + k + '" name="' + item.field + '" value="' + rd.key + '"><label title="' + (rd.value || '') + '" for="radio' + k + '" class="radio-text"><i class="zmdi ' + (rd.icon || '') + ' zmdi-hc-5x"></i></label>';
                }
                html += '</li>';
            } else if (item.type == 'password') {
                html += '<input id="' + item.field + '" type="password" name="' + item.field + '" class="control-def" ' + (item.placeholder ? ('placeholder="' + item.placeholder + '"') : '') + '/></li>'
            } else if (item.type == 'select') {
                dropDownList.push(item);
                html += '<select ' + (item.multiple ? 'multiple' : '') + ' id="' + item.field + '-model" name="' + item.field + '" class="control-def"></select></li>';
            } else if (item.type == 'img') {
                imgList.push(item);
                html += '<div class="btn-file"><span>选择文件</span>' +
                    '<input type="file" tabindex="1" id="' + item.field + 'Img-model" name="' + item.field + 'Img" />' +
                    '</div><div id="' + item.field + '-model" style="margin-left: 195px;"></div></li>';
            } else if (item.type == 'textarea' && !item.normalArea) {
                textareaList.push({field: item.field});
                html += '<div style="width:800px;float:left;"><textarea style="height:300px;" id="' + item.field + '-model" name="' + item.field + '"></textarea></div></li>';
            } else if (item.type == 'textarea' && item.normalArea) {
                html += '<div style="width:400px;float:left;"><textarea style="height:200px;width: 320px;border: 1px solid #e0e0e0;" id="' + item.field + '-model" name="' + item.field + '"></textarea></div></li>';
            } else if (item.type == 'citySelect') {
                html += '<div id="city-group-model"><select id="province-model" name="province" class="control-def prov"></select>' +
                    '<select id="city-model" name="city" class="control-def city"></select>' +
                    '<select id="area-model" name="area" class="control-def dist"></select></div></li>';
                if (item.required) {
                    rules["province"] = {required: true};
                    rules["city"] = {required: true};
                    rules["area"] = {required: true};
                }
            } else if (item.type == 'datetime' || item.type == 'date') {
                dateTimeList.push(item);
                html += '<input id="' + item.field + '-model" name="' + item.field + '" class="lay-input"/></li>';
            } else if (item.type == "o2m") {
                html += '<div id="' + item.field + '-model" name="' + item.field + '" style="display: inline-block;"></div>';
            } else {
                html += '<input id="' + item.field + '-model" name="' + item.field + '" class="control-def" ' + (item.placeholder ? ('placeholder="' + item.placeholder + '"') : '') + '/></li>';
            }
        }
    }
    $('#model-body').append(html);
    $("#model-form").validate({'rules': rules});
    $('#code', $("#model-form")).val(options.code || "");
    for (var i = 0, len = dropDownList.length; i < len; i++) {
        var item = dropDownList[i];
        var data = {};
        if (item.data1) {
            data = $('#' + item.field + "-model").renderDropdown2(item.data1);
        } else if (item.key) {
            data = $('#' + item.field + "-model").renderDropdown(Dict.getName(item.key), '', '', item.defaultOption ? '<option value="0">' + item.defaultOption + '</option>' : '');
        } else if (item.listCode) {
            if(item.insureTypeList){
                var val = $("#" + item.insureTypeList).val();
                item.params[item.insureTypeList] = val;
            }
            data = $('#' + item.field + "-model").renderDropdown($.extend({
                listCode: item.listCode,
                params: item.params,
                keyName: item.keyName,
                valueName: item.valueName
            }, (item.defaultOption ? {defaultOption: '<option value="0">' + item.defaultOption + '</option>'} : {})));
            if (item.pageCode) {
                $('#' + item.field + "-model")[0].pageOptions = {
                    pageCode: item.pageCode,
                    keyName: item.keyName,
                    valueName: item.valueName,
                    dict: item.dict,
                    searchName: item.searchName
                };
                $('#' + item.field + "-model")[0].pageParams = {
                    start: 1,
                    limit: 10
                };
                $.extend($('#' + item.field + "-model")[0].pageParams, item.params || {});
                $('#' + item.field + "-model")[0].pageParams.start += 1;
            }
        } else if (item.pageCode) {
            var pageParams = {
                start: 1,
                limit: 10
            };
            $.extend(pageParams, item.params || {});
            data = $('#' + item.field + "-model").renderDropdown($.extend({
                listCode: item.pageCode,
                params: pageParams,
                keyName: item.keyName,
                valueName: item.valueName,
                dict: item.dict
            }, (item.defaultOption ? {defaultOption: '<option value="0">' + item.defaultOption + '</option>'} : {})));
            $('#' + item.field + "-model")[0].pageOptions = {
                pageCode: item.pageCode,
                keyName: item.keyName,
                valueName: item.valueName,
                dict: item.dict,
                searchName: item.searchName
            };
            $('#' + item.field + "-model")[0].pageParams = pageParams;
            $('#' + item.field + "-model")[0].pageParams.start += 1;
        }
        if (item.onChange) {

            (function (i, data) {
                $('#' + i.field + "-model").on('change', function (e) {
                    var record = Dict.findObj(data, this.value, i.keyName);
                    i.onChange(this.value, record);
                });
            })(item, data);

        }
    }
    for (var i = 0, len = textareaList.length; i < len; i++) {
        var item = textareaList[i];
        //UE.getEditor(item.field);
        // 生成编辑器
        var editor = new wangEditor(item.field + "-model");
        $('#' + item.field + "-model")[0].editor = editor;
        editor.config.menus = [
            "source", "|", "bold", "underline", "italic", "strikethrough",
            "eraser", "forecolor", "bgcolor", "|", "quote", "fontfamily",
            "fontsize", "head", "indent", "lineheight", "symbol", "|",
            "alignleft", "aligncenter", "alignright", "|", "link", "unlink", "table",
            "emotion", "|", "img", "video", "location", "insertcode",
            "|", "undo", "redo", "fullscreen"
        ];
        //如果你只需要上传图片功能，而不需要插入网络图片功能
        editor.config.printLog = false;
        editor.config.hideLinkImg = true;
        editor.config.customUpload = true; // 设置自定义上传的开关
        editor.config.customUploadInit = uploadInit; // 配置自定义上传初始化事件，uploadInit方法在上面定义了
        //editor.config.uploadImgUrl = '/upload';
        editor.create();
    }

    for (var i = 0, len = dateTimeList.length; i < len; i++) {
        var item = dateTimeList[i];
        laydate({
            elem: '#' + item.field + "-model",
            min: item.minDate ? item.minDate : '',
            istime: item.type == 'datetime',
            format: item.type == 'datetime' ? 'YYYY-MM-DD hh:mm:ss' : 'YYYY-MM-DD'
        });
    }

    $("#city-group-model").citySelect && $("#city-group-model").citySelect({
        required: false
    });

    for (var i = 0, len = fields.length; i < len; i++) {
        var item = fields[i];
        if ('defaultValue' in item) {
            if (item.hidden1 && options.record) {
                $('#' + item.field + "-model").val(options.record[item.field]);
            } else {
                $('#' + item.field + "-model").val(item.defaultValue);
            }
        }

        if (item.onBlur) {

            (function (i) {
                $('#' + i.field + "-model").on('blur', function (e) {
                    i.onBlur(this.value);
                });
            })(item);

        }

        if (item.onKeyup) {

            (function (i) {
                $('#' + i.field + "-model").on('keyup', function (e) {
                    i.onKeyup(this.value);
                });
            })(item);

        }

    }
    var detailParams = {code: code, id: code};
    if (code && typeof code == 'object') {
        detailParams = code;
        code = true;
        for (var i in detailParams) {
            if (!detailParams[i]) {
                code = false;
            }
        }
    }
    for (var i = 0, len = imgList.length; i < len; i++) {
        (function (i) {
            setTimeout(function () {
                var item = imgList[i];
                uploadInit.call($('#' + item.field + "-model"));
            }, 40);
        })(i);

    }
    if (!code) {
        if (options.record) {
            addData(options.record);
        } else {
            for (var i = 0, len = fields.length; i < len; i++) {
                var item = fields[i];
                if (item.checkbox) {
                    continue;
                }
                if ('value' in item && !item.value.call) {
                    $('#' + item.field + "-model")[item.readonly ? 'html' : 'val'](item.value);
                }
            }
        }
    }
    if (options.beforeDetail) {
        options.beforeDetail(detailParams);
    }
    if (code) {
        // reqApi({
        //     code: options.detailCode,
        //     json: detailParams
        // }).done(function (data) {
        //     data = data.creditAuditList;
        //     for (var k = 0; k < data.length; k++) {
        //         if (data[k].code == code) {
        //             break;
        //         }
        //     }
        //     data = data[k] || data[0];
        //     addData(data);
        // });
    } else {
        $('#model-form').modal('show');
    }

    function addData(data) {
        for (var i = 0, len = fields.length; i < len; i++) {
            var item = fields[i];
            var value = item.value;
            var displayValue = data[item.field];
            if (item.checkbox) {
                continue;
            }
            if (item.field && item.field.indexOf('-') > -1) {
                var fs = item.field.split('-');
                displayValue = data[fs[0]] ? data[fs[0]][fs[1]] : '-';
                if (fs.length == 3) {
                    displayValue = data[fs[0]] && data[fs[0]][fs[1]] && data[fs[0]][fs[1]][fs[2]] || '';
                }
            }
            if (item.readonly) {
                if (item.type == 'm2o') {
                    if (displayValue) {
                        var clickDiv = $('#' + item.field + "-model").html('<a>' + displayValue + '</a>');
                        (function (a) {
                            clickDiv.on('click', function () {
                                window.open(a.url + '?v=1&code=' + data[a.codeField], '', 'width=1000,height=800');
                            });
                        })(item);
                    } else {
                        $('#' + item.field + "-model").html(item.defaultValue);
                    }

                } else if (item.type == 'o2m') {
                    if (item.pageCode) {
                        $('#' + item.field).html('<table id="' + item.field + 'List-model"></table>');
                        var searchParams = {};
                        searchParams[item['key']] = $('#code').val();
                        var options1 = {
                            columns: item.columns,
                            pageCode: item.pageCode,
                            tableId: item.field + 'List-model',
                            searchParams: searchParams,
                            type: 'o2m'
                        };
                        item.detailFormatter && (options1.detailFormatter = item.detailFormatter);
                        buildList(options1);
                    } else {
                        $('#' + item.field + "-model").html('<table id="' + item.field + 'List-model"></table>');
                        $('#' + item.field + 'List-model').bootstrapTable({
                            striped: true,
                            clickToSelect: true,
                            singleSelect: true,
                            columns: item.columns,
                            data: displayValue
                        });
                    }

                } else if (item.type == 'select' && item.data) {
                    var realValue = displayValue;
                    if (item.value) {
                        if (item.value.call) {
                            realValue = item.value(data);
                        } else {
                            realValue = item.value;
                        }
                    }
                    $('#' + item.field + "-model").html(item.data[realValue] || '-');
                    $('#' + item.field + "-model").attr('data-value', realValue);
                    if (item.onChange) {
                        item.onChange(realValue);
                    }
                } else if (item.type == 'select' && item.key) {
                    var list = [];
                    var realValue = displayValue;
                    if (item.value) {
                        if (item.value.call) {
                            realValue = item.value(data);
                        } else {
                            realValue = item.value;
                        }
                    }
                    if (!item.multiple) {
                        list = Dict.getName(item.key);
                        $('#' + item.field + "-model").html(Dict.getName(item.key, realValue || '0'));
                    } else {
                        var dv = '';
                        if (realValue) {
                            realValue.split('').forEach(function (i) {
                                dv += Dict.getName(item.key, i) + ' | ';
                            });
                            dv = dv.slice(0, dv.length - 3);
                        }

                        $('#' + item.field + "-model").html(dv || '-');
                    }

                    $('#' + item.field + "-model").attr('data-value', realValue);
                    if (item.onChange) {
                        item.onChange(realValue, Dict.findObj(list, realValue));
                    }
                } else if (item.type == 'radio') {
                    var selectOne = '';
                    for (var k = 0, len1 = item.items.length; k < len1; k++) {
                        if (item.items[k].key == displayValue) {
                            selectOne = item.items[k];
                            break;
                        }
                    }
                    $('#' + item.field + "-model").html('<div class="zmdi ' + selectOne.icon + ' zmdi-hc-5x" title="' + selectOne.value + '"></div>');
                } else if (item.type == 'select' && (item.pageCode || item.listCode || item.detailCode)) {
                    var params = {};
                    if (!item.detailCode && item.pageCode) {
                        params = {start: 1, limit: 1000000000};
                    }
                    var realValue = data[item['[value]']] || displayValue || '';
                    if (item.value && item.value.call) {
                        realValue = item.value(data);
                    }
                    params[item.detailSearchName || item.keyName] = realValue;
                    item.params && $.extend(params, item.params);
                    if (!realValue) {
                        $('#' + item.field + "-model").html('-');
                    } else if (realValue == 0) {
                        $('#' + item.field + "-model").html(item.defaultOption);
                    } else {
                        (function (i, displayValue) {
                            reqApi({
                                code: i.detailCode || i.listCode || i.pageCode,
                                json: params
                            }).then(function (d) {
                                var data;
                                if (displayValue) {
                                    data = (d && d.list) || d[0] && d || [d];
                                    for (var j = 0; j < data.length; j++) {
                                        if (data[j][i.keyName] == displayValue) {
                                            $('#' + i.field + "-model").html(data[j][i.valueName]);
                                        }
                                    }
                                } else {
                                    data = (d && d.list && d.list[0]) || d[0] || d;
                                    $('#' + i.field + "-model").html(data[i.valueName] || i.valueName.temp(data) || i.defaultOption);
                                }

                                $('#' + i.field + "-model").attr('data-value', data[i.keyName]);
                            });
                        })(item, displayValue);
                    }


                } else if (item.type == 'img') {
                    var realValue = data[item['[value]']] || displayValue || '';
                    if ($.isArray(realValue)) {
                        var imgHtml = '';
                        realValue.forEach(function (img) {
                            imgHtml += '<img src="' + img + '" style="max-width: 300px;"/>';
                        });
                        $('#' + item.field + "-model").html(imgHtml);
                    } else {
                        var sp = realValue && realValue.split('||') || [];
                        var imgsHtml = '';

                        var defaultFile = getDefaultFileIcon();
                        sp.length && sp.forEach(function (item) {
                            var suffix = item.slice(item.lastIndexOf('.') + 1);
                            var src = (item.indexOf('http://') > -1 ? item : (OSS.picBaseUrl + '/' + item));
                            var src1 = (item.indexOf('http://') > -1 ? item.substring(item.lastIndexOf("/") + 1) : item);
                            var name = src1.substring(0, src1.lastIndexOf("_")) + "." + suffix;
                            if (isDocOrAviOrZip(suffix)) {

                                imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                    '<div class="center-img-wrap">' +
                                    '<img width="100" src="' + getDocOrAviOrZipIcon(suffix) + '" />' +
                                    '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                    '</div>' +
                                    '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                    '</div>';
                            } else if (isAcceptImg(suffix)) {
                                imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                    '<div class="center-img-wrap">' +
                                    '<img src="' + src + OSS.picShow + '" style="max-width: 300px;" />' +
                                    '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                    '</div>' +
                                    '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                    '</div>';
                            } else {
                                imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                    '<div class="center-img-wrap">' +
                                    '<img width="100" src="' + defaultFile + '" />' +
                                    '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                    '</div>' +
                                    '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                    '</div>';
                            }
                        });
                        $('#' + item.field + "-model").html(imgsHtml);
                        $('#' + item.field + "-model").find('.zmdi-download').on('click', function (e) {
                            var dSrc = OSS.picBaseUrl + '/' + $(this).parents("[data-src]").attr('data-src');
                            window.open(dSrc, '_blank');
                        });
                    }

                } else {
                    if (item.field && item.field.indexOf('-') > -1) {
                        $('#' + item.field + "-model").html((item.amount ? moneyFormat(displayValue) : displayValue) || '-');
                    } else if (item.field in data) {
                        $('#' + item.field + "-model").html((item.amount ? moneyFormat(data[item.field]) : data[item.field]));
                    } else {
                        $('#' + item.field + "-model").html('-');
                    }

                }
                if (item.formatter && !item.formatter1) {
                    $('#' + item.field + "-model").html(item.formatter(displayValue, data));
                }
                if (item['[value]']) {
                    if (item.type == 'img') {
                        var realValue = data[item['[value]']] || displayValue || '';
                        if (realValue.indexOf('http://') > -1) {
                            $('#' + item.field + "-model").attr('src', realValue);
                        }
                    } else {
                        $('#' + item.field + "-model").html(item.amount ? moneyFormat(data[item['[value]']]) : data[item['[value]']]);
                    }

                }
            } else {
                if (item.type == 'img') {
                    var realValue = data[item['[value]']] || displayValue || '';
                    var sp = realValue && realValue.split('||') || [];
                    var imgsHtml = '';
                    var defaultFile = getDefaultFileIcon();
                    sp.length && sp.forEach(function (item) {
                        var suffix = item.slice(item.lastIndexOf('.') + 1);
                        var src = (item.indexOf('http://') > -1 ? item : (OSS.picBaseUrl + '/' + item));
                        var src1 = (item.indexOf('http://') > -1 ? item.substring(item.lastIndexOf("/") + 1) : item);
                        var name = src1.substring(0, src1.lastIndexOf("_")) + "." + suffix;
                        if (isDocOrAviOrZip(suffix)) {
                            imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                '<div class="center-img-wrap">' +
                                '<img width="100" src="' + getDocOrAviOrZipIcon(suffix) + '" />' +
                                '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                '</div>' +
                                '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                '</div>';
                        } else if (isAcceptImg(suffix)) {
                            imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                '<div class="center-img-wrap">' +
                                '<img src="' + src + OSS.picShow + '" style="max-width: 300px;" />' +
                                '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                '</div>' +
                                '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                '</div>';
                        } else {
                            imgsHtml += '<div class="img-ctn" data-src="' + src1 + '" style="display: inline-block;position: relative;">' +
                                '<div class="center-img-wrap">' +
                                '<img width="100" src="' + defaultFile + '" />' +
                                '<i class="zmdi zmdi-close-circle-o zmdi-hc-fw"></i>' +
                                '<i class="zmdi zmdi-download zmdi-hc-fw"></i>' +
                                '</div>' +
                                '<div class="t_3dot w100p" title="' + name + '">' + name + '</div>' +
                                '</div>';
                        }
                    });
                    $('#' + item.field + "-model").html(imgsHtml);
                    $('#' + item.field + "-model").find('.zmdi-close-circle-o').on('click', function (e) {
                        $(this).parents("[data-src]").remove();
                    });
                    $('#' + item.field + "-model").find('.zmdi-download').on('click', function (e) {
                        var dSrc = OSS.picBaseUrl + '/' + $(this).parents("[data-src]").attr('data-src');
                        window.open(dSrc, '_blank');
                    });
                } else if (item.type == 'radio') {
                    $('input[name=' + item.field + '-model][value=' + displayValue + ']').prop('checked', true);
                } else if (item.type == 'textarea' && !item.normalArea) {
                    $('#' + item.field + "-model")[0].editor.$txt.html(data[item.field]);
                } else if (item.type == 'textarea' && item.normalArea) {
                    $('#' + item.field + "-model").val(data[item.field]);
                } else if (item.type == 'citySelect') {
                    // if (data.province == data.city && data.city == data.area) {
                    //     data.city = "";
                    //     data.area = "";
                    // } else if (data.province == data.city && data.city != data.area) {
                    //     data.city = data.area;
                    // }
                    $('#province-model').val(data.province);
                    $('#province-model').trigger('change');
                    data.city && $('#city-model').val(data.city);
                    data.city && $('#city-model').trigger('change');
                    data.area && $('#area-model').val(data.area);
                } else {
                    $('#' + item.field + "-model").val(item.amount ? moneyFormat(displayValue) : displayValue);
                }
            }

            if ('value' in item) {
                if (item.value && item.value.call) {
                    $('#' + item.field + "-model").val(item.value(data));
                } else {
                    $('#' + item.field + "-model").val(item.amount ? moneyFormat(item.value) : item.value);
                }
            }

            if (item['[value]']) {
                if (item.type == 'img') {
                    var realValue = data[item['[value]']] || displayValue || '';
                    if (realValue.indexOf('http://') > -1) {
                        $('#' + item.field + "-model").attr('src', realValue);
                    }
                } else {
                    $('#' + item.field + "-model").val(item.amount ? moneyFormat(data[item['[value]']]) : data[item['[value]']]);
                }

            }

            if (item.type == 'select') {
                $('#' + item.field + "-model").trigger('change');
            }

            if (item.link) {
                $('#' + item.field + "-model").html('<a target="_blank" href="' + displayValue + '">' + displayValue + '</a>');
            }

            if (item.afterSet) {
                item.afterSet(displayValue, data);
            }


        }
        options.afterData && options.afterData(data);
        $('#model-form').modal('show');
    }

    chosen1();
}

function chosen1() {
    $('select', $("#model-form")).chosen && $('select', $("#model-form")).not('.norender').chosen({
        search_contains: true,
        allow_single_deselect: true
    });
    $('select', $("#model-form")).chosen && $('select', $("#model-form")).not('.norender').chosen().change(function () {
        // var that = this;
        // setTimeout(function() {
        //     $(that).parent().height($(that).prev().height());
        // }, 1);

    });
}
//计算密码强度
function calculateSecurityLevel(password) {
    var strength_L = 0;
    var strength_M = 0;
    var strength_H = 0;

    for (var i = 0; i < password.length; i++) {
        var code = password.charCodeAt(i);
        // 数字
        if (code >= 48 && code <= 57) {
            strength_L++;
            // 小写字母 大写字母
        } else if ((code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)) {
            strength_M++;
            // 特殊符号
        } else if ((code >= 32 && code <= 47) ||
            (code >= 58 && code <= 64) ||
            (code >= 94 && code <= 96) ||
            (code >= 123 && code <= 126)) {
            strength_H++;
        }
    }
    // 弱
    if ((strength_L == 0 && strength_M == 0) ||
        (strength_L == 0 && strength_H == 0) ||
        (strength_M == 0 && strength_H == 0)) {
        return "1";
    }
    // 强
    if (0 != strength_L && 0 != strength_M && 0 != strength_H) {
        return "3";
    }
    // 中
    return "2";
}
//计算月供
//bj:本金、ll:年利率(百分比)、t:贷款周期(数据字典)
function calculateMonthlyPayments(bj, ll, time) {
    var result = "-";
    bj = (bj + "").replace(/,/g, "");
    ll = (ll + "").replace(/,/g, "");
    if ($.isNumeric(bj) && $.isNumeric(ll) && $.isNumeric(time)) {
        ll = +ll / 1200;    //除以12个月，再除以100，因为传入的是百分比
        bj = +bj;
        time = +time;
        var a1 = Math.pow(ll + 1, time);
        result = (a1 * bj * ll) / (a1 - 1);
        result = result.toFixed(2);
    }
    return result;
}

function getImportDataFun(options, dw) {
    options = options || {};
    // 导入
    var X = XLSX;
    var XW = {
        /* worker message */
        msg: 'xlsx',
        /* worker scripts */
        rABS: './xlsxworker2.js',
        norABS: './xlsxworker1.js',
        noxfer: './xlsxworker.js'
    };

    var output = '';

    var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
    if (!rABS) {
        document.getElementsByName("userabs")[0].disabled = true;
        document.getElementsByName("userabs")[0].checked = false;
    }

    var use_worker = typeof Worker !== 'undefined';
    if (!use_worker) {
        document.getElementsByName("useworker")[0].disabled = true;
        document.getElementsByName("useworker")[0].checked = false;
    }

    var transferable = use_worker;
    if (!transferable) {
        document.getElementsByName("xferable")[0].disabled = true;
        document.getElementsByName("xferable")[0].checked = false;
    }

    var wtf_mode = false;

    function fixdata(data) {
        var o = "",
            l = 0,
            w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }

    function ab2str(data) {
        var o = "",
            l = 0,
            w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint16Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint16Array(data.slice(l * w)));
        return o;
    }

    function s2ab(s) {
        var b = new ArrayBuffer(s.length * 2),
            v = new Uint16Array(b);
        for (var i = 0; i != s.length; ++i) v[i] = s.charCodeAt(i);
        return [v, b];
    }

    function xw_noxfer(data, cb) {
        var worker = new Worker(XW.noxfer);
        worker.onmessage = function (e) {
            switch (e.data.t) {
                case 'ready':
                    break;
                case 'e':
                    console.error(e.data.d);
                    break;
                case XW.msg:
                    cb(JSON.parse(e.data.d));
                    break;
            }
        };
        var arr = rABS ? data : btoa(fixdata(data));
        worker.postMessage({d: arr, b: rABS});
    }

    function xw_xfer(data, cb) {
        var worker = new Worker(rABS ? XW.rABS : XW.norABS);
        worker.onmessage = function (e) {
            switch (e.data.t) {
                case 'ready':
                    break;
                case 'e':
                    console.error(e.data.d);
                    break;
                default:
                    xx = ab2str(e.data).replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                    console.log("done");
                    cb(JSON.parse(xx));
                    break;
            }
        };
        if (rABS) {
            var val = s2ab(data);
            worker.postMessage(val[1], [val[1]]);
        } else {
            worker.postMessage(data, [data]);
        }
    }

    function xw(data, cb) {
        transferable = true;
        if (transferable) xw_xfer(data, cb);
        else xw_noxfer(data, cb);
    }

    function get_radio_value(radioName) {
        var radios = document.getElementsByName(radioName);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked || radios.length === 1) {
                return radios[i].value;
            }
        }
    }

    function to_json(workbook) {
        var result = {};
        workbook.SheetNames.forEach(function (sheetName) {
            var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName], {
                header: 1
            });
            if (roa.length > 0) {
                result = roa;
            }
        });
        return result;
    }

    function to_csv(workbook) {
        var result = [];
        workbook.SheetNames.forEach(function (sheetName) {
            var csv = X.utils.sheet_to_csv(workbook.Sheets[sheetName]);
            if (csv.length > 0) {
                result.push("SHEET: " + sheetName);
                result.push("");
                result.push(csv);
            }
        });
        return result.join("\n");
    }

    function to_formulae(workbook) {
        var result = [];
        workbook.SheetNames.forEach(function (sheetName) {
            var formulae = X.utils.get_formulae(workbook.Sheets[sheetName]);
            if (formulae.length > 0) {
                result.push("SHEET: " + sheetName);
                result.push("");
                result.push(formulae.join("\n"));
            }
        });
        return result.join("\n");
    }

    var tarea = document.getElementById('b64data');

    function b64it() {
        if (typeof console !== 'undefined') console.log("onload", new Date());
        var wb = X.read(tarea.value, {type: 'base64', WTF: wtf_mode});
        process_wb(wb);
    }

    function process_wb(wb) {
        output = "";
        output = to_json(wb);
        var header = output.shift();
        var list = [];
        var sheetName = '';
        for (var key in output) {
            sheetName = key;
        }
        output.forEach(function (item) {
            var obj = {};
            header.forEach(function (i, index) {
                obj[i] = item[index];
            });
            list.push(obj);
        });

        options.getImportData && options.getImportData(list);
        dw && dw.close().remove();

    }

    function handleDragover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    return function (e) {
        rABS = true;
        use_worker = false;
        var files = e.target.files;
        var f = files[0];
        output = '';
        if (f) {
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function (e) {
                if (typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
                var data = e.target.result;
                try {
                    if (use_worker) {
                        xw(data, process_wb);
                    } else {
                        var wb;
                        if (rABS) {
                            wb = X.read(data, {type: 'binary'});
                        } else {
                            var arr = fixdata(data);
                            wb = X.read(btoa(arr), {type: 'base64'});
                        }
                        process_wb(wb);
                    }
                } catch (e) {
                    options.error && options.error();
                    toastr.info("导入失败");
                }
            };
            if (rABS) reader.readAsBinaryString(f);
            else reader.readAsArrayBuffer(f);
        }
    }
}
function isDocOrAviOrZip(suffix) {
    if (suffix == 'docx' || suffix == 'doc' || suffix == 'pdf' ||
        suffix == 'xls' || suffix == 'xlsx' || suffix == "mp4" ||
        suffix == "avi" || suffix == "rar" || suffix == "zip") {
        return true;
    }
    return false;
}
function getDocOrAviOrZipIcon(suffix) {
    var suffixMap = {
        'docx': __inline('../images/word.png'),
        'doc': __inline('../images/word.png'),
        'xls': __inline('../images/excel.png'),
        'xlsx': __inline('../images/excel.png'),
        'pdf': __inline('../images/pdf.png'),
        'avi': __inline('../images/avi.png'),
        'mp4': __inline('../images/avi.png'),
        'rar': __inline('../images/rar.png'),
        'zip': __inline('../images/rar.png')
    };
    return suffixMap[suffix];
}
function isAcceptImg(suffix) {
    if (suffix == 'jpg' || suffix == 'gif' ||
        suffix == 'png' || suffix == 'bmp') {
        return true;
    }
    return false;
}
function getDefaultImgIcon() {
    var src = __inline("../images/default_img.png");
    return src;
}
function getDefaultFileIcon() {
    var src = __inline("../images/default_file.png");
    return src;
}
