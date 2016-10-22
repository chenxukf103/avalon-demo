define(["avalon", "popup"], function (avalon, popup) {
        var showError = function (el, data) {
            removeError(el);
            var html = "<div class='error-tip'>" + data.getMessage() + "</div>";
            $(el).addClass("error");
            if ($(el).parent().hasClass("oni-dropdown")) {
                $(el).parent().addClass("error");
            }
            $(el).parent().append(html);
        };

        var removeError = function (el) {
            $(el).removeClass("error");
            $(el).parent().find(".error-tip").remove();
            if ($(el).parent().hasClass("error")) {
                $(el).parent().removeClass("error");
            }
        }
        return {
        	toJsonStr:function(obj){
    			var objJsonStr=JSON.stringify(obj,null," ");
    			return objJsonStr;
    		},
            copyArray: function (obj) {
                return avalon.mix(true, [], obj);
            },
            copy: function (obj) {
                return avalon.mix(true, {}, obj);
            },
            setAttrs: function (obj, param) {
                for (var key in param) {
                    if (key in obj) {
                        obj[key] = param[key];
                    }
                }
            },
            genDropDownData: function (data, value, label) {
                value = value || 'value';
                label = label || 'label';
                var ret = [];
                for (var i = 0, len = data.length; i < len; i++) {
                    var obj = {
                        value: data[i][value],
                        label: data[i][label]
                    }
                    ret.push(obj);
                }
                return ret;
            },
            genValidation: function (opt) {
                var config = {
                    /*valiedateInBlur: false,*/
                    resetInFocus: false,
                    onInit: function (v) {
                        if (opt && opt.onInit) {
                            opt.onInit(v);
                        }
                    },
                    onReset: function (e, data) {
                        data.valueResetor()
                    },
                    onError: function (reasons) {
                        //console.info(reasons);
                        for (var i = 0, len = reasons.length; i < len; i++) {
                            //avalon(reasons[i].element).addClass("error")
                            showError(reasons[i].element, reasons[i]);
                        }
                    },
                    onSuccess: function () {
                        //avalon(this).removeClass("error");
                        removeError(this);
                    },
                    onValidateAll: function (reasons) {
                        for (var i = 0, len = reasons.length; i < len; i++) {
                            //avalon(reasons[i].element).addClass("error")
                            showError(reasons[i].element, reasons[i]);
                        }

                        if (reasons.length > 0) {
                            popup.alert("验证不通过，请注意红色文字的提示！", "warning");
                        }

                        if (opt && opt.onValidateAll) {
                            opt.onValidateAll(reasons);
                        }
                    }
                }

                return config;
            },
            bathExport: function (url, paramTemp) {
                var param = $.extend(true, {}, paramTemp);
                param.doPage = false;
                /*
                 if (sorting) {
                 param.sort = this.getSortStr(sorting);
                 }
                 */
                var formObj = param;
                if (formObj) {
                    if ($("#export-frame").length == 0) {
                        var exportFrame = '<iframe name="export-frame" hidden="hidden" id="export-frame" ></iframe>';
                        $(exportFrame).appendTo('body');
                    }
                    var formStr = '<form method="post" hidden="hidden" action="' + url + '" target="export-frame">';
                    for (var key in formObj) {
                        if (formObj[key] === null || formObj[key] === undefined) {
                            continue;
                        }
                        formStr += '<input type="hidden" name="' + key + '" value="' + formObj[key] + '" /> ';
                    }
                    formStr += "</form>";
                    var $form = $(formStr).appendTo('body');
                    $form.submit();
                    $form.remove();
                }
            }

        }
    }
);