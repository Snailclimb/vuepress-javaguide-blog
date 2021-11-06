(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{659:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"idea-插件开发入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea-插件开发入门"}},[t._v("#")]),t._v(" IDEA 插件开发入门")]),t._v(" "),a("p",[t._v("我这个人没事就喜欢推荐一些好用的 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1319419426898329600&__biz=Mzg2OTA0Njk0OA==#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDEA 插件"),a("OutboundLink")],1),t._v("给大家。这些插件极大程度上提高了我们的生产效率以及编码舒适度。")]),t._v(" "),a("p",[a("strong",[t._v("不知道大家有没有想过自己开发一款 IDEA 插件呢？")])]),t._v(" "),a("p",[t._v("我自己想过，但是没去尝试过。刚好有一位读者想让我写一篇入门 IDEA 开发的文章，所以，我在周末就花了一会时间简单了解一下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118071711216.png",alt:""}})]),t._v(" "),a("p",[t._v("不过，"),a("strong",[t._v("这篇文章只是简单带各位小伙伴入门一下 IDEA 插件开发")]),t._v("，个人精力有限，暂时不会深入探讨太多。如果你已经有 IDEA 插件开发的相关经验的话，这篇文章就可以不用看了，因为会浪费你 3 分钟的时间。")]),t._v(" "),a("p",[t._v("好的废话不多说！咱们直接开始!")]),t._v(" "),a("h2",{attrs:{id:"_01-新建一个基于-gradle-的插件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-新建一个基于-gradle-的插件项目"}},[t._v("#")]),t._v(" 01 新建一个基于 Gradle 的插件项目")]),t._v(" "),a("p",[t._v("这里我们基于 Gradle 进行插件开发，这也是 IntelliJ 官方的推荐的插件开发解决方案。")]),t._v(" "),a("p",[a("strong",[t._v("第一步，选择 Gradle 项目类型并勾选上相应的依赖。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/1.png",alt:"选择 Gradle 项目类型并勾选上相应的依赖"}})]),t._v(" "),a("p",[a("strong",[t._v("第二步，填写项目相关的属性比如 GroupId、ArtifactId。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/2.png",alt:"填写项目相关的属性"}})]),t._v(" "),a("p",[a("strong",[t._v("第三步，静静等待项目下载相关依赖。")])]),t._v(" "),a("p",[t._v("第一次创建 IDEA 插件项目的话，这一步会比较慢。因为要下载 IDEA 插件开发所需的 SDK 。")]),t._v(" "),a("h2",{attrs:{id:"_02-插件项目结构概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-插件项目结构概览"}},[t._v("#")]),t._v(" 02 插件项目结构概览")]),t._v(" "),a("p",[t._v("新建完成的项目结构如下图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/插件项目结构概览.png",alt:"插件项目结构概览"}})]),t._v(" "),a("p",[t._v("这里需要额外注意的是下面这两个配置文件。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("plugin.xml")]),t._v(" ：插件的核心配置文件。通过它可以配置插件名称、插件介绍、插件作者信息、Action 等信息。")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("idea-plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("github.javaguide.my-first-idea-plugin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--插件的名称--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Beauty"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--插件的作者相关信息--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vendor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("koushuangbwcx@163.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://github.com/Snailclimb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("JavaGuide"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vendor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--插件的介绍--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token cdata"}},[t._v("<![CDATA[\n     Guide哥代码开发的第一款IDEA插件<br>\n    <em>这尼玛是什么垃圾插件！！！</em>\n    ]]>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- please see https://www.jetbrains.org/intellij/sdk/docs/basics/getting_started/plugin_compatibility.html\n         on how to target different products --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("depends")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.intellij.modules.platform"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("depends")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("extensions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultExtensionNs")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.intellij"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Add your extensions here --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Add your actions here --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("idea-plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[a("strong",[a("code",[t._v("build.gradle")]),t._v(" ：项目依赖配置文件。通过它可以配置项目第三方依赖、插件版本、插件版本更新记录等信息。")])]),t._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v("\n    id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.jetbrains.intellij'")]),t._v(" version "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.6.3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ngroup "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github.javaguide'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前插件版本")]),t._v("\nversion "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0-SNAPSHOT'")]),t._v("\n\nrepositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目依赖")]),t._v("\ndependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    testCompile group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4.12'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See https://github.com/JetBrains/gradle-intellij-plugin/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前开发该插件的 IDEA 版本")]),t._v("\nintellij "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    version "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020.1.2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\npatchPluginXml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 版本更新记录")]),t._v("\n    changeNotes "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"""\n      Add change notes here.<br>\n      <em>most HTML tags may be used</em>"""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("p",[t._v("没有开发过 IDEA 插件的小伙伴直接看这两个配置文件内容可能会有点蒙。所以，我专门找了一个 IDEA 插件市场提供的现成插件来说明一下。小伙伴们对照下面这张图来看下面的配置文件内容就非常非常清晰了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/iShot2020-11-13 16.15.53.png",alt:"插件信息"}})]),t._v(" "),a("p",[t._v("这就非常贴心了！如果这都不能让你点赞，我要这文章有何用!")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://wx1.sinaimg.cn/large/006BkP2Hly1fsxxff7zd9g304g0480td.gif",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_03-手动创建-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-手动创建-action"}},[t._v("#")]),t._v(" 03 手动创建 Action")]),t._v(" "),a("p",[t._v("我们可以把 Action 看作是 IDEA 提高的事件响应处理器，通过 Action 我们可以自定义一些事件处理逻辑/动作。比如说你点击某个菜单的时候，我们进行一个展示对话框的操作。")]),t._v(" "),a("p",[a("strong",[t._v("第一步，右键"),a("code",[t._v("java")]),t._v("目录并选择 new 一个 Action")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/新建action (1).png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("第二步，配置 Action 相关信息比如展示名称。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/配置动作属性 (1).png",alt:"配置动作属性 (1)"}})]),t._v(" "),a("p",[t._v("创建完成之后，我们的 "),a("code",[t._v("plugin.xml")]),t._v(" 的 "),a("code",[t._v("<actions>")]),t._v("节点下会自动生成我们刚刚创建的 Action 信息：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Add your actions here --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("action")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("HelloAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("IDEA插件入门"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("add-to-group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("group-id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ToolsMenu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("anchor")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("并且 "),a("code",[t._v("java")]),t._v(" 目录下为生成一个叫做 "),a("code",[t._v("HelloAction")]),t._v(" 的类。并且，这个类继承了 "),a("code",[t._v("AnAction")]),t._v(" ，并覆盖了 "),a("code",[t._v("actionPerformed()")]),t._v(" 方法。这个 "),a("code",[t._v("actionPerformed")]),t._v(" 方法就好比 JS 中的 "),a("code",[t._v("onClick")]),t._v(" 方法，会在你点击的时候被触发对应的动作。")]),t._v(" "),a("p",[t._v("我简单对"),a("code",[t._v("actionPerformed")]),t._v(" 方法进行了修改，添加了一行代码。这行代码很简单，就是显示 1 个对话框并展示一些信息。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloAction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnAction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("actionPerformed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnActionEvent")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示对话框并展示对应的信息")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Messages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showInfoMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"素材不够，插件来凑！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("另外，我们上面也说了，每个动作都会归属到一个 Group 中，这个 Group 可以简单看作 IDEA 中已经存在的菜单。")]),t._v(" "),a("p",[t._v("举个例子。我上面创建的 Action 的所属 Group 是 "),a("strong",[t._v("ToolsMenu(Tools)")]),t._v(" 。这样的话，我们创建的 Action 所在的位置就在 Tools 这个菜单下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201113192255689.png",alt:""}})]),t._v(" "),a("p",[t._v("再举个例子。加入我上面创建的 Action 所属的 Group 是"),a("strong",[t._v("MainMenu")]),t._v(" （IDEA 最上方的主菜单栏）下的 "),a("strong",[t._v("FileMenu(File)")]),t._v(" 的话。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Add your actions here --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("action")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("HelloAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("IDEA插件入门"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("add-to-group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("group-id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("FileMenu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("anchor")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("我们创建的 Action 所在的位置就在 File 这个菜单下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201113201634643.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_04-验收成果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04-验收成果"}},[t._v("#")]),t._v(" 04 验收成果")]),t._v(" "),a("p",[t._v("点击 "),a("code",[t._v("Gradle -> runIde")]),t._v(" 就会启动一个默认了这个插件的 IDEA。然后，你可以在这个 IDEA 上实际使用这个插件了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118075912490.png",alt:"点击 runIde 就会启动一个默认了这个插件的 IDEA"}})]),t._v(" "),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118080358764.png",alt:"点击 runIde 就会启动一个默认了这个插件的 IDEA"}})]),t._v(" "),a("p",[t._v("我们点击自定义的 Hello Action 的话就会弹出一个对话框并展示出我们自定义的信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/IDEA插件HelloWorld.png",alt:"IDEA插件HelloWorld"}})]),t._v(" "),a("h2",{attrs:{id:"_05-完善一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_05-完善一下"}},[t._v("#")]),t._v(" 05 完善一下")]),t._v(" "),a("p",[t._v("想要弄点界面花里胡哨一下， 我们还可以通过 Swing 来写一个界面。")]),t._v(" "),a("p",[t._v("这里我们简单实现一个聊天机器人。代码的话，我是直接参考的我大二刚学 Java 那会写的一个小项目（"),a("em",[t._v("当时写的代码实在太烂了！就很菜！")]),t._v("）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201114100213337.png",alt:""}})]),t._v(" "),a("p",[t._v("首先，你需要在"),a("a",{attrs:{href:"http://www.tuling123.com/",title:"图灵机器人官网",target:"_blank",rel:"noopener noreferrer"}},[t._v("图灵机器人官网"),a("OutboundLink")],1),t._v("申请一个机器人。（"),a("em",[t._v("其他机器人也一样，感觉这个图灵机器人没有原来好用了，并且免费调用次数也不多")]),t._v("）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118075453172.png",alt:""}})]),t._v(" "),a("p",[t._v("然后，简单写一个方法来请求调用机器人。由于代码比较简单，我这里就不放出来了，大家简单看一下效果就好。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118075803163.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_06-深入学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_06-深入学习"}},[t._v("#")]),t._v(" 06 深入学习")]),t._v(" "),a("p",[t._v("如果你想要深入学习的 IDEA 插件的话，可以看一下官网文档："),a("a",{attrs:{href:"https://jetbrains.org/intellij/sdk/docs/basics/basics.html",title:"https://jetbrains.org/intellij/sdk/docs/basics/basics.html ",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jetbrains.org/intellij/sdk/docs/basics/basics.html "),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("p",[t._v("这方面的资料还是比较少的。除了官方文档的话，你还可以简单看看下面这几篇文章：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.aliyun.com/article/777850?spm=a2c6h.12873581.0.dArticle777850.118d6446r096V4&groupCode=alitech",title:"8 条经验轻松上手 IDEA 插件开发",target:"_blank",rel:"noopener noreferrer"}},[t._v("8 条经验轻松上手 IDEA 插件开发"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.xiaohansong.com/idea-plugin-development.html",title:"IDEA 插件开发入门教程",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDEA 插件开发入门教程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_07-后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_07-后记"}},[t._v("#")]),t._v(" 07 后记")]),t._v(" "),a("p",[t._v("我们开发 IDEA 插件主要是为了让 IDEA 更加好用，比如有些框架使用之后可以减少重复代码的编写、有些主题类型的插件可以让你的 IDEA 更好看。")]),t._v(" "),a("p",[t._v("我这篇文章的这个案例说实话只是为了让大家简单入门一下 IDEA 开发，没有任何实际应用意义。"),a("strong",[t._v("如果你想要开发一个不错的 IDEA 插件的话，还要充分发挥想象，利用 IDEA 插件平台的能力。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);