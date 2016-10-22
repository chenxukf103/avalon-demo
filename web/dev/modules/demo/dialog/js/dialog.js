/**
 * Created by suyc on 2016/8/22.
 */
define(['avalon'],function (avalon) {
    var vm = avalon.define({
        $id:"dialogDemo",
        message:"笑傻了吧！！",
        show2:function (e) {
         alert(e);
        },
        show:function (id) {
            avalon.vmodels[id].toggle = true;
        },
        name:"shirly",
        check1:["1"],
        $aaOpts1:{
            fullScreenButton:true
        }
    });
    var vm2 = avalon.define({
        $id:"dialogDemo1",
        show:function (id) {
            avalon.vmodels[id].toggle = true;
        },
        title:"可自定义回调操作的dialog",
        $aaOpts:{
            onOpen:function () {
                alert("open dialog");
            },
            onConfirm:function () {
                alert('success')
            },
            onClose:function () {
                alert('fail');
            }
        }
    });
    var vm3 = avalon.define({
        $id:"dialogDemo2",
        show:function (id) {
            avalon.vmodels[id].toggle = true;
        },
        $ssOpts:{
            title:"层上层的dialog",
            onConfirm:function () {
                alert("submit success!");
            }
        },
        $ggOpts:{
            title:"gg dialog,在ss dialog之上",
            showClose:false,
            fullScreenButton:true
        },
        $mmOpts:{
            title:"mm dialog 的tittle",
            fullScreenButton:true,
            onConfirm:function () {
                alert("确定操作，完成之后关闭弹窗");
            },
            onClose:function () {
                alert("取消操作，完成之后关闭弹窗");
            }
        }
    });
    var vm4 = avalon.define({
        $id:"dialogDemo3",
        show:function (id) {
            avalon.vmodels[id].toggle = true;
        },
        $ssOpts:{
            title:"dialog测试",
            fullScreenButton:true,
            $opts:{ data: [{value:'',label: '不限'},{value: 1,label: '国有'},{value: 2,label: '私营'}]},
            onConfirm:function () {
                alert("submit success!");
            }
        }
    });
    return avalon.controller(function ($ctrl) {
        $ctrl.$vmodels = [vm,vm2,vm3,vm4];
        $ctrl.$onEnter = function (param, rs, rj) {

        }
        $ctrl.$onRendered = function() {
            //avalon.bind(document.getElementById("123"),"click",vm.show2)
        }
    });
});
