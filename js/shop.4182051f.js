(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"0fa5":function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-container",{attrs:{id:"shop"}},[e("v-row",t._l(t.products,(function(t){return e("v-col",{key:t._id,attrs:{cols:"12",md:"6",lg:"3"}},[e("ProductCard",{attrs:{product:t}})],1)})),1)],1)},c=[],n=e("1da1"),o=(e("96cf"),function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-card",[e("v-img",{attrs:{src:t.product.image,height:"300px"}}),e("v-card-title",[e("router-link",{attrs:{to:"/product/"+t.product._id}},[t._v(t._s(t.product.name))])],1),e("v-card-subtitle",[t._v(" "+t._s(t.product.category)+" - "+t._s("$"+t.product.price)+" ")]),e("v-card-text",{staticStyle:{},attrs:{pre:""}},[t._v(" "+t._s(t.product.description)+" ")])],1)}),u=[],d={props:{product:{type:Object,required:!0}}},s=d,i=e("2877"),p=e("6544"),l=e.n(p),v=e("b0af"),f=e("99d9"),_=e("adda"),h=Object(i["a"])(s,o,u,!1,null,null,null),m=h.exports;l()(h,{VCard:v["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VImg:_["a"]});var w={name:"Shop",components:{ProductCard:m},data:function(){return{products:[]}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var e,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.api.get("/products");case 3:e=r.sent,a=e.data,t.products=a.result,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"商品取得失敗"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},b=w,g=e("62ad"),x=e("a523"),C=e("0fd9"),V=Object(i["a"])(b,a,c,!1,null,null,null);r["default"]=V.exports;l()(V,{VCol:g["a"],VContainer:x["a"],VRow:C["a"]})}}]);
//# sourceMappingURL=shop.4182051f.js.map