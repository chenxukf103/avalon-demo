require(["avalon",
        "routerConfig",
        "domReady!"],
    function(avalon,routerConfig) {


        var vm = avalon.define({
            $id: "root"

        });

        //----- 配置路由 -------
        if (routerConfig.routers !== undefined) {
            for ( var key in routerConfig.routers) {
                var route= routerConfig.routers[key];
                avalon.state(key,route.data);
            }
        }



        //设置默认跳转
        avalon.router.when("/",routerConfig.defaultPath);

        //启动路由
        avalon.history.start();
        //----- 配置路由 end -------

        avalon.scan(document.body);
    });