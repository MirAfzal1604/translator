(function(e){function t(t){for(var r,c,o=t[0],u=t[1],s=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4d19":function(e,t,n){"use strict";n("fd18")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,i,c){var o=Object(r["i"])("mainTranslater");return Object(r["f"])(),Object(r["b"])(o)}var i=function(e){return Object(r["h"])("data-v-e20e3c84"),e=e(),Object(r["g"])(),e},c={class:"mainbg"},o={class:"container"},u={class:"box"},s={class:"lang"},l={class:"language"},d=i((function(){return Object(r["d"])("span",{class:"activeLang"},null,-1)})),f={class:"language"},p={class:"textPlace"};function b(e,t,n,a,i,b){return Object(r["f"])(),Object(r["c"])("div",c,[Object(r["d"])("div",o,[Object(r["d"])("div",u,[Object(r["d"])("div",s,[Object(r["d"])("div",l,[d,Object(r["e"])(" "+Object(r["j"])(this.isLatin?"Lotin":"Kiril"),1)]),Object(r["d"])("div",{class:"language forConverter",onClick:t[0]||(t[0]=function(e){return b.changeLanguage()})},"🔄"),Object(r["d"])("div",f,Object(r["j"])(this.isLatin?"Kiril":"Lotin"),1)]),Object(r["d"])("div",p,[Object(r["l"])(Object(r["d"])("textarea",{id:"writer",class:"writer","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.text=e}),placeholder:"Yozing..."},null,512),[[r["k"],i.text]]),Object(r["l"])(Object(r["d"])("textarea",{id:"getter",class:"getter","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.translate=e}),readonly:""},"\n          ",512),[[r["k"],b.translate]])])])])])}n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("5319");var v={name:"mainTranslater",data:function(){return{text:"",isLatin:!0,latin:["A","a","B","b","D","d","V","v","G","g","E","e","Ch","ch","Sh","sh","Yo","yo","J","j","Z","z","I","i","Y","y","K","k","L","l","M","m","N","n","O'","o'","O","o","P","p","R","r","T","t","U","u","F","f","X","x","S","s","S","s","'","E","e","Ye","ye","Yu","yu","Ya","ya","Q","q","Gʻ","g'","H","h","Sirk","sirk","Yangi","yangi"],ciril:["А","а","Б","б","Д","д","В","в","Г","г","Е","е","Ч","ч","Ш","ш","Ё","ё","Ж","ж","З","з","И","и","Й","й","К","к","Л","л","М","м","Н","н","Ў","ў","О","о","П","п","Р","р","Т","т","У","у","Ф","ф","Х","х","С","с","Ц","ц","ъ","Э","э","Е","е","Ю","ю","Я","я","Қ","қ","Ғ","ғ","Ҳ","ҳ","Цирк","цирк","Енгил","енгил"]}},computed:{translate:function(){var e=this.latin,t=this.ciril;if(!this.isLatin){var n=e;e=t,t=n}for(var r,a=this.text,i=0;i<e.length;i++)r=new RegExp(e[i],"g"),a=a.replace(r,t[i]);return a}},methods:{changeLanguage:function(){this.isLatin=!this.isLatin}}},g=(n("d459"),n("6b0d")),O=n.n(g);const h=O()(v,[["render",b],["__scopeId","data-v-e20e3c84"]]);var j=h,y=(n("ab8b"),n("2dd8"),{name:"App",components:{mainTranslater:j}});n("4d19");const m=O()(y,[["render",a]]);var x=m;Object(r["a"])(x).mount("#app")},d459:function(e,t,n){"use strict";n("e1df")},e1df:function(e,t,n){},fd18:function(e,t,n){}});
//# sourceMappingURL=app.392d8162.js.map