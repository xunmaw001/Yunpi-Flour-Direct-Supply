(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-address/shop-address"],{"19bf":function(t,e,n){"use strict";n.r(e);var r=n("51eb"),a=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=a.a},"499f":function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}))},"4ade":function(t,e,n){},"51eb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,a,s,i){try{var u=t[s](i),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function u(t){s(i,r,a,u,c,"next",t)}function c(t){s(i,r,a,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{source:0,list:[],user:{}}},onLoad:function(){var e=i(r.default.mark((function e(n){var a,s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:return s=e.sent,this.user=s.data,e.next=7,this.$api.list("address",{userid:this.user.id});case 7:s=e.sent,this.list=s.data.list;case 9:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onShow:function(){var e=i(r.default.mark((function e(){var n,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:return a=e.sent,this.user=a.data,e.next=7,this.$api.list("address",{userid:this.user.id});case 7:a=e.sent,this.list=a.data.list;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onSelectTap:function(e){t.setStorageSync("address",e),t.navigateBack({delta:1})},onAddressDtailTap:function(t){var e="";e=t?"../shop-address-detail/shop-address-detail?id="+t:"../shop-address-detail/shop-address-detail?id=",this.$utils.jump(e)},onDeleteTap:function(){var e=i(r.default.mark((function e(n){var a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=this,t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=i(r.default.mark((function t(e){var s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=9;break}return t.next=3,a.$api.del("address",JSON.stringify([n]));case 3:return s=t.sent,t.next=6,a.$api.list("address",{userid:this.user.id});case 6:s=t.sent,a.list=s.data.list,a.$utils.msg("删除成功");case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()}};e.default=u}).call(this,n("543d")["default"])},"59d6":function(t,e,n){"use strict";var r=n("4ade"),a=n.n(r);a.a},"6b32":function(t,e,n){"use strict";(function(t){n("b8ea"),n("921b");r(n("66fd"));var e=r(n("95a7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"95a7":function(t,e,n){"use strict";n.r(e);var r=n("499f"),a=n("19bf");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("59d6");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports}},[["6b32","common/runtime","common/vendor"]]]);