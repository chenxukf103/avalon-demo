define(['jquery'],function($){
	$.browser={
		mozilla:/firefox/.test(navigator.userAgent.toLowerCase()),
		webkit:/webkit/.test(navigator.userAgent.toLowerCase()),
		safari:/webkit/.test(navigator.userAgent.toLowerCase()),
		opera:/opera/.test(navigator.userAgent.toLowerCase()),
		msie:/msie/.test(navigator.userAgent.toLowerCase())
	};
});