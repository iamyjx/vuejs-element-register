(function(e){function t(t){for(var n,i,s=t[0],u=t[1],c=t[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"0f12":function(e,t,r){"use strict";var n=r("a386"),o=r.n(n);o.a},"24ab":function(e,t,r){e.exports={theme:"#1890ff"}},"532d":function(e,t,r){"use strict";r.r(t);var n=r("bc3a"),o=r.n(n),a=o.a.create({timeout:5e3});a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){var t=e.data;return 200!==e.status?Promise.reject(new Error(t.message||"Error")):t}),(function(e){return Promise.reject(e)}));var i=a,s={isReady:0,data:[]},u={SET_COUNTRIES:function(e){s.data=e},SET_READY:function(e){s.isReady=e}},c={loadData:function(e){e.commit;if(s.isReady)return!0;i.get("https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json").then((function(e){s.isReady=!0,s.data=e}))}};t["default"]={namespaced:!0,state:s,mutations:u,actions:c}},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("RegisterPage")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",[r("h1",[e._v("Register Form")])]),r("el-container",[r("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.isSubmit,expression:"isSubmit"}]},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("form")}}},[r("el-form-item",{attrs:{label:"Country",prop:"country"}},[r("el-select",{directives:[{name:"loading",rawName:"v-loading",value:!e.isCountryDataReady,expression:"!isCountryDataReady"}],attrs:{filterable:"",placeholder:"Select"},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}},e._l(e.countries,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.code}})})),1)],1),r("el-form-item",{attrs:{label:"Email",prop:"email"}},[r("el-input",{attrs:{type:"email",autocomplete:"off"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),r("el-form-item",{attrs:{label:"Confirm",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.checkPass,callback:function(t){e.$set(e.form,"checkPass",t)},expression:"form.checkPass"}})],1),r("el-form-item",[r("el-button",{attrs:{disabled:e.isSubmit,type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("Submit")])],1)],1)],1)],1)],1)},s=[],u=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("d225"),l=r("b0b4"),f=function(){function e(){Object(c["a"])(this,e)}return Object(l["a"])(e,[{key:"isValidEmail",value:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}},{key:"isEmpty",value:function(e){return""===e||null===e}},{key:"minLength",value:function(e,t){return String(t).length>=e}}]),e}(),p=new f,d=r("2f62");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={name:"RegisterPage",data:function(){var e=this;return{form:{country:"",email:"",pass:"",checkPass:""},isSubmit:!1,rules:{country:[{validator:function(e,t,r){p.isEmpty(t)?r(new Error("Please select country")):r()},trigger:"change"}],email:[{validator:function(e,t,r){p.isValidEmail(t)?r():r(new Error("Email is invalid"))},trigger:"blur"}],pass:[{validator:function(e,t,r){p.isEmpty(t)?r(new Error("Please input the password")):p.minLength(6,t)?r():r(new Error("Password at least 6 characters"))},trigger:"blur"}],checkPass:[{validator:function(t,r,n){p.isEmpty(r)?n(new Error("Please input the password again")):r!==e.form.pass?n(new Error("Two inputs don't match!")):n()},trigger:"blur"}]}}},computed:b({},Object(d["b"])(["countries","isCountryDataReady"])),mounted:function(){this.$store.dispatch("countries/loadData")},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.isSubmit=!0,setTimeout((function(){t.isSubmit=!1,t.$alert("Registered successfully!","Success!",{confirmButtonText:"OK",type:"success",center:!0,showClose:!1}).then((function(e){window.location.reload()}))}),3e3)}))}}},v=y,h=(r("0f12"),r("2877")),g=Object(h["a"])(v,i,s,!1,null,"32ee9402",null),w=g.exports,O={name:"app",components:{RegisterPage:w}},P=O,j=(r("034f"),Object(h["a"])(P,o,a,!1,null,null,null)),k=j.exports,E=r("5c96"),S=r.n(E),x=r("b2d6"),_=r.n(x),R=(r("24ab"),r("f5df"),r("a481"),{countries:function(e){return e.countries.data},isCountryDataReady:function(e){return e.countries.isReady}}),D=R;n["default"].use(d["a"]);var $=r("c653"),C=$.keys().reduce((function(e,t){var r=t.replace(/^\.\/(.*)\.\w+$/,"$1"),n=$(t);return e[r]=n.default,e}),{}),T=new d["a"].Store({modules:C,getters:D}),F=T;n["default"].use(S.a,{locale:_.a,size:"medium"}),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(k)},store:F}).$mount("#app")},"64a9":function(e,t,r){},a386:function(e,t,r){},c653:function(e,t,r){var n={"./countries.js":"532d"};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="c653"}});