webshims.register("form-validators",function(a,b,c,d){"use strict";!function(){b.refreshCustomValidityRules&&b.error("form-validators already included. please remove custom-validity.js");var c,e,f={},g=!1,h=function(a){b.refreshCustomValidityRules(a.target)},i=function(){return!i.types[this.type]};i.types={hidden:1,image:1,button:1,reset:1,submit:1},b.customErrorMessages={},b.addCustomValidityRule=function(c,d,e){f[c]=d,b.customErrorMessages[c]||(b.customErrorMessages[c]=[],b.customErrorMessages[c][""]=e||c),g&&a("input, select, textarea, fieldset[data-dependent-validation]").filter(i).each(function(){j(this)})},b.refreshCustomValidityRules=function(d){if(e){var g,h,i=a(d).data(),j="",k=i&&i.customMismatchedRule,l=i&&a.prop(d,"validity")||{valid:1};return i&&(k||l.valid)&&(h=function(e,f){c=!0,e?(i.customMismatchedRule=f,"string"!=typeof e&&(e=b.getContentValidationMessage(d,!1,f),e&&"object"==typeof e&&(e=e[f]),e&&"string"==typeof e||(e=b.customErrorMessages[f][b.activeLang()]||b.customErrorMessages[f][""]||e.customError||e.defaultMessage||""))):(e="",i.customMismatchedRule=""),a(d).setCustomValidity(e),c=!1},g=a(d).val(),a.each(f,function(a,b){return j=b(d,g,i,h)||"",k=a,j?!1:void 0}),i&&i.dependentValidation&&!i.dependentValidation._init&&!i.dependentValidation.masterElement&&f.dependent(d,g,i,a.noop),"async"==j||!j&&l.valid||h(j,k)),j}};var j=b.refreshCustomValidityRules;b.ready("forms form-validation",function(){a.propHooks.setCustomValidity={get:function(b){return c||a.data(b,"customMismatchedRule",""),null}},setTimeout(function(){b.addReady(function(b,c){e=!0,a("input, select, textarea, fieldset[data-dependent-validation]",b).add(c.filter("input, select, textarea, fieldset[data-dependent-validation]")).filter(i).each(function(){j(this)}),g=!0}),a(d).on("refreshCustomValidityRules",h)},9)})}(),function(){var e=b.cfg.forms,f=b.addCustomValidityRule,g=function(a){return d.getElementById(a)||d.getElementsByName(a)};f("partialPattern",function(a,b,c){return c=c.partialPattern,b&&c?!new RegExp("("+c+")","i").test(b):void 0},"This format is not allowed here."),f("tooShort",function(c,d,e){return d&&e.minlength?(a.nodeName(c,"input")&&b.warn('depreacated data-minlength usage: Use pattern=".{'+e.minlength+'3,}" instead.'),e.minlength>d.length):void 0},"Entered value is too short."),f("grouprequired",function(c,e,f){var g,h=c.name;return h&&"checkbox"===c.type&&"grouprequired"in f?(f.grouprequired&&f.grouprequired.checkboxes||(f.grouprequired.checkboxes=a((g=a.prop(c,"form"))&&g[h]||d.getElementsByName(h)).filter('[type="checkbox"]'),f.grouprequired.checkboxes.off("click.groupRequired").on("click.groupRequired",function(){b.refreshCustomValidityRules(c)}),f.grouprequired.checkboxes.not(c).removeData("grouprequired")),!f.grouprequired.checkboxes.filter(":checked:enabled")[0]):void 0},"Please check one of these checkboxes."),f("creditcard",function(a,b,c){if(b&&c&&"creditcard"in c){if(b=b.replace(/\-/g,""),b!=1*b)return!0;for(var d,e=b.length,f=0,g=1;e--;)d=parseInt(b.charAt(e),10)*g,f+=d-9*(d>9),g^=3;return!(f%10===0&&f>0)}},"Please enter a valid credit card number");var h={prop:"value","from-prop":"value",toggle:!1},i=function(b){return a(b.form[b.name]).filter('[type="radio"]')};b.ready("form-validation",function(){b.modules&&(i=b.modules["form-core"].getGroupElements||i)}),f("dependent",function(c,e,f){if(f=f.dependentValidation){var g,j=function(b){var d=a.prop(f.masterElement,f["from-prop"]);g&&(d=-1!==a.inArray(d,g)),f.toggle&&(d=!d),a.prop(c,f.prop,d),b&&a(c).getShadowElement().filter(".user-error, .user-success").trigger("refreshvalidityui")};if(!f._init||!f.masterElement){if("string"==typeof f&&(f={from:f}),f.masterElement=d.getElementById(f.from)||d.getElementsByName(f.from||[])[0],f._init=!0,!f.masterElement||!f.masterElement.form)return;/radio|checkbox/i.test(f.masterElement.type)?(f["from-prop"]||(f["from-prop"]="checked"),f.prop||"checked"!=f["from-prop"]||(f.prop="disabled")):f["from-prop"]||(f["from-prop"]="value"),0===f["from-prop"].indexOf("value:")&&(g=f["from-prop"].replace("value:","").split("||"),f["from-prop"]="value"),f=a.data(c,"dependentValidation",a.extend({_init:!0},h,f)),"value"!==f.prop||g?a("radio"===f.masterElement.type&&i(f.masterElement)||f.masterElement).on("change",j):a(f.masterElement).on("change",function(){a(c).getShadowElement().filter(".user-error, .user-success").each(function(){b.refreshCustomValidityRules(c)}).trigger("refreshvalidityui")})}return"value"!=f.prop||g?(j(),""):a.prop(f.masterElement,"value")!=e}},"The value of this field does not repeat the value of the other field"),f("valuevalidation",function(b,c,d){return c&&"valuevalidation"in d?a(b).triggerHandler("valuevalidation",[{value:c,valueAsDate:a.prop(b,"valueAsDate"),isPartial:!1}])||"":void 0},"This value is not allowed here"),c.JSON&&f("ajaxvalidate",function(c,d,f){if(d&&f.ajaxvalidate){var h;if(!f.remoteValidate){"string"==typeof f.ajaxvalidate?f.ajaxvalidate={url:f.ajaxvalidate,depends:a([])}:f.ajaxvalidate.depends=f.ajaxvalidate.depends?a("string"==typeof f.ajaxvalidate.depends&&f.ajaxvalidate.depends.split(" ")||f.ajaxvalidate.depends).map(g):a([]),f.ajaxvalidate.depends.on("refreshCustomValidityRules",function(){b.refreshCustomValidityRules(c)}),h=f.ajaxvalidate;var i={ajaxLoading:!1,restartAjax:!1,message:"async",cache:{},update:function(b){this.ajaxLoading?this.restartAjax=b:(this.restartAjax=!1,this.ajaxLoading=!0,a.ajax(a.extend({},h,{url:h.url,dataType:"json",depData:b,data:e.fullRemoteForm||h.fullForm?a(c).jProp("form").serializeArray():b,success:this.getResponse,complete:this._complete})))},_complete:function(){i.ajaxLoading=!1,i.restartAjax&&this.update(i.restartAjax),i.restartAjax=!1},getResponse:function(b){b?"string"==typeof b&&(b=JSON.parse(b)):b={message:"",valid:!0},i.message="message"in b?b.message:!b.valid,i.lastMessage=i.message,i.blockUpdate=!0,a(c).triggerHandler("refreshvalidityui"),i.message="async",i.blockUpdate=!1},getData:function(){var b;return b={},b[a.prop(c,"name")||a.prop(c,"id")]=a(c).val(),h.depends.each(function(){return a(this).is(":invalid")?(b=!1,!1):(b[a.prop(this,"name")||a.prop(this,"id")]=a(this).val(),void 0)}),b},getTempMessage:function(){var a,b,c="async";if(f.remoteValidate.blockUpdate)c=i.message;else if(a=this.getData()){try{b=JSON.stringify(a)}catch(d){}b===this.lastString?c=this.ajaxLoading?"async":this.lastMessage:(this.lastString=b,this.lastMessage="async",clearTimeout(f.remoteValidate.timer),f.remoteValidate.timer=setTimeout(function(){f.remoteValidate.update(a)},9))}else c="";return c}};f.remoteValidate=i}return f.remoteValidate.getTempMessage()}},"remote error")}()});