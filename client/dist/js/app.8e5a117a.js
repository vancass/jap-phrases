(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],s[i]&&p.push(s[i][0]),s[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0334":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},"24e8":function(e,t,r){},"55fb":function(e,t,r){"use strict";var n=r("24e8"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"ui inverted segment navbar"},[r("div",{staticClass:"ui center aligned container"},[r("div",{staticClass:"ui large secondary inverted pointing menu compact"},[r("router-link",{staticClass:"item",attrs:{to:"/words",exact:""}},[r("i",{staticClass:"comment outline icon"}),e._v(" Words\n        ")]),e.login?r("router-link",{staticClass:"item",attrs:{to:"/words/new"}},[r("i",{staticClass:"plus circle icon"}),e._v(" New\n        ")]):e._e(),r("router-link",{staticClass:"item",attrs:{to:"/test"}},[r("i",{staticClass:"graduation cap icon"}),e._v(" Test\n        ")])],1)])]),r("div",{staticClass:"ui text container"},[r("flash-message",{staticClass:"myFlash"}),r("div",{staticClass:"ui one column grid"},[r("div",{staticClass:"column"},[r("router-view")],1)])],1)])},a=[],i={name:"app"},o=i,u=(r("034f"),r("2877")),c=Object(u["a"])(o,s,a,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Words")]),r("table",{staticClass:"ui celled compact table",attrs:{id:"words"}},[e._m(0),e._l(e.words,function(t,n){return r("tr",{key:n},[r("td",[e._v(e._s(t.english))]),r("td",[e._v(e._s(t.japanese))]),e.login?r("td",{staticClass:"center aligned",attrs:{width:"75"}},[r("router-link",{attrs:{to:{name:"show",params:{id:t._id}}}},[e._v("Show")])],1):e._e(),e.login?r("td",{staticClass:"center aligned",attrs:{width:"75"}},[r("router-link",{attrs:{to:{name:"edit",params:{id:t._id}}}},[e._v("Edit")])],1):e._e(),e.login?r("td",{staticClass:"center aligned",attrs:{width:"75"},on:{click:function(r){r.preventDefault(),e.onDestroy(t._id)}}},[r("a",{attrs:{href:"/words/"+t._id}},[e._v("Destroy")])]):e._e()])})],2)])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("English")]),r("th",[e._v("Japanese")]),r("th",{attrs:{colspan:"3"}})])])}],h=(r("96cf"),r("1da1")),v=r("bc3a"),m=r.n(v),w=r("d00d"),g=r.n(w);r("f59c");n["a"].use(g.a,{messageOptions:{timeout:3e3,pauseOnInteract:!0}});var _=new n["a"],b="https://japanese-phrases.herokuapp.com/words/",j=function(e){return function(){return e.apply(void 0,arguments).catch(function(e){_.flash("".concat(e.response.status,": ").concat(e.response.statusText),"error")})}},x={getWord:j(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(b+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),getWords:j(Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}))),deleteWord:j(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete(b+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),createWord:j(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.post(b,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),updateWord:j(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.put(b+t._id,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},y={name:"words",data:function(){return{words:[]}},methods:{onDestroy:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=window.confirm("Are you sure?"),r){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,x.deleteWord(t);case 5:this.flash("Word deleted sucessfully!","success"),n=this.words.filter(function(e){return e._id!==t}),this.words=n;case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.getWords();case 2:this.words=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},C=y,O=Object(u["a"])(C,p,f,!1,null,null,null);O.options.__file="Words.vue";var k=O.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("New Word")]),r("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.errorsPresent?r("p",{staticClass:"error"},[e._v("Please fill out both fields!")]):e._e(),r("div",{staticClass:"ui labeled input fluid"},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.word.japanese,expression:"word.japanese"}],ref:"firstInput",attrs:{type:"text",placeholder:"Enter word..."},domProps:{value:e.word.japanese},on:{input:function(t){t.target.composing||e.$set(e.word,"japanese",t.target.value)}}})]),r("div",{staticClass:"ui labeled input fluid"},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.word.english,expression:"word.english"}],attrs:{type:"text",placeholder:"Enter word..."},domProps:{value:e.word.english},on:{input:function(t){t.target.composing||e.$set(e.word,"english",t.target.value)}}})]),r("button",{staticClass:"positive ui button"},[e._v("Submit")])])])},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"japan flag"}),e._v(" Japanese\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"united kingdom flag"}),e._v(" English\n      ")])}],R={name:"new-word",components:{},data:function(){return{errorsPresent:!1,word:{english:"",japanese:""}}},methods:{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.word.english&&""!==this.word.japanese){e.next=4;break}this.errorsPresent=!0,e.next=11;break;case 4:return e.next=6,x.createWord(this.word);case 6:e.sent,this.flash("Word created","success"),this.word.japanese="",this.word.english="",this.$refs.firstInput.focus();case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},$=R,P=(r("e57b"),Object(u["a"])($,W,E,!1,null,"3157ea96",null));P.options.__file="New.vue";var S=P.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Show Word")]),r("div",{staticClass:"ui labeled input fluid"},[e._m(0),r("input",{attrs:{type:"text",readonly:""},domProps:{value:e.word.japanese}})]),r("div",{staticClass:"ui labeled input fluid"},[e._m(1),r("input",{attrs:{type:"text",readonly:""},domProps:{value:e.word.english}})]),r("div",{staticClass:"actions"},[r("router-link",{attrs:{to:{name:"edit",params:{id:this.$route.params.id}}}},[e._v("\n      Edit word\n    ")])],1)])},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"japan flag"}),e._v(" Japanese\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"united kingdom flag"}),e._v(" English\n    ")])}],D={name:"show",data:function(){return{word:""}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.getWord(this.$route.params.id);case 2:this.word=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},J=D,M=(r("749a"),Object(u["a"])(J,T,N,!1,null,"23556d28",null));M.options.__file="Show.vue";var A=M.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Edit Word")]),r("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.errorsPresent?r("p",{staticClass:"error"},[e._v("Please fill out both fields!")]):e._e(),r("div",{staticClass:"ui labeled input fluid"},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.word.japanese,expression:"word.japanese"}],ref:"firstInput",attrs:{type:"text",placeholder:"Enter word..."},domProps:{value:e.word.japanese},on:{input:function(t){t.target.composing||e.$set(e.word,"japanese",t.target.value)}}})]),r("div",{staticClass:"ui labeled input fluid"},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.word.english,expression:"word.english"}],attrs:{type:"text",placeholder:"Enter word..."},domProps:{value:e.word.english},on:{input:function(t){t.target.composing||e.$set(e.word,"english",t.target.value)}}})]),r("button",{staticClass:"positive ui button"},[e._v("Submit")])])])},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"japan flag"}),e._v(" Japanese\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"united kingdom flag"}),e._v(" English\n      ")])}],Y={name:"edit",components:{},data:function(){return{word:{}}},methods:{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.updateWord(this.word);case 2:this.flash("Word updated sucessfully!","success"),this.$router.push("/words/".concat(word._id));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.getWord(this.$route.params.id);case 2:this.word=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},q=Y,F=Object(u["a"])(q,G,I,!1,null,null,null);F.options.__file="Edit.vue";var H=F.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Test")]),e.words.length<5?r("div",[r("p",[e._v("You need to enter at least five words to begin the test")])]):r("div",[r("vocab-test",{attrs:{words:e.words}})],1)])},V=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Score: "+e._s(e.score)+" out of "+e._s(this.words.length))]),r("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"ui labeled input fluid"},[e._m(0),r("input",{attrs:{type:"text",readonly:"",disabled:e.testOver},domProps:{value:e.currWord.english}})]),r("div",{staticClass:"ui labeled input fluid"},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.japanese,expression:"japanese"}],attrs:{type:"text",placeholder:"Enter word...",disabled:e.testOver,autocomplete:"off"},domProps:{value:e.japanese},on:{input:function(t){t.target.composing||(e.japanese=t.target.value)}}})]),r("button",{staticClass:"positive ui button",attrs:{disabled:e.testOver}},[e._v("Submit")])]),r("p",{class:["results",e.resultClass]},[r("span",{domProps:{innerHTML:e._s(e.result)}})])])},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"united kingdom flag"}),e._v(" English\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui label"},[r("i",{staticClass:"japan flag"}),e._v(" Japanese\n      ")])}],K=(r("55dd"),r("2909")),Q={name:"vocab-test",props:{words:{type:Array,required:!0}},data:function(){return{randWords:Object(K["a"])(this.words.sort(function(){return.5-Math.random()})),incorrectGuesses:[],result:"",resultClass:"",japanese:"",score:0,testOver:!1}},computed:{currWord:function(){return this.randWords.length?this.randWords[0]:""}},methods:{onSubmit:function(){this.japanese===this.currWord.japanese?(this.flash("Correct!","success",{timeout:1e3}),this.score+=1):(this.flash("Wrong!","error",{timeout:1e3}),this.incorrectGuesses.push(this.currWord.japanese)),this.japanese="",this.randWords.shift(),0===this.randWords.length&&(this.testOver=!0,this.displayResults())},displayResults:function(){if(0===this.incorrectGuesses.length)this.result="You got everything correct. Well done!",this.resultClass="success";else{var e=this.incorrectGuesses.join(", ");this.result="<strong>You got the following words wrong:</strong> ".concat(e),this.resultClass="error"}}}},U=Q,X=(r("55fb"),Object(u["a"])(U,z,B,!1,null,"0e99c9d4",null));X.options.__file="VocabTest.vue";var Z=X.exports,ee={name:"test",components:{"vocab-test":Z},data:function(){return{words:[]}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.getWords();case 2:this.words=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},te=ee,re=Object(u["a"])(te,L,V,!1,null,null,null);re.options.__file="Test.vue";var ne=re.exports;n["a"].use(d["a"]);var se=new d["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:[{path:"/",redirect:"/words"},{path:"/words",name:"words",component:k},{path:"/words/new",name:"new-word",component:S},{path:"/words/:id",name:"show",component:A},{path:"/words/:id/edit",name:"edit",component:H},{path:"/test",name:"test",component:ne}]});r("87ee");n["a"].config.productionTip=!1,new n["a"]({router:se,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,r){},"749a":function(e,t,r){"use strict";var n=r("eb67"),s=r.n(n);s.a},e57b:function(e,t,r){"use strict";var n=r("0334"),s=r.n(n);s.a},eb67:function(e,t,r){}});
//# sourceMappingURL=app.8e5a117a.js.map