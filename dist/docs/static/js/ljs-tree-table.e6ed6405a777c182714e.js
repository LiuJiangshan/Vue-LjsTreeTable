webpackJsonp([2],{117:function(t,e,n){var i=n(0)(n(202),n(373),null,null,null);t.exports=i.exports},118:function(t,e,n){function i(t){n(289)}var o=n(0)(n(204),n(377),i,"data-v-149a52d0",null);t.exports=o.exports},119:function(t,e,n){var i=n(0)(n(205),n(402),null,null,null);t.exports=i.exports},120:function(t,e,n){function i(t){n(300)}var o=n(0)(n(210),n(391),i,"data-v-67798f68",null);t.exports=o.exports},122:function(t,e,n){"use strict";function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{debug:!1},i=function(t){n.debug&&console.log(t)};if(t.install.installed)i(t.name+">已经安装😂");else{i("开始注册组件库>"+t.name);for(var o in t.components){var s=t.components[o];s.name?(e.component(s.name,s),i("注册完成👌>"+s.name)):i("为定义名称,不能组册该组件😂>"+s)}t.install.installed=!0}}e.a=i},123:function(t,e,n){"use strict";var i=n(21),o=n.n(i);e.a=o.a},124:function(t,e,n){"use strict";var i=n(117),o=n.n(i),s=n(2),a=n(82);o.a.rightMenu=function(t,e){var n=e.x,i=e.y;o.a.removeMenu();var a=new s.default({render:function(e){return e(o.a,{props:{x:n,y:i,items:t}})}});window.nowMenu=a.$mount(),document.body.appendChild(window.nowMenu.$el)},o.a.removeMenu=a.a,e.a=o.a},13:function(t,e,n){"use strict";var i=n(24),o=n.n(i),s=n(45),a=n.n(s),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o()(this,t),this.expandVal=!1,this.checkVal=!1,this.data=void 0,this.parent=void 0,this.loading=!1,this.store=void 0,this.dataType=void 0,this.childs=void 0,this.isLeaf=void 0,this.level=0;for(var n in e)e.hasOwnProperty(n)&&(this[n]=e[n]);if(!this.store&&e.parent&&e.parent.store&&(this.store=e.parent.store),!this.store)throw new Error("store can't null");!this.level&&this.parent&&(this.level=this.parent.level+1),void 0===this.isLeaf&&(this.isLeaf=!this.isRoot()&&this.store.isLeaf(this)),this.checkBubble=!0}return a()(t,[{key:"setDataType",value:function(t){return this.dataType=t,this}},{key:"isRoot",value:function(){return!this.parent}},{key:"halfCheck",value:function(){this.check=void 0}},{key:"isEmpty",value:function(){return!this.childs||0===this.childs.length}},{key:"allChildCheck",value:function(){for(var t=this.childs[0].check,e=0;e<this.childs.length;e++){if(this.childs[e].check!==t){t=void 0;break}}return t}},{key:"onParentCheckChanged",value:function(){!0!==this.parent.check&&!1!==this.parent.check||(this.checkBubble=!1,this.check=this.parent.check,this.checkBubble=!0)}},{key:"onChildCheckChanged",value:function(){var t=this.allChildCheck();t!==this.check&&(this.check=t)}},{key:"setParent",value:function(t){return this.parent=t,this.level=t.level?t.level+1:1,this.parent.childs||(this.parent.childs=[]),this.parent.childs.push(this),this}},{key:"switchExpand",value:function(){return this.setExpand(!this.expand)}},{key:"setExpand",value:function(t){return this.childs?this.expand!==t&&(this.expand=t):this.load(),this}},{key:"setCheck",value:function(t){return this.check!==t&&(this.check=t),this}},{key:"setLoader",value:function(t){return this.loader=t,this}},{key:"onCheckChanged",value:function(t){this.getExpandNodes().forEach(function(e){return e.setCheck(t)})}},{key:"load",value:function(){var e=this;this.loading=!0,this.childs=[],this.setExpand(!0),this.store.treeLoader.load({onLoad:function(n){n.forEach(function(n){return e.childs.push(new t({data:n,parent:e,store:e.store,check:e.check}))})},onError:function(t){},onEnd:function(){setTimeout(function(){e.loading=!1},100)}},this)}},{key:"childAt",value:function(t){return this.childs[t]}},{key:"indexOfParent",value:function(){return this.parent.childs.indexOf(this)}},{key:"remove",value:function(){var t=this.indexOfParent();-1!==t&&this.parent.childs.splice(t,1)}},{key:"insert",value:function(t){}},{key:"getCheckedNode",value:function(){var t=[];return!0===this.check&&t.push(this),this.childs&&this.childs.forEach(function(e){return e.getCheckedNode().forEach(function(e){return t.push(e)})}),t}},{key:"expand",set:function(t){this.expandVal=t,this.childs||this.load()},get:function(){return this.expandVal}},{key:"check",set:function(t){this.checkVal=t,this.childs&&this.childs.forEach(function(t){return t.onParentCheckChanged()}),this.checkBubble&&this.parent&&this.parent.onChildCheckChanged()},get:function(){return this.checkVal}}]),t}();e.a=r},200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(117),o=n.n(i),s=n(366),a=n.n(s),r=n(363),u=n.n(r),c=n(362),l=n.n(c),h=n(118),d=n.n(h),f=n(13),p=n(81),m=n(69),v=n.n(m),y=n(408),b=n(32),g=n(23);e.default={name:"ljs-tree-table",directives:{resize:v.a,scroll:y.a},components:{MEditTd:d.a,MTableFix:l.a,MTbody:u.a,MThead:a.a,MContextMenu:o.a},props:{dataTypeField:{type:String,default:"pojo"},rootLoader:{type:p.a},treeLoader:{type:p.a},treeUpdater:{type:p.a},menuGetter:{type:Function},isLeaf:{type:Function},childCountField:{type:String},customCountField:{type:String},driver:{type:Object,default:function(){return{}}},rightMenu:{type:Object,default:function(){return{}}},columns:{type:Array,default:function(){return[]}},onExpand:{type:Function,default:function(t,e){e()}},onClose:{type:Function,default:function(t,e){e()}},isRoot:{type:Function,default:function(t){return t&&!1===t.father}},debug:{type:Boolean,default:!1},border:{type:Boolean,default:!0},trBorder:{type:Boolean,default:!1},fixLeft:{type:Boolean,default:!1},fixRight:{type:Boolean,default:!1},headHeight:{type:Number,default:30},nullString:{default:""},deepWidth:{type:Number,default:19},lineHeight:{type:Number,default:28}},computed:{trBorderColor:function(){return"#E4E4E4"},borderColor:function(){return this.border?"#E4E4E4":"transparent"},thisTable:{get:function(){return this}},bodyColumns:function(){var t=this.fixLeft?1:0,e=this.fixRight?this.columns.length-2:this.columns.length-1;return this.columns.slice(t,e)},leftColumns:{get:function(){return[this.columns[0]]}},rightColumns:{get:function(){return[this.columns[this.columns.length-1]]}},leftFixWidth:{get:function(){var t=0;return this.leftColumns.forEach(function(e){t+=e.width}),t}},rightFixWidth:{get:function(){var t=0;return this.rightColumns.forEach(function(e){t+=e.width}),t}}},data:function(){var t=new g.a(this.$props);return{width:0,height:0,treeStore:t,rootNode:new f.a({store:t,expand:!0}),columnList:new b.a(this.columns),expandDatas:[],focusTd:void 0,fixLeftShow:!0,fixRightShow:!0,canMove:!0,submitTypes:{add:"add",remove:"remove",update:"update"},scrollTop:0}},methods:{onScroll:function(){this.$refs.tableHeader.$el.style.transform="translateY("+this.$el.scrollTop+"px)"},getSubmitData:function(){return this.getAllData(this.datas,!1,!0)},matchType:function(t,e){return!t.dataType||t.dataType.search("^"+e.pojo+"$")>=0||t.dataType.search("!^|"+e.pojo+"|!$")>=0||t.dataType.search("^"+e.pojo+"|!$")>=0||t.dataType.search("!^|"+e.pojo+"$")>=0},setExpand:function(t,e){var n=this;t.setExpand(e),t.childs||this.treeLoader.load({onLoad:function(e){var n=this;e.forEach(function(e){return f.a.Builder({data:e,parent:t,dataType:e[n.dataTypeField]})})},onError:function(){},onEnd:function(){n.rootLoader=n.rootLoader}},t)},showRightMenu:function(){console.log(this.rightMenu)},showColunm:function(){console.log(this.columns)},showLeftFixColumn:function(){console.log(this.leftColumns)},showBodyColumn:function(){console.log(this.bodyColumns)},showRightColumn:function(){console.log(this.rightColumns)},showRefs:function(){console.log(this.$refs,this.$refs.treetable.clientWidth,this.width)},showSubmitData:function(){console.log(this.getSubmitData())},nowFocus:function(){console.log(this.focusTd.data,this.focusTd.column)},printDatas:function(){console.log(this.datas)},printColumns:function(){console.log(this.columns)},printFormated:function(){console.log(this.expandDatas)},bindTr:function(t){t.node.tr=t},bindTd:function(t){t.tr.tds||(t.tr.tds=[]),t.tr.tds[t.index]=t},move:function(t,e){if(!this.canMove)return void console.log("can not move");if(!this.focusTd)return console.log("未获取焦点"),!1;var n=this.focusTd.x,i=this.focusTd.y,o=n+t,s=i+e;if(!(s>=0&&s<this.expandDatas.length&&o>=0&&o<this.columns.length))return console.log("超出边界",o,s),!1;var a=this.expandDatas[s].tr.tds[o];this.focusTd&&this.focusTd.blur(),a&&a.focus()},up:function(){this.move(0,-1)},down:function(){this.move(0,1)},left:function(){this.move(-1,0)},right:function(){this.move(1,0)},onReSize:function(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},loadRoot:function(){var t=this;this.rootLoader.load({onLoad:function(e){t.rootNode.childs=[],e.forEach(function(e){return f.a.Builder({data:e,parent:t.rootNode,dataType:e[t.dataTypeField]})})},onError:function(t){},onEnd:function(){}})}},created:function(){},mounted:function(){window.ljsTreeTable=this,this.onReSize(),this.onScroll()}}},201:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42),o=n(73),s=n(133),a=n(74);n.n(a);i.library.add(o.a,s.a,o.b),e.default={name:"m-check-box",components:{FontAwesomeIcon:a.FontAwesomeIcon},props:{value:{type:Boolean}},data:function(){return{check:this.value}},watch:{value:function(t){t!==this.check&&(this.check=t)}},computed:{icon:function(){return!0===this.check?["fas","check-square"]:!1===this.check?["far","square"]:["fas","minus-square"]},imageStyle:{get:function(){return{visibility:this.show?"visible":"hidden"}}}},methods:{handClick:function(){this.check=!this.check,this.$emit("input",this.check),this.$emit("check-changed",this.check)}}}},202:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(339),o=n.n(i),s=n(82);e.default={name:"m-context-menu",props:{x:{type:Number,default:0},y:{type:Number,default:0},items:{type:Array,default:function(){return[{label:"选项为空",click:function(){}}]}}},directives:{ClickOutside:o.a},computed:{menuStyle:function(){return{top:this.y+"px",left:this.x+"px"}}},methods:{close:function(){n.i(s.a)()}}}},203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"m-deep",props:{value:{type:Number}},computed:{deepWidth:{get:function(){return 15*this.value}},deepStyle:{get:function(){return{width:this.deepWidth+"px"}}}}}},204:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(214),o=n.n(i),s=n(364),a=n.n(s),r=n(44),u=n(120),c=n.n(u),l=n(13),h=n(31),d=n(23),f={normal:0,select:1,lock:2};e.default={name:"m-edit-td",components:{MTextArea:c.a,MRender:r.a,MTdHead:a.a},props:{trHeight:{type:Number},index:{type:Number},tr:{type:Object},table:{type:Object},node:{type:l.a},column:{type:h.a},treeStore:{type:d.a}},watch:{state:function(){switch(this.state){case f.normal:case f.select:break;case f.lock:this.table.canMove=!1}}},computed:{treeUpdater:function(){return this.table.treeUpdater},data:function(){return this.node.data},canSelection:function(){return this.column.type&&-1!==this.column.type.indexOf("selection")},inputStyle:function(){var t={};return t.width=this.bodyWidth+"px",this.column.autoLine||(t.height=this.table.lineHeight+"px",t.overflow="hidden"),t},debug:{get:function(){return this.table.debug}},driver:{get:function(){return this.table.driver}},x:{get:function(){return this.index}},y:{get:function(){return this.tr.index}},bodyWidth:{get:function(){return this.column.width-this.headWidth}},headWidth:{get:function(){var t=this.$refs.tdHead;return this.isMounted&&t?t.width:0}},tdClass:{get:function(){var t={select:!1,lock:!1};switch(this.state){case f.normal:break;case f.select:t.select=!0;break;case f.lock:t.lock=!0}return t}},focusTd:{get:function(){return this.table.focusTd}},match:function(){return this.column.matchNode(this.node)},value:{get:function(){var t="";if(this.match)switch(this.state){case f.normal:var e=this.column.text;t=e instanceof Function?e(this.data,this.column):void 0!==this.data[this.column.key]?this.data[this.column.key]:this.table.nullString;break;case f.select:case f.lock:void 0!==this.data[this.column.key]&&(t=this.data[this.column.key])}return t},set:function(t){!1!==this.column.edit&&this.match&&(this.data[this.column.key]=t)}}},methods:{onRightMenuClick:function(t){var e=this.table.menuGetter({node:this.node,column:this.column});e&&this.$menu.rightMenu(e,t)},handleInput:function(){this.column.render||(this.input=!0)},getState:function(){switch(this.state){case f.normal:return"normal";case f.lock:return"lock";case f.select:return"select"}},getThis:function(){return this},handleFocus:function(){this.focusTd&&(this.focusTd.state=f.normal),this.table.focusTd=this,this.input=!1,this.state=f.select},handleBlur:function(){this.state=f.normal,this.data.submitType!==this.table.submitTypes.add&&(this.data.submitType=this.table.submitTypes.update),this.input&&(this.column.render||!1===this.column.edit||this.match&&this.treeUpdater&&this.treeUpdater.load({onLoad:function(t){},onError:function(t){},onEnd:function(){}},{node:this.node,column:this.column})),this.input=!1},handleEnter:function(t){t.ctrlKey&&(this.table.canMove=!0,this.table.down())},handleDbClick:function(){this.state=f.lock},handleClick:function(){this.focusTd&&(this.focusTd.state=f.normal),this.table.focusTd=this,this.input=!1,this.state=f.select,this.match&&!1!==this.column.edit&&this.$refs.input.$el.focus()},blur:function(){this.state=f.normal,this.column.render&&(this.state=f.normal)},isFocusNode:function(t){var e=!1;if(t){var n=t.nodeName;e="A"===n||"INPUT"===n&&"hidden"!==t.attributes.getNamedItem("type")}return e},getFocusNode:function(t){if(t&&t.childElementCount>0){var e=t.childNodes,n=!0,i=!1,s=void 0;try{for(var a,r=o()(e);!(n=(a=r.next()).done);n=!0){var u=a.value;if(this.isFocusNode(u))return u;var c=this.getFocusNode(u);if(c)return c}}catch(t){i=!0,s=t}finally{try{!n&&r.return&&r.return()}finally{if(i)throw s}}}},focus:function(){var t=this.$refs.tdWarp;if(this.match)if(!1===this.column.edit)t.focus();else if(this.column.render)if(window.$){var e=window.$(t).find(":focusable");e&&(t.focus(),e.focus())}else console.error("请添加jQuery、jQuery-Ui,否则不能对自定义组件设置焦点");else this.$refs.input.$el.focus();else t.focus()}},data:function(){return{isMounted:!1,state:f.normal,input:!1}},mounted:function(){this.isMounted=!0,this.table.bindTd(this)},updated:function(){this.table.bindTd(this)}}},205:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42),o=n(73),s=n(74);n.n(s);i.library.add(o.b,o.c,o.d),e.default={name:"m-check-expand",components:{FontAwesomeIcon:s.FontAwesomeIcon},props:{loading:{type:Boolean,default:!1},value:{type:Boolean}},data:function(){return{check:this.value,showLoading:this.loading}},watch:{value:function(t){t!==this.check&&(this.check=t)},loading:function(t){t!==this.showLoading&&(this.showLoading=t)}},computed:{icon:function(){return this.check?["fas","minus-square"]:["fas","plus-square"]},imageStyle:{get:function(){return{visibility:this.show?"visible":"hidden"}}}},methods:{handClick:function(){this.check=!this.check,this.$emit("input",this.check)}}}},207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"m-table-fix",props:{fixType:{type:String}}}},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(367),o=n.n(i),s=n(32),a=n(44),r=n(23),u=n(69),c=n.n(u);e.default={components:{MRender:a.a,MTr:o.a},directives:{resize:c.a},props:{table:{type:Object},nodes:{type:Array},fix:{type:Boolean},header:{type:Object},columnList:{type:s.a},treeStore:{type:r.a}},name:"m-tbody",computed:{warpStyle:function(){return{paddingTop:this.table.headHeight+"px",height:"calc(100%-"+this.table.headHeight+"px)"}}},methods:{onReSize:function(){console.log("resize")},renderTbody:function(t){return t("tbody",this.renderTr(t,this.nodes,0))},renderTr:function(t,e,n){var i=this,s=[];return e&&e.forEach(function(e){s.push(t(o.a,{props:{columnList:i.columnList,node:e,table:i.table,treeStore:i.treeStore}})),e.expand&&i.renderTr(t,e.childs,n++).forEach(function(t){return s.push(t)})}),s},onRightMenuClick:function(t){this.$menu.rightMenu(this.table.emptyMenus,t)}}}},209:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(360),o=n.n(i),s=n(119),a=n.n(s),r=n(41),u=n.n(r),c=n(13),l=n(69),h=n.n(l),d=n(31),f=n(23);e.default={name:"m-td-head",components:{MCheckBox:u.a,MExpand:a.a,MDeep:o.a},directives:{resize:h.a},props:{td:{type:Object},node:{type:c.a},column:{type:d.a},treeStore:{type:f.a}},computed:{childCount:function(){return this.node.isEmpty()?this.treeStore.childCountField?this.node.data[this.treeStore.childCountField]:void 0:this.node.childs.length},customCount:function(){if(this.treeStore.customCountField)return this.node.data[this.treeStore.customCountField]},canExpand:function(){return this.column.type&&-1!==this.column.type.indexOf("expand")},canSelection:function(){return this.column.type&&-1!==this.column.type.indexOf("selection")},table:{get:function(){return this.td.tr.table}},data:function(){return this.node.data}},methods:{onReSize:function(){this.width=this.$el.clientWidth}},data:function(){return{width:0,expand:!1}},mounted:function(){this.onReSize()}}},21:function(t,e,n){function i(t){n(297)}var o=n(0)(n(200),n(388),i,"data-v-55227810",null);t.exports=o.exports},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"m-text-area",props:{oneLineHeight:{type:Number,default:28},manyLineHeight:{typr:Number,default:15},autoSize:{type:Boolean,default:!1},autoSelect:{type:Boolean,default:!1},value:{default:""}},computed:{column:function(){return this.$parent.column},inputStyle:{get:function(){var t={};return this.lineHeight&&(t.lineHeight=this.lineHeight+"px"),t}},trHeight:function(){return this.$parent.tr.height},trHeights:function(){return this.$parent.tr.heights}},watch:{trHeights:function(t,e){console.log("检查到tr变化"),this.resize()},value:function(t,e){this.focused||(this.currentValue=t)}},methods:{select:function(){this.$el.select()},handleClick:function(){},handleInput:function(t){this.resize(),this.$emit("input",t.target.value)},handleFocus:function(){this.focus=!0,this.autoSelect&&setTimeout(this.select,1),this.$emit("focus")},handleBlur:function(){this.focus=!1,this.$emit("blur")},resize:function(){if(this.autoSize){var t=this.$el;t.style.height="auto";var e=t.scrollHeight,n=void 0;this.trHeight>e?(n=this.trHeight,this.lineHeight=this.oneLineHeight,console.log("填满父容器完成:",n,",lineHeight:",this.lineHeight)):(this.$parent.tr.heights[this.column.index]=e,n=e,2*e/3>this.trHeight&&(this.lineHeight=this.manyLineHeight,console.log("scrollHeight:",e,",trHeight:",this.trHeight)),console.log("撑大父容器完成:",n,",lineHeight:",this.lineHeight)),t.style.height=n+"px"}else this.lineHeight=this.oneLineHeight}},data:function(){return{focused:!1,currentValue:this.value,lineHeight:this.manyLineHeight}},mounted:function(){this.resize()},updated:function(){this.resize()}}},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(41),o=n.n(i),s=n(31),a=n(13);e.default={name:"m-th",components:{MCheckBox:o.a},props:{table:{type:Object},column:{type:s.a},rootNode:{type:a.a}},computed:{},methods:{},data:function(){return{checkAll:!1}}}},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(216),o=n.n(i),s=n(41),a=n.n(s),r=n(365),u=n.n(r),c=n(32),l=n(13);e.default={name:"m-thead",components:{MTh:u.a,LjsCheckBox:a.a},props:{rootNode:{type:l.a},table:{type:Object},columnList:{type:c.a}},data:function(){return{x:0,resizeColumn:void 0}},methods:{onCheckChange:function(t){this.table.checkAll(t)},mouseDown:function(t,e){!1!==e.resize&&(this.resizeColumn=e,this.x=t.x)},mouseUp:function(){this.resizeColumn=void 0},mouseMove:function(t){if(this.resizeColumn){var e=t.x,n=e-this.x;n=o()(n),this.x=e;var i=this.resizeColumn.width+n;i<20&&(i=20),n<0&&this.fullWidth-this.width+1<Math.abs(n)?console.log("不能缩小"):this.resizeColumn.width=i}}}}},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),o=n(118),s=n.n(o),a=n(32),r=n(23);e.default={name:"m-tr",components:{MEditTd:s.a},props:{index:{type:Number},node:{type:i.a},columnList:{type:a.a},table:{type:Object},treeStore:{type:r.a}},methods:{getThis:function(){return this}},computed:{height:function(){var t=0;for(var e in this.heights)e>t&&(t=e);return 0===t&&(t=this.lineHeight),t}},data:function(){return{lineHeight:this.table.lineHeight,heights:{}}},mounted:function(){this.table.bindTr(this)},updated:function(){this.table.bindTr(this)}}},23:function(t,e,n){"use strict";var i=n(24),o=n.n(i),s=function t(e){o()(this,t),this.treeLoader=void 0,this.dataTypeField=void 0,this.isLeaf=void 0;for(var n in e)e.hasOwnProperty(n)&&(this[n]=e[n]);if(!this.isLeaf)throw new Error("isLeaf can't null")};e.a=s},283:function(t,e){},287:function(t,e){},288:function(t,e){},289:function(t,e){},295:function(t,e){},297:function(t,e){},300:function(t,e){},306:function(t,e){},309:function(t,e){},31:function(t,e,n){"use strict";var i=n(24),o=n.n(i),s=n(45),a=n.n(s),r=80,u=function(){function t(e){o()(this,t),this.data=e,this.minWidth=this.data.minWidth?this.data.minWidth:r,this.width=this.data.width?this.data.width:this.minWidth,this.render=e.render,this.autoLine=e.autoLine,this.key=e.key,this.label=e.label,this.dataType=e.dataType,this.check=void 0,this.allowExpand=this.data.type&&"expand"===this.data.type,this.allowSelection=this.data.type&&"selection"===this.data.type,this.allowEdit=!this.allowExpand&&!this.allowSelection}return a()(t,[{key:"matchNode",value:function(t){var e=this.dataType,n=t.dataType;return!this.dataType||e.search("^"+n+"$")>=0||e.search("!^|"+n+"|!$")>=0||e.search("^"+n+"|!$")>=0||e.search("!^|"+n+"$")>=0}}]),t}();e.a=u},314:function(t,e){},32:function(t,e,n){"use strict";var i=n(24),o=n.n(i),s=n(31),a=function t(e){var n=this;if(o()(this,t),this.data=e,this.columns=[],this.data.forEach(function(t){return n.columns.push(new s.a(t))}),!this.columns)throw new Error("column can't null")};e.a=a},360:function(t,e,n){function i(t){n(314)}var o=n(0)(n(203),n(406),i,"data-v-fe904f20",null);t.exports=o.exports},362:function(t,e,n){function i(t){n(283)}var o=n(0)(n(207),n(370),i,"data-v-00831ac4",null);t.exports=o.exports},363:function(t,e,n){function i(t){n(287)}var o=n(0)(n(208),n(375),i,"data-v-13bf27c4",null);t.exports=o.exports},364:function(t,e,n){function i(t){n(306)}var o=n(0)(n(209),n(397),i,"data-v-880fe7a8",null);t.exports=o.exports},365:function(t,e,n){function i(t){n(288)}var o=n(0)(n(211),n(376),i,"data-v-146ef6b0",null);t.exports=o.exports},366:function(t,e,n){function i(t){n(295)}var o=n(0)(n(212),n(386),i,"data-v-42ba4ecc",null);t.exports=o.exports},367:function(t,e,n){function i(t){n(309)}var o=n(0)(n(213),n(400),i,"data-v-c04b6620",null);t.exports=o.exports},370:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.fixType+"Fix"},[t._t("default")],2)},staticRenderFns:[]}},373:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"m-context-menu",style:t.menuStyle,on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.close(e)}}},t._l(t.items,function(e,i){return n("div",{key:i,staticClass:"item",domProps:{innerHTML:t._s(e.label)},on:{click:function(t){t.preventDefault(),e.click&&e.click()}}})}))},staticRenderFns:[]}},375:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-body-warp",style:t.warpStyle},[t.nodes&&t.nodes.length>0?n("table",{attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[n("colgroup",t._l(t.columnList.columns,function(t,e){return n("col",{key:e,attrs:{width:t.width}})})),t._v(" "),n("m-render",{attrs:{render:t.renderTbody}})],1):n("div",{ref:"tableEmpty",staticClass:"table-empty",on:{contextmenu:function(e){e.preventDefault(),e.stopPropagation(),t.onRightMenuClick(e)}}},[t.fix?t._e():n("span",{domProps:{innerHTML:t._s("暂无数据")}})])])},staticRenderFns:[]}},376:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{staticClass:"m-th",class:{resizeable:t.column.resize}},[n("div",{staticClass:"m-th-wrap"},[t.column.allowSelection?n("m-check-box",{model:{value:t.rootNode.check,callback:function(e){t.$set(t.rootNode,"check",e)},expression:"rootNode.check"}}):t.column.allowExpand?void 0:[t._v(t._s(t.column.label))]],2)])},staticRenderFns:[]}},377:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{class:t.tdClass,attrs:{height:t.trHeight},on:{contextmenu:function(e){e.preventDefault(),e.stopPropagation(),t.onRightMenuClick(e)},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleEnter(e):null},click:t.handleClick,dblclick:t.handleDbClick}},[n("div",{ref:"tdWarp",staticClass:"td-warp",attrs:{tabindex:"0"},on:{focus:t.handleFocus,blur:t.handleBlur}},[n("m-td-head",{ref:"tdHead",staticClass:"td-head-style",attrs:{column:t.column,node:t.node,"tree-store":t.treeStore,td:t.getThis()}}),t._v(" "),t.match&&t.column.allowEdit?[t.debug?n("div",{staticStyle:{color:"red","font-size":"xx-small"},domProps:{innerHTML:t._s(t.getState()+t.value)}}):t._e(),t._v(" "),t.column.render?n("m-render",{ref:"input",staticClass:"custom-render-style",attrs:{render:t.column.render,ctx:{node:t.node,column:t.column}}}):n("m-text-area",{ref:"input",staticClass:"text-area-style",attrs:{"auto-size":this.column.autoLine,"auto-select":!0,"one-line-height":t.tr.table.lineHeight,disabled:!t.column.allowEdit},on:{blur:t.handleBlur,focus:t.handleFocus,input:t.handleInput},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]:t._e()],2)])},staticRenderFns:[]}},381:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-check-box"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon},on:{click:function(e){return e.stopPropagation(),t.handClick(e)}}})],1)},staticRenderFns:[]}},386:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"header",staticClass:"m-thead",style:{height:t.table.headHeight+"px"}},[n("table",{attrs:{border:"1"},on:{mouseup:t.mouseUp,mouseleave:t.mouseUp,mousemove:function(e){t.mouseMove(e)}}},[n("colgroup",t._l(t.columnList.columns,function(t,e){return n("col",{key:e,attrs:{width:t.width,index:e}})})),t._v(" "),n("thead",[n("tr",t._l(t.columnList.columns,function(e,i){return n("m-th",{key:i,attrs:{height:t.table.headHeight,table:t.table,"root-node":t.rootNode,column:e},on:{mousedown:function(n){t.mouseDown(n,e)}}})}))])])])},staticRenderFns:[]}},388:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onReSize,expression:"onReSize"}],ref:"treetable",staticClass:"ljs-tree-table",attrs:{component:"LjsTreeTable",author:"LiuJiangshan",github:"https://github.com/LiuJiangshan/LjsTreeTable"},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.up(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.down(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:t.left(e):null},function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?"button"in e&&2!==e.button?null:t.right(e):null}],scroll:t.onScroll}},[t.debug?n("div",{staticStyle:{position:"absolute",border:"1px red solid","font-size":"xx-small",color:"red",right:"0",bottom:"50px"}},[n("div",{domProps:{innerHTML:t._s("width:"+t.width)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s("canMove:"+t.canMove)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.focusTd?"x:"+this.focusTd.x+",y:"+this.focusTd.y:"no focus")}})]):t._e(),t._v(" "),n("m-tbody",{attrs:{table:t.thisTable,header:t.$refs.header,width:t.width,"column-list":t.columnList,nodes:t.rootNode.childs,"tree-store":t.treeStore}}),t._v(" "),n("m-thead",{ref:"tableHeader",attrs:{table:t.thisTable,"column-list":t.columnList,width:t.width,"root-node":t.rootNode}}),t._v(" "),t.debug?n("div",{staticStyle:{position:"absolute",bottom:"0",left:"0",border:"1px red solid"}},[n("input",{attrs:{type:"button",value:"原始数据"},on:{click:t.printDatas}}),t._v(" "),n("input",{attrs:{type:"button",value:"列定义"},on:{click:t.printColumns}}),t._v(" "),n("input",{attrs:{type:"button",value:"转换后的数据"},on:{click:t.printFormated}}),t._v(" "),n("input",{attrs:{type:"button",value:"重新格式化数据"},on:{click:function(e){t.formatNode(t.datas)}}}),t._v(" "),n("input",{attrs:{type:"button",value:"刷新"},on:{click:t.refresh}}),t._v(" "),n("input",{attrs:{type:"button",value:"当前焦点行"},on:{click:t.nowFocus}}),t._v(" "),n("input",{attrs:{type:"button",value:"全选"},on:{click:t.selectAll}}),t._v(" "),n("input",{attrs:{type:"button",value:"查看右键菜单定义"},on:{click:t.showRightMenu}}),t._v(" "),n("input",{attrs:{type:"button",value:"查看列定义"},on:{click:t.showColunm}}),t._v(" "),n("input",{attrs:{type:"button",value:"查看左边固定列定义"},on:{click:t.showLeftFixColumn}}),t._v(" "),n("input",{attrs:{type:"button",value:"查看中间列定义"},on:{click:t.showBodyColumn}}),t._v(" "),n("input",{attrs:{type:"button",value:"查看右边列定义"},on:{click:t.showRightColumn}}),t._v(" "),n("input",{attrs:{type:"button",value:(t.fixLeftShow?"隐藏":"显示")+"左边固定列"},on:{click:function(e){t.fixLeftShow=!t.fixLeftShow}}}),t._v(" "),n("input",{attrs:{type:"button",value:(t.fixRightShow?"隐藏":"显示")+"右边边固定列"},on:{click:function(e){t.fixRightShow=!t.fixRightShow}}}),t._v(" "),n("input",{attrs:{type:"button",value:"show $Refs"},on:{click:t.showRefs}}),t._v(" "),n("input",{attrs:{type:"button",value:"getSubmitData"},on:{click:t.showSubmitData}})]):t._e()],1)},staticRenderFns:[]}},391:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.autoSize?n("textarea",{staticClass:"ljs_text_area",style:t.inputStyle,attrs:{rows:"1"},domProps:{value:t.currentValue},on:{input:t.handleInput,focus:t.handleFocus,click:t.handleClick,blur:t.handleBlur}}):n("input",{staticClass:"ljs_input",style:t.inputStyle,domProps:{value:t.currentValue},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,click:t.handleClick}})},staticRenderFns:[]}},397:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onReSize,expression:"onReSize"}],ref:"mTdHead",staticClass:"m-td-head"},[t.column.allowExpand?[n("m-deep",{attrs:{value:t.node.level}}),t._v(" "),0!==t.childCount?n("m-expand",{attrs:{loading:t.node.loading},model:{value:t.node.expand,callback:function(e){t.$set(t.node,"expand",e)},expression:"node.expand"}}):t._e(),t._v(" "),t.childCount?n("div",[t._v("\n      "+t._s("("+t.childCount+")")+"\n    ")]):t._e(),t._v(" "),t.customCount?n("div",[t._v("\n      "+t._s("("+t.customCount+")")+"\n    ")]):t._e()]:t.column.allowSelection?n("m-check-box",{model:{value:t.node.check,callback:function(e){t.$set(t.node,"check",e)},expression:"node.check"}}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},400:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"tr",attrs:{tabindex:"0"}},t._l(t.columnList.columns,function(e,i){return n("m-edit-td",{key:i,ref:"td"+i,refInFor:!0,attrs:{index:i,node:t.node,column:e,table:t.table,"tree-store":t.treeStore,tr:t.getThis()}})}))},staticRenderFns:[]}},402:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-expand"},[t.showLoading?n("font-awesome-icon",{staticClass:"rotate-animation",attrs:{icon:["fas","spinner"]}}):n("font-awesome-icon",{attrs:{icon:t.icon},on:{click:function(e){return e.stopPropagation(),t.handClick(e)}}})],1)},staticRenderFns:[]}},406:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"deep",style:t.deepStyle},[t._t("default")],2)},staticRenderFns:[]}},41:function(t,e,n){var i=n(0)(n(201),n(381),null,null,null);t.exports=i.exports},44:function(t,e,n){"use strict";e.a={name:"m-render",props:{ctx:{type:Object},render:{type:Function,default:void 0}},render:function(t){return this.$props.render(t,this.ctx)}}},70:function(t,e,n){"use strict";function i(t,e){n.i(a.a)(l,t,e),t.prototype.$menu=u.a}Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),s=n.n(o),a=n(122),r=n(123),u=n(124),c={ljsTreeTable:r.a},l=void 0;"undefined"!=typeof window&&window.Vue&&i(window.Vue),e.default=l=s()({name:"ljs-tree-table",install:i,version:0},c,{components:c})},81:function(t,e,n){"use strict";var i=n(24),o=n.n(i),s=n(45),a=n.n(s),r=function(){function t(e){o()(this,t),this.load=e}return a()(t,[{key:"load",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments[1]}}]),t}();e.a=r},82:function(t,e,n){"use strict";function i(){window.nowMenu&&(document.body.removeChild(window.nowMenu.$el),window.nowMenu=void 0)}e.a=i}},[70]);
//# sourceMappingURL=ljs-tree-table.e6ed6405a777c182714e.js.map