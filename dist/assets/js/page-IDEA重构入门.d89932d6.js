(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{343:function(t,a,r){t.exports=r.p+"assets/img/exact-variable.ed1cc9dd.gif"},523:function(t,a,r){t.exports=r.p+"assets/img/refractor-help.73152b43.png"},524:function(t,a,r){t.exports=r.p+"assets/img/rename.2db4fb76.gif"},525:function(t,a,r){t.exports=r.p+"assets/img/extract-constant.f19860d9.gif"},526:function(t,a,r){t.exports=r.p+"assets/img/exact-parameter.38c9894e.gif"},527:function(t,a,r){t.exports=r.p+"assets/img/exact-field.e250eee4.gif"},528:function(t,a,r){t.exports=r.p+"assets/img/exact-method.e8a91d21.gif"},529:function(t,a,r){t.exports=r.p+"assets/img/exact-interface.614cc384.gif"},657:function(t,a,r){"use strict";r.r(a);var s=r(1),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"idea-重构入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea-重构入门"}},[t._v("#")]),t._v(" IDEA 重构入门")]),t._v(" "),s("p",[t._v("我们在使用 IDEA 进行重构之前，先介绍一个方便我们进行重构的快捷键："),s("code",[t._v("ctrl+t(mac)/ctrl+shift+alt+t")]),t._v("（如果忘记快捷键的话，鼠标右键也能找到重构选项），使用这个快捷键可以快速调出常用重构的选项，如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:r(523),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"重命名-rename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重命名-rename"}},[t._v("#")]),t._v(" 重命名(rename)")]),t._v(" "),s("p",[t._v("快捷键："),s("strong",[t._v("Shift + F6(mac) / Shift + F6(windows/Linux)：")]),t._v(" 对类、变量或者方法名重命名。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(524),alt:"重命名"}})]),t._v(" "),s("h3",{attrs:{id:"提取相关重构手段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取相关重构手段"}},[t._v("#")]),t._v(" 提取相关重构手段")]),t._v(" "),s("p",[t._v("这部分的快捷键实际很好记忆，我是这样记忆的:")]),t._v(" "),s("p",[t._v("前面两个键位是  "),s("code",[t._v("command + option(mac) / ctrl + alt (Windows/Linux)")]),t._v(" 是固定的，只有后面一个键位会变比如Extract constant (提取变量)就是 c（constant）、Extract variable (提取变量)就是 v(variable)。")]),t._v(" "),s("h4",{attrs:{id:"提取常量-extract-constant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取常量-extract-constant"}},[t._v("#")]),t._v(" 提取常量(extract constant)")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("使用场景")]),t._v(" ：提取未经过定义就直接出现的常量。提取常量使得你的编码更易读，避免硬编码。")]),t._v(" "),s("li",[s("strong",[t._v("快捷键：")]),t._v(" "),s("code",[t._v("command + option+ c(mac)/ ctrl + alt + c(Windows/Linux)")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(525),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"提取参数-exact-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取参数-exact-parameter"}},[t._v("#")]),t._v(" 提取参数(exact parameter\ufeff)")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("使用场景")]),t._v(" ：提取参数到方法中。")]),t._v(" "),s("li",[s("strong",[t._v("快捷键：")]),t._v(" "),s("code",[t._v("command + option+ p(mac)/ ctrl + alt + p(Windows/Linux)")])])]),t._v(" "),s("p",[s("img",{attrs:{src:r(526),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"提取变量-exact-variable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取变量-exact-variable"}},[t._v("#")]),t._v(" 提取变量(exact variable)")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("使用场景")]),t._v(" ：提取多次出现的表达式。")]),t._v(" "),s("li",[s("strong",[t._v("快捷键：")]),t._v(" "),s("code",[t._v("command + option+ v(mac) / ctrl + alt + v(Windows/Linux)")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(343),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"提取属性-exact-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取属性-exact-field"}},[t._v("#")]),t._v(" 提取属性(exact field)")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("使用场景")]),t._v(" ：把当前表达式提取成为类的一个属性。")]),t._v(" "),s("li",[s("strong",[t._v("快捷键：")]),t._v(" "),s("code",[t._v("command + option+ f(mac) / ctrl + alt + f(Windows/Linux)")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(527),alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(343),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"提取方法-exact-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取方法-exact-method"}},[t._v("#")]),t._v(" 提取方法(exact method)")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("使用场景")]),t._v(" ：1个或者多个表达式可以提取为一个方法。 提取方法也能使得你的编码更易读，更加语义化。")]),t._v(" "),s("li",[s("strong",[t._v("快捷键：")]),t._v(" "),s("code",[t._v("command + option+ m(mac)/ ctrl + alt + m(Windows/Linux)")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(528),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"提取接口-exact-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取接口-exact-interface"}},[t._v("#")]),t._v(" 提取接口(exact interface)")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("使用场景")]),t._v(" ：想要把一个类中的1个或多个方法提取到一个接口中的时候。")]),t._v(" "),s("li",[s("strong",[t._v("快捷键：")]),t._v(" "),s("code",[t._v("command + option+ m(mac)/ ctrl + alt + m(Windows/Linux)")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(529),alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);