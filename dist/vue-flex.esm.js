function flexClasses(n){return[(n.inline?"inline-":"")+"flex","flex-"+(n.column?"column":"row")+(n.reverse?"-reverse":""),n.wrap?"flex-wrap":null,n.noWrap?"flex-nowrap":null,n.grow?"grow-children":null,n.justify?"justify-content-"+n.justify:null,n.align?"align-items-"+n.align:null]}function boolPropFactory(n){var e={};return n.forEach(function(n){return e[n]={type:Boolean,default:!1}}),e}var SHARED=["start","end","center"],JUSTIFY_CONTENT=SHARED.concat(["between","around"]),ALIGN_ITEMS=SHARED.concat(["baseline","stretch"]),Flex={functional:!0,props:Object.assign({tag:{type:String,default:"div"},justify:{type:String,default:null,validator:function(n){return-1!==JUSTIFY_CONTENT.indexOf(n)}},align:{type:String,default:null,validator:function(n){return-1!==ALIGN_ITEMS.indexOf(n)}}},boolPropFactory(["inline","column","reverse","wrap","noWrap","grow"])),render:function(n,e){var l=e.props,t=e.data,r=e.children;return n(l.tag,Object.assign({},t,{class:[t.class,flexClasses(l)]}),r)}},index={install:function(n){n.component("Flex",Flex)}};export default index;
//# sourceMappingURL=vue-flex.esm.js.map
