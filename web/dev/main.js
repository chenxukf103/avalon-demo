require.config({
    //baseUrl: '/',
    paths: {
        jquery: 'resources/lib/jquery/jquery-1.12.4.min',
        avalon: "resources/lib/avalon/avalon.shim",
        mmHistory: 'resources/lib/oniui/mmRouter/mmHistory',
        mmPromise: 'resources/lib/oniui/mmRouter/mmPromise',
        mmRouter: 'resources/lib/oniui/mmRouter/mmRouter',
        mmState: 'resources/lib/oniui/mmRouter/mmState',
        text: 'resources/lib/require/text',
        domReady: 'resources/lib/require/domReady',
        css: 'resources/lib/require/css',
        routerConfig:'common/config/router-config',
        oniui:'resources/lib/oniui/oniui.require',
        contextService:'common/utils/contextService',
        sysUtil:'common/utils/sysUtil',
        menuUtil:'common/utils/menuUtil',
        app:"./app"
    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: "jquery"
        },
        avalon: {
            exports: "avalon"
        },
        mmHistory: {
            deps: ['avalon'],
            exports: 'mmHistory'
        },
        mmPromise: {
            deps: ['avalon'],
            exports: 'mmPromise'
        },
        mmRouter: {
            deps: ['avalon', 'mmHistory'],
            exports: 'mmRouter'
        },
        mmState: {
            deps: ['avalon', 'mmPromise', 'mmRouter'],
            exports: 'mmState'
        },
        app:{
            deps: ['avalon','jquery','oniui', "mmRouter", "mmHistory", "mmPromise", "mmState"]
        }
    }
});

require(["domReady!","app"],function() {
});