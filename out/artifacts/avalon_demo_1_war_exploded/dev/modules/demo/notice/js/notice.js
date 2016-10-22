/**
 * Created by suyc on 2016/8/19.
 */
define(["avalon"], function (avalon) {
    var vm = avalon.define({
        $id: "noticeDemo",
        $bOpts: {
            header: "提示信息title",
            content: "提示信息content"
            //isPlace:true是否站位，默认站位
            //type:"success"
        },
        changeHeader: function (id) {
            var vmodel = avalon.vmodels[id];
            vmodel.header = "new notice title"
        },
        changeContent: function (id) {
            var vmodel = avalon.vmodels[id];
            vmodel.content = "new notice content,yeap!";
        },
        toggleType: function (id) {
            var typeArr = ["info", "success", "error"];
            var noticeVm = avalon.vmodels[id];
            var index = Math.floor(Math.random() * 3);
            noticeVm.type = typeArr[index];
        },
        toggleNotice: function (id) {
            var noticeVm = avalon.vmodels[id];
            noticeVm.toggle = !noticeVm.toggle
        }
    });
    return avalon.controller(function ($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function (param, rs, rj) {
        }
    })
});