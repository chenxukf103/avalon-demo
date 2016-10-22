/*define(['avalon','resources/lib/oniui/mmRouter/mmState'],
 function(avalon){
 avalon.state("state1", {
 url: "/state1/:id",
 templateUrl: "modules/state1/state1.html",
 controllerUrl:"modules/state1/state1Ctrl.js"
 }).state("state2", {
 url: "/state2",
 templateUrl: "modules/state2/state2.html"
 })
 //启动路由
 avalon.history.start();
 });*/

define([], function () {
    return {
        defaultPath: '/home',
        defaultState: 'home',
        routers: {
            /*"login": {
                name: '登录',
                data: {
                    url: "/login",
                    templateUrl: "modules/login/views/login.html",
                    controllerUrl: ["modules/login/js/login.js"]
                }
            },*/
            "home": {
                name: '主页',
                data: {
                    url: "/home",
                    templateUrl: "modules/demo/dialog/views/dialog.html",
                    controllerUrl: ["modules/demo/dialog/js/dialog.js"]
                }
            },
            "home.demo": {
                name: '开发参考',
                data: {
                    url: "/demo",
                    templateUrl: "common/templates/common-veiw.html"
                }
            },
            "home.demo.dropdown": {
                name: '下拉框',
                data: {
                    url: "/dropdown",
                    templateUrl: "modules/demo/dropdown/views/dropdown.html",
                    controllerUrl: "modules/demo/dropdown/js/dropdown.js"
                }
            },
            "home.demo.notice": {
                name: "提示/提示消息",
                data: {
                    url: "/notice",
                    templateUrl: "modules/demo/notice/views/notice.html",
                    controllerUrl: "modules/demo/notice/js/notice.js"
                }
            },
            "home.demo.spinner": {
                name: "数字输入框",
                data: {
                    url: "/spinner",
                    templateUrl: "modules/demo/spinner/views/spinner.html",
                    controllerUrl: ["modules/demo/spinner/js/spinner.js"]
                }
            },
            "home.demo.dialog": {
                name: "对话框",
                data: {
                    url: "/dialog",
                    templateUrl: "modules/demo/dialog/views/dialog.html",
                    controllerUrl: ["modules/demo/dialog/js/dialog.js"]
                }
            },
            "home.demo.validation": {
                name: "验证组件",
                data: {
                    url: "/validation",
                    templateUrl: "modules/demo/validation/views/validation.html",
                    controllerUrl: ["modules/demo/validation/js/validation.js"]
                }
            }
        }
        };
});