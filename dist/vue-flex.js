!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.vueFlex=e()}(this,function(){"use strict";function n(n){var e=[];return n.inline&&e.push("inline"),e.push("flex"),"vf__"+e.join("-")}function e(n){var e=n.reverse,t=["vf__flex",n.column?"column":"row"];return e&&t.push("reverse"),t.join("-")}function t(t){return[n(t),e(t),t.wrap?"vf__flex-wrap":null,t.noWrap?"vf__flex-nowrap":null,t.grow?"vf__grow-children":null,t.justify?"vf__justify-content-"+t.justify:null,t.align?"vf__align-items-"+t.align:null]}var r=["start","end","center","between","around"],o=["start","end","center","baseline","stretch"],l={functional:!0,props:{tag:{type:String,default:"div"},inline:{type:Boolean},column:{type:Boolean},reverse:{type:Boolean},wrap:{type:Boolean},noWrap:{type:Boolean},grow:{type:Boolean},justify:{type:String,default:null,validator:function(n){return-1!==r.indexOf(n)}},align:{type:String,default:null,validator:function(n){return-1!==o.indexOf(n)}}},render:function(n,e){var r=e.props,o=e.children,l=e.data;return n(r.tag,Object.assign({},l,{class:t(r)}),o)}};return{install:function(n,e){void 0===e&&(e={}),n.component("Flex",l)}}});
//# sourceMappingURL=vue-flex.js.map
