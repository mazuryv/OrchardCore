"use strict";(self.webpackChunkorchardcore_apis_graphql=self.webpackChunkorchardcore_apis_graphql||[]).push([[739],{5739:(e,o,t)=>{t.r(o),t.d(o,{f:()=>d});var n=t(7480),r=Object.defineProperty,i=(e,o)=>r(e,"name",{value:o,configurable:!0});function f(e,o){return o.forEach((function(o){o&&"string"!=typeof o&&!Array.isArray(o)&&Object.keys(o).forEach((function(t){if("default"!==t&&!(t in e)){var n=Object.getOwnPropertyDescriptor(o,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return o[t]}})}}))})),Object.freeze(e)}i(f,"_mergeNamespaces");var a={exports:{}};!function(e){function o(o,n,f,a){if(f&&f.call){var l=f;f=null}else l=r(o,f,"rangeFinder");"number"==typeof n&&(n=e.Pos(n,0));var d=r(o,f,"minFoldSize");function u(e){var t=l(o,n);if(!t||t.to.line-t.from.line<d)return null;if("fold"===a)return t;for(var r=o.findMarksAt(t.from),i=0;i<r.length;++i)if(r[i].__isFold){if(!e)return null;t.cleared=!0,r[i].clear()}return t}i(u,"getRange");var c=u(!0);if(r(o,f,"scanUp"))for(;!c&&n.line>o.firstLine();)n=e.Pos(n.line-1,0),c=u(!1);if(c&&!c.cleared&&"unfold"!==a){var s=t(o,f,c);e.on(s,"mousedown",(function(o){p.clear(),e.e_preventDefault(o)}));var p=o.markText(c.from,c.to,{replacedWith:s,clearOnEnter:r(o,f,"clearOnEnter"),__isFold:!0});p.on("clear",(function(t,n){e.signal(o,"unfold",o,t,n)})),e.signal(o,"fold",o,c.from,c.to)}}function t(e,o,t){var n=r(e,o,"widget");if("function"==typeof n&&(n=n(t.from,t.to)),"string"==typeof n){var i=document.createTextNode(n);(n=document.createElement("span")).appendChild(i),n.className="CodeMirror-foldmarker"}else n&&(n=n.cloneNode(!0));return n}i(o,"doFold"),i(t,"makeWidget"),e.newFoldFunction=function(e,t){return function(n,r){o(n,r,{rangeFinder:e,widget:t})}},e.defineExtension("foldCode",(function(e,t,n){o(this,e,t,n)})),e.defineExtension("isFolded",(function(e){for(var o=this.findMarksAt(e),t=0;t<o.length;++t)if(o[t].__isFold)return!0})),e.commands.toggleFold=function(e){e.foldCode(e.getCursor())},e.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},e.commands.unfold=function(e){e.foldCode(e.getCursor(),{scanUp:!1},"unfold")},e.commands.foldAll=function(o){o.operation((function(){for(var t=o.firstLine(),n=o.lastLine();t<=n;t++)o.foldCode(e.Pos(t,0),{scanUp:!1},"fold")}))},e.commands.unfoldAll=function(o){o.operation((function(){for(var t=o.firstLine(),n=o.lastLine();t<=n;t++)o.foldCode(e.Pos(t,0),{scanUp:!1},"unfold")}))},e.registerHelper("fold","combine",(function(){var e=Array.prototype.slice.call(arguments,0);return function(o,t){for(var n=0;n<e.length;++n){var r=e[n](o,t);if(r)return r}}})),e.registerHelper("fold","auto",(function(e,o){for(var t=e.getHelpers(o,"fold"),n=0;n<t.length;n++){var r=t[n](e,o);if(r)return r}}));var n={rangeFinder:e.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function r(e,o,t){if(o&&void 0!==o[t])return o[t];var r=e.options.foldOptions;return r&&void 0!==r[t]?r[t]:n[t]}e.defineOption("foldOptions",null),i(r,"getOption"),e.defineExtension("foldOption",(function(e,o){return r(this,e,o)}))}(n.a.exports),function(e){e.defineOption("foldGutter",!1,(function(o,r,i){i&&i!=e.Init&&(o.clearGutter(o.state.foldGutter.options.gutter),o.state.foldGutter=null,o.off("gutterClick",u),o.off("changes",c),o.off("viewportChange",s),o.off("fold",p),o.off("unfold",p),o.off("swapDoc",c)),r&&(o.state.foldGutter=new t(n(r)),d(o),o.on("gutterClick",u),o.on("changes",c),o.on("viewportChange",s),o.on("fold",p),o.on("unfold",p),o.on("swapDoc",c))}));var o=e.Pos;function t(e){this.options=e,this.from=this.to=0}function n(e){return!0===e&&(e={}),null==e.gutter&&(e.gutter="CodeMirror-foldgutter"),null==e.indicatorOpen&&(e.indicatorOpen="CodeMirror-foldgutter-open"),null==e.indicatorFolded&&(e.indicatorFolded="CodeMirror-foldgutter-folded"),e}function r(e,t){for(var n=e.findMarks(o(t,0),o(t+1,0)),r=0;r<n.length;++r)if(n[r].__isFold){var i=n[r].find(-1);if(i&&i.line===t)return n[r]}}function f(e){if("string"==typeof e){var o=document.createElement("div");return o.className=e+" CodeMirror-guttermarker-subtle",o}return e.cloneNode(!0)}function a(e,t,n){var i=e.state.foldGutter.options,a=t-1,d=e.foldOption(i,"minFoldSize"),u=e.foldOption(i,"rangeFinder"),c="string"==typeof i.indicatorFolded&&l(i.indicatorFolded),s="string"==typeof i.indicatorOpen&&l(i.indicatorOpen);e.eachLine(t,n,(function(t){++a;var n=null,l=t.gutterMarkers;if(l&&(l=l[i.gutter]),r(e,a)){if(c&&l&&c.test(l.className))return;n=f(i.indicatorFolded)}else{var p=o(a,0),g=u&&u(e,p);if(g&&g.to.line-g.from.line>=d){if(s&&l&&s.test(l.className))return;n=f(i.indicatorOpen)}}(n||l)&&e.setGutterMarker(t,i.gutter,n)}))}function l(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function d(e){var o=e.getViewport(),t=e.state.foldGutter;t&&(e.operation((function(){a(e,o.from,o.to)})),t.from=o.from,t.to=o.to)}function u(e,t,n){var i=e.state.foldGutter;if(i){var f=i.options;if(n==f.gutter){var a=r(e,t);a?a.clear():e.foldCode(o(t,0),f)}}}function c(e){var o=e.state.foldGutter;if(o){var t=o.options;o.from=o.to=0,clearTimeout(o.changeUpdate),o.changeUpdate=setTimeout((function(){d(e)}),t.foldOnChangeTimeSpan||600)}}function s(e){var o=e.state.foldGutter;if(o){var t=o.options;clearTimeout(o.changeUpdate),o.changeUpdate=setTimeout((function(){var t=e.getViewport();o.from==o.to||t.from-o.to>20||o.from-t.to>20?d(e):e.operation((function(){t.from<o.from&&(a(e,t.from,o.from),o.from=t.from),t.to>o.to&&(a(e,o.to,t.to),o.to=t.to)}))}),t.updateViewportTimeSpan||400)}}function p(e,o){var t=e.state.foldGutter;if(t){var n=o.line;n>=t.from&&n<t.to&&a(e,n,n+1)}}i(t,"State"),i(n,"parseOptions"),i(r,"isFolded"),i(f,"marker"),i(a,"updateFoldInfo"),i(l,"classTest"),i(d,"updateInViewport"),i(u,"onGutterClick"),i(c,"onChange"),i(s,"onViewportChange"),i(p,"onFold")}(n.a.exports);var l=a.exports,d=Object.freeze(f({__proto__:null,[Symbol.toStringTag]:"Module",default:l},[a.exports]))}}]);