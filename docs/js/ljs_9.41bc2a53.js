webpackJsonp([9],{182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(81);t.default={name:"VueRefTest",components:{Render:r.a},methods:{renderClick:function(){console.log("renderClick")},draw:function(e,t){return e("div","hi")},print:function(){console.log("input:",this.$refs.input),console.log("render:",this.$refs.render),console.log("root:",this.$refs.root)}},created:function(){}}},187:function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,"",""])},231:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"root"},[n("Render",{ref:"render",attrs:{draw:e.draw},on:{click:e.renderClick}}),e._v(" "),n("input",{attrs:{type:"button"},on:{click:e.print}})],1)},staticRenderFns:[]}},250:function(e,t,n){var r=n(187);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(20)("e330a050",r,!0,{})},75:function(e,t,n){function r(e){n(250)}var o=n(2)(n(182),n(231),r,"data-v-1cf1576e",null);e.exports=o.exports},81:function(e,t,n){"use strict";t.a={name:"Render",props:{data:{type:Object,default:void 0},column:{type:Object,default:void 0},draw:{type:Function,default:void 0},driver:{type:Object,default:void 0}},render:function(e){return this.draw(e,this)}}}});