define([],function(){
	return {
		/*根据菜单配置的值解析路由*/
		getState:function(routerName){
			var ret = {};
			var regx=/\(\{\S*\}\)/;
			if(routerName && regx.test(routerName)){
				var rs = regx.exec(routerName);
				ret.path = routerName.replace(rs, '');

				var paramRegx=/\{\S*\}/;
				if(paramRegx.test(rs)){
					var paramStr = paramRegx.exec(rs);
					ret.param = avalon.parseJSON(paramStr);
				}

			}else{
				ret.path = routerName;
				ret.param = {};
			}
			return ret;
		}
	}
});