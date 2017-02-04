SYJDictCache = {};
Dict = {};
Dict.findName = function(data, key, k, v) {
	k = k || 'dkey';
	v = v || 'dvalue';
	data = data || [];
	var i = 0, len = data.length, res;
	for (; i < len; i++) {
		var item = data[i];
		if (item[k] == key) {
			res = item[v];
			break;
		}
	}
	return res;
};
Dict.findObj = function(data, key, k) {
	k = k || 'dkey';
	data = data || [];
	var i = 0, len = data.length, res;
	for (; i < len; i++) {
		var item = data[i];
		if (item[k] == key) {
			res = item;
			break;
		}
	}
	return res;
};

Dict.getName = function(type, key) {
	var res;
	reqApi({
		code: '807706',
		cache: true,
		sync: true,
		json: {
			parentKey: type
		}
	}).then(function(data) {
		res = key ? (Dict.findName(data, key) || '-') : data;
	});
	return res;
//	if (!SYJDictCache[type]) {
//		doGetAjaxIsAsync($("#dictUrl").val(), {"parentKey": type}, false, function(res) {
//			SYJDictCache[type] = res.data;
//		});
//	}
//	return key ? (Dict.findName(SYJDictCache[type], key) || '-') : SYJDictCache[type];
}

Dict.getName1 = function (type, key, value) {
    var arr = Dict.getName(type),
        result = [];
    for(var i = 0; i < arr.length; i++){
        result.push({"value": arr[i][key || "dkey"], "text": arr[i][value || "dvalue"]});
    }
    return result;
};

Dict.getNameForList = function(type,code) {
	var res;
	reqApi({
		code: code ||'807706',
		cache: true,
		sync: true,
		json: {
			parentKey: type
		}
	}).then(function(data) {
		res = function(key) {
			return key ? Dict.findName(data, key) : '-';
		}
	});
	return res;
//	if (!SYJDictCache[type]) {
//		doGetAjaxIsAsync($("#dictUrl").val(), {"parentKey": type}, false, function(res) {
//			SYJDictCache[type] = res.data;
//		});
//	}
//	return function(key) {
//		return key ? Dict.findName(SYJDictCache[type], key) : '-';
//	}
}