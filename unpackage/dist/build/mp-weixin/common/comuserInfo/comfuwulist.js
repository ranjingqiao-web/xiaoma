(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/comuserInfo/comfuwulist"],{"1fd6":function(n,e,t){"use strict";t.r(e);var a=t("5bea"),u=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);e["default"]=u.a},2790:function(n,e,t){"use strict";var a,u=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}))},"58d8":function(n,e,t){"use strict";t.r(e);var a=t("2790"),u=t("1fd6");for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t("a023");var o,c=t("f0c5"),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"044a82ac",null,!1,a["a"],o);e["default"]=r.exports},"5bea":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-popup/uni-popup")]).then(function(){return resolve(t("ec20"))}.bind(null,t)).catch(t.oe)},u={name:"comFuWuList",props:["listitem"],components:{uniPopup:a},data:function(){return{cancelcount:0,cancelData:[{name:"价格有点贵"},{name:"时间选择有问题"},{name:"我想换一个设计师"},{name:"占时不需要了"},{name:"其它"}],heiyou:t("dc4a"),erweima:t("ef25"),dianhua:t("f360"),yes1:t("7a3a"),yd02:t("2615"),urls:"https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=2569200539,4021024536&fm=74&app=80&f=JPEG?w=200&h=200"}},created:function(){},methods:{tojumpdtail:function(n){var e="../../pagesRuZhu/youhuijuandetail/youhuijuandetail",t=n;console.log("itemitemitemitem",n),this.$navTo.togo(e,t)},onShareAppMessage:function(n){return{title:" ",path:"/pages/main/main"}},shareFriend:function(){var e=this;n.share({provider:"weixin",type:5,title:"你笑起来真好看",imageUrl:e.urls,miniProgram:{id:"gh_abcdefg",path:"pages/main/main",type:0},success:function(n){console.log("success:"+JSON.stringify(n))}})}}};e.default=u}).call(this,t("543d")["default"])},"9c2b":function(n,e,t){},a023:function(n,e,t){"use strict";var a=t("9c2b"),u=t.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'common/comuserInfo/comfuwulist-create-component',
    {
        'common/comuserInfo/comfuwulist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("58d8"))
        })
    },
    [['common/comuserInfo/comfuwulist-create-component']]
]);
