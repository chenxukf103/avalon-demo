define([],function(){
	var contextData = null;
	return {
		setContextData:function(data){
			contextData = data;
		},
		getContextData:function(){
			return contextData;
		},
		getMenusTree:function(){
			if(!contextData || contextData.menusTree){
				return [];
			}
			return contextData.menusTree;
		},
		getConstantValue:function(type,key){//通过常量的类型和key值来获取常量的value值
			if(contextData.constantsValueMap){
				if(contextData.constantsValueMap[type]){
					if(contextData.constantsValueMap[type][key]){
						return contextData.constantsValueMap[type][key];
					}
				}
			}
			return [];
		},
		getConstants:function(){//取常量值
			if(contextData.constantsNameValueMap){
				return tcontextData.constantsNameValueMap;
			}
			return {};
		}
	}
})
