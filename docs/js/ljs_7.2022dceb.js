webpackJsonp([7],{176:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(85),s=i.n(n);e.default={name:"LjsTextAreaTest",components:{LjsTextArea:s.a},data:function(){return{}}}},199:function(t,e,i){e=t.exports=i(5)(!1),e.push([t.i,"",""])},242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("LjsTextArea")],1)},staticRenderFns:[]}},262:function(t,e,i){var n=i(199);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(20)("ff81392a",n,!0,{})},71:function(t,e,i){function n(t){i(262)}var s=i(2)(i(176),i(242),n,"data-v-95015432",null);t.exports=s.exports},80:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LjsTextArea",props:{oneLineHeight:{type:Number,default:28},manyLineHeight:{typr:Number,default:15},autoSize:{type:Boolean,default:!1},autoSelect:{type:Boolean,default:!1},value:{default:""}},computed:{column:function(){return this.$parent.column},inputStyle:{get:function(){var t={};return this.lineHeight&&(t.lineHeight=this.lineHeight+"px"),t}},trHeight:function(){return this.$parent.tr.height},trHeights:function(){return this.$parent.tr.heights}},watch:{trHeights:function(t,e){console.log("检查到tr变化"),this.resize()},value:function(t,e){this.focused||(this.currentValue=t)}},methods:{select:function(){this.$el.select()},handleClick:function(){},handleInput:function(t){this.resize(),this.$emit("input",t.target.value)},handleFocus:function(){this.focus=!0,this.autoSelect&&setTimeout(this.select,1),this.$emit("focus")},handleBlur:function(){this.focus=!1,this.$emit("blur")},resize:function(){if(this.autoSize){var t=this.$el;t.style.height="auto";var e=t.scrollHeight,i=void 0;this.trHeight>e?(i=this.trHeight,this.lineHeight=this.oneLineHeight,console.log("填满父容器完成:",i,",lineHeight:",this.lineHeight)):(this.$parent.tr.heights[this.column.index]=e,i=e,2*e/3>this.trHeight&&(this.lineHeight=this.manyLineHeight,console.log("scrollHeight:",e,",trHeight:",this.trHeight)),console.log("撑大父容器完成:",i,",lineHeight:",this.lineHeight)),t.style.height=i+"px"}else this.lineHeight=this.oneLineHeight}},data:function(){return{focused:!1,currentValue:this.value,lineHeight:this.manyLineHeight}},mounted:function(){this.resize()},updated:function(){this.resize()}}},83:function(t,e,i){e=t.exports=i(5)(!1),e.push([t.i,".ljs_input[data-v-a0efa2ba],.ljs_text[data-v-a0efa2ba],.ljs_text_area[data-v-a0efa2ba]{width:100%;border:none;outline:none;background:none;overflow:hidden;font-family:Arial,微软雅黑,serif;font-size:11px;display:flex;justify-content:center;align-items:center;color:#333;padding:0;margin:0}.ljs_text_area[data-v-a0efa2ba]{line-height:1;resize:none}",""])},85:function(t,e,i){function n(t){i(89)}var s=i(2)(i(80),i(87),n,"data-v-a0efa2ba",null);t.exports=s.exports},87:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.autoSize?i("textarea",{staticClass:"ljs_text_area",style:t.inputStyle,attrs:{rows:"1"},domProps:{value:t.currentValue},on:{input:t.handleInput,focus:t.handleFocus,click:t.handleClick,blur:t.handleBlur}}):i("input",{staticClass:"ljs_input",style:t.inputStyle,domProps:{value:t.currentValue},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,click:t.handleClick}})},staticRenderFns:[]}},89:function(t,e,i){var n=i(83);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(20)("3c6c79d4",n,!0,{})}});