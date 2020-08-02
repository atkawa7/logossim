!function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://renato-bohler.github.io/logossim/",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){u=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(u)throw o}}return n}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e);var l=function(t){var e=function(e){return t.find((function(t){return e===t.id}))},n=function(t){return[].concat(f(t.map((function(t){return e(t).source}))),f(t.map((function(t){return e(t).target})))).filter((function(t){return t&&!t.input}))},r=function(t){return[].concat(f(t.map((function(t){return e(t).source}))),f(t.map((function(t){return e(t).target})))).filter((function(t){return t&&t.input}))},u=[];return t.filter((function(t){return!t.isBifurcation})).forEach((function(t){if(!u.find((function(e){return t.id in e}))){var n={};!function t(n,r){n&&!(n.id in r)&&(r[n.id]=!0,t(e(n.bifurcation.source),r),t(e(n.bifurcation.target),r),n.bifurcations.forEach((function(n){return t(e(n),r)})))}(t,n),u.push(n)}})),u.map((function(t){return Object.keys(t)})).map((function(t){return{links:t,inputs:n(t),outputs:r(t)}}))},p=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.entries(e).forEach((function(t){var e=c(t,2),n=e[0],u=e[1];r[n]=u})),Object.entries(n).forEach((function(t){var e=c(t,2),n=e[0],u=e[1];r[n]=u.bind(r)})),this.initialize(e.configurations)}var e,n,u;return e=t,(n=[{key:"getInputPort",value:function(t){return this.ports.input.find((function(e){return e.name===t}))}},{key:"getOutputPort",value:function(t){return this.ports.output.find((function(e){return e.name===t}))}},{key:"setValues",value:function(t,e){this.ports[e]=this.ports[e].map((function(e){var n=e.value,r=n,u=!1;void 0!==t[e.name]&&("number"===typeof(r=t[e.name])?r=t[e.name]:u=!0);var i=!u&&n<r,a=!u&&n>r;return o(o({},e),{},{value:r,meta:{previous:n,risingEdge:i,fallingEdge:a}})}))}},{key:"setInputValues",value:function(t){this.setValues(t,"input")}},{key:"setOutputValues",value:function(t){this.setValues(t,"output")}},{key:"hasOutputChanged",value:function(t){var e=this;return!Object.keys(t).every((function(n){return t[n]===e.ports.output.find((function(t){return t.name===n})).value}))}},{key:"getProperties",value:function(){var t=this,e=Object.keys(this).filter((function(t){return!["id","initialize","configurations","ports"].includes(t)}));return JSON.parse(JSON.stringify(e.filter((function(e){return"function"!==typeof t[e]})).reduce((function(e,n){return o(o({},e),{},r({},n,t[n]))}),{})))}},{key:"onSimulationStart",value:function(){}},{key:"onSimulationPause",value:function(){}},{key:"onSimulationStop",value:function(){}},{key:"step",value:function(){return{}}},{key:"stepError",value:function(){return this.ports.output.reduce((function(t,e){return o(o({},t),{},r({},e.name,"error"))}),{})}},{key:"emit",value:function(t){var e=new MessageEvent("message",{data:{command:"emit",emitted:{from:this.id,value:t}}});self.dispatchEvent(e)}},{key:"addInputPort",value:function(){}},{key:"addOutputPort",value:function(){}},{key:"removePort",value:function(){}},{key:"createAudio",value:function(t,e){this.audioCount||(this.audioCount=0);var n="".concat(this.audioCount,"-").concat(this.id);return this.audioCount+=1,postMessage({type:"audio",payload:{command:"create",id:n,frequency:t,waveform:e}}),{play:function(){return postMessage({type:"audio",payload:{command:"play",id:n}})},pause:function(){return postMessage({type:"audio",payload:{command:"pause",id:n}})},setFrequency:function(t){return postMessage({type:"audio",payload:{command:"setFrequency",id:n,frequency:t}})},setWaveform:function(t){return postMessage({type:"audio",payload:{command:"setWaveform",id:n,waveform:t}})}}}}])&&s(e.prototype,n),u&&s(e,u),t}(),m=function(t){return Object.fromEntries(Object.entries(t.methods).map((function(t){var e=c(t,2),n=e[0],r=e[1];return[n,new Function("return ".concat("").concat(r))()]})))},d=function(t){var e=function(t){return t.map((function(t){return o(o({},t),{},{methods:m(t)})})).reduce((function(t,e){return o(o({},t),{},r({},e.type,e.methods))}),{})}(t.models);return{components:t.components.map((function(t){return new p(o(o({},t.properties),{},{id:t.id,configurations:t.configurations,ports:{input:t.ports.filter((function(t){return t.input})).map((function(t){return o(o({},t),{},{value:0})})),output:t.ports.filter((function(t){return!t.input})).map((function(t){return o(o({},t),{},{value:0})}))}}),e[t.type])})),meshes:l(t.links)}},y={1:1,2:3,4:15,8:255,16:65535},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=4294967295,r=n>>>32-e;return t&r},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return null===t||t>=0&&t<=y[e]},h=function(t){return self.circuit&&self.circuit.components.find((function(e){return e.id===t}))||null},O=function(t,e){self.diff.components[t.id]||(self.diff.components[t.id]={output:{},properties:{}}),self.diff.components[t.id]=o(o({},self.diff.components[t.id]),{},{output:e,properties:t.getProperties()})};self.circuit=null,self.diff=null,self.emitQueue=[],self.stepQueue=[],self.workInterval=null,self.addEventListener("message",({data:{command:t,diagram:e,emitted:n}})=>{switch(t){case"start":void 0!==e&&(self.circuit=d(e),self.diff={components:{},links:{}},function(){self.circuit.components.forEach((function(t){t.setInputValues(Object.fromEntries(t.ports.input.map((function(t){return[t.id,0]})))),t.setOutputValues(Object.fromEntries(t.ports.output.map((function(t){return[t.id,0]}))))}));var t=self.circuit.meshes.map((function(t){return t.links})).flat().reduce((function(t,e){return o(o({},t),{},r({},e,0))}),{}),e=Object.fromEntries(self.circuit.components.map((function(t){return[t.id,{output:Object.fromEntries([].concat(f(t.ports.input),f(t.ports.output)).map((function(t){return[t.name,0]}))),properties:t.getProperties()}]})));postMessage({type:"diff",payload:{links:t,components:e}})}()),self.circuit.components.forEach(t=>t.onSimulationStart()),g(),self.workInterval=setInterval(g);break;case"pause":self.circuit.components.forEach(t=>t.onSimulationPause()),clearInterval(self.workInterval);break;case"stop":self.circuit.components.forEach(t=>t.onSimulationStop()),clearInterval(self.workInterval),setTimeout(()=>{postMessage({type:"clear"}),self.circuit=null,self.diff=null,self.emitQueue=[],self.stepQueue=[]});break;case"emit":self.circuit&&self.emitQueue.push({...n,from:h(n.from)})}});const g=(t=!0)=>{if(!self.circuit)return;const e=self.emitQueue.shift();if(!e)return;const n=e.from;e.value=Object.fromEntries(Object.entries(e.value).map(([t,e])=>{const{bits:r}=n.getOutputPort(t),u=v(e,r);return[t,b(u,r)?u:"error"]})),n.setOutputValues(e.value),O(n,e.value),k(e),j(),g(!1),t&&(postMessage({type:"diff",payload:self.diff}),self.diff={components:{},links:{}})},j=()=>{const t=self.stepQueue.shift();if(!t)return;const e=t.ports.input.reduce((t,e)=>({...t,[e.name]:e.value}),{}),n=t.ports.input.reduce((t,e)=>({...t,[e.name]:e.meta}),{});let r={};if(!function(t){return t.every((function(t){return b(t.value,t.bits)}))}(t.ports.input)?r=t.stepError(e,n):(r=t.step(e,n),r=Object.fromEntries(Object.entries(r||{}).map(([e,n])=>{const{bits:r}=t.getOutputPort(e);return[e,v(n,r)]}))),!r)return;const u=Object.fromEntries(Object.entries(r).filter(([e])=>t.getOutputPort(e)));t.hasOutputChanged(u)&&(t.setOutputValues(u),O(t,u),k({from:t,value:u})),j()},k=t=>{(function(t){return self.circuit.meshes.filter((function(e){return e.inputs.some((function(e){return t.from.id===e.componentId&&Object.keys(t.value).includes(e.name)}))}))})(t).forEach(t=>{const e=function(t){var e=t.inputs.map((function(t){var e=h(t.componentId).getOutputPort(t.name);return e?e.value:null})).filter((function(t){return null!==t}));return e.every((function(t,e,n){return t===n[0]}))?e[0]:"error"}(t);t.links.forEach(t=>{self.diff.links[t]=e});(function(t){return f(new Set(t.outputs.map((function(t){return t.componentId})))).map((function(t){return h(t)}))})(t).forEach(n=>{const r=t.outputs.filter(t=>t.componentId===n.id).map(t=>t.name).reduce((t,n)=>({...t,[n]:e}),{});n.setInputValues(r),O(n,r),self.stepQueue.push(n)})})}}]);
//# sourceMappingURL=SimulationWorker.acd14983af5ba5608049.js.map