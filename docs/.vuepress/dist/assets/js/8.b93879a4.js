(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{371:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第10章-变换、过渡与动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第10章-变换、过渡与动画"}},[s._v("#")]),s._v(" "),a("strong",[s._v("第10章 变换、过渡与动画")])]),s._v(" "),a("p",[s._v("元素的变换不会影响页面布局，过渡是一种简化的动画。")]),s._v(" "),a("h2",{attrs:{id:"_10-1-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-概述"}},[s._v("#")]),s._v(" "),a("strong",[s._v("10.1 概述")])]),s._v(" "),a("p",[s._v("css变化用于在空间中移动物体，css过渡和关键帧动画用于控制元素随时间移动的变化")]),s._v(" "),a("h2",{attrs:{id:"_10-2-二位变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-二位变换"}},[s._v("#")]),s._v(" 10.2 二位变换")]),s._v(" "),a("p",[s._v("给元素应用变换，会为元素最初所在的空间创建所谓的局部坐标系统，用于转换元素的像素。")]),s._v(" "),a("p",[s._v("旋转后的元素不会妨碍其他部分的布局")]),s._v(" "),a("h3",{attrs:{id:"_10-2-1-变换原点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-1-变换原点"}},[s._v("#")]),s._v(" 10.2.1 变换原点")]),s._v(" "),a("p",[s._v("默认情况下变换以元素边框盒子的中心作为原点。"),a("code",[s._v("transform-origin")]),s._v("可以控制原点的位置。")]),s._v(" "),a("p",[s._v("可以给"),a("code",[s._v("transform-origin")]),s._v("设置1-3个值，代表x, y, z轴坐标。如果只给了一个值，第二个默认是center，第三个值不影响二维变换。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("45deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("给SVG元素应用变换，默认原点为左上角")])]),s._v(" "),a("h3",{attrs:{id:"_10-2-2-平移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-2-平移"}},[s._v("#")]),s._v(" 10.2.2 平移")]),s._v(" "),a("p",[s._v("平移就是移动到新位置。可以沿x, y轴平移，也可以沿两个轴。")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("translate()")]),s._v("函数时，要传入2个坐标值。可以传长度值、像素、em或者百分比。百分比是相对自身大小，而不是父元素。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 向右移动自身100%宽度\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_10-2-3-多重变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-3-多重变换"}},[s._v("#")]),s._v(" 10.2.3 多重变换")]),s._v(" "),a("p",[s._v("可以同时应用多重变换。以空格的列表形式传给"),a("code",[s._v("transform")]),s._v("属性，将按照顺序依次变换。因此，变换的顺序很重要。")]),s._v(" "),a("blockquote",[a("p",[s._v("修改变换：")]),s._v(" "),a("p",[s._v("声明多个变换后，想增加变换不能直接声明替换，而是要声明中包含之前的整套变换。")])]),s._v(" "),a("h3",{attrs:{id:"_10-2-4-缩放和变形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-4-缩放和变形"}},[s._v("#")]),s._v(" 10.2.4 缩放和变形")]),s._v(" "),a("p",[a("code",[s._v("scale()")]),s._v("和"),a("code",[s._v("skew()")]),s._v("，都有x, 轴的设置项和变体。")]),s._v(" "),a("p",[a("code",[s._v("scale()")]),s._v("函数的参数是没有单位的数值，如果只传一个，就是在x, y轴同时缩放。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".doubled")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("hr"),s._v(" "),a("p",[s._v("变形是指水平或垂直方向平行的边发生相对位移，或偏移一定角度。")]),s._v(" "),a("h3",{attrs:{id:"_10-2-5-二位矩阵变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-5-二位矩阵变换"}},[s._v("#")]),s._v(" 10.2.5 二位矩阵变换")]),s._v(" "),a("p",[s._v("对于浏览器而言，所有的变换都归于一个数学结构：变换矩阵。可以通过"),a("code",[s._v("matrix()")]),s._v("直接操纵。")]),s._v(" "),a("h3",{attrs:{id:"_10-2-6-变换与性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-6-变换与性能"}},[s._v("#")]),s._v(" 10.2.6 变换与性能")]),s._v(" "),a("p",[s._v("浏览器在计算CSS效果时，在某些情况下多花一些时间。修改文本大小时，生成的行盒子会随着文本折行而变化，高度变化导致浏览器重新计算布局。")]),s._v(" "),a("p",[s._v("在使用CSS变化时，不会改变元素内部布局，又不会影响外部其他元素，性能很好。")]),s._v(" "),a("h2",{attrs:{id:"_10-3-过渡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-过渡"}},[s._v("#")]),s._v(" 10.3 过渡")]),s._v(" "),a("p",[s._v("过渡是一种动画，可以从一种状态过渡到另一种状态。过渡会自动双向运行。")]),s._v(" "),a("p",[s._v("设置过渡属性：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform-property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .15s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可以写在一起：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" box-shadow .15s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" transform .15s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("必须对两个过渡指定持续时间。")])]),s._v(" "),a("h3",{attrs:{id:"_10-3-1-过渡计时函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-1-过渡计时函数"}},[s._v("#")]),s._v(" 10.3.1 过渡计时函数")]),s._v(" "),a("p",[s._v("默认情况下过渡的速度从慢到快再到慢，由"),a("code",[s._v("transform-timing-function")]),s._v("属性指定")]),s._v(" "),a("p",[s._v("有一些关键字可以代表不同的缓动函数"),a("code",[s._v("linear")]),s._v(", "),a("code",[s._v("ease-in")]),s._v(", "),a("code",[s._v("ease-out")]),s._v(", "),a("code",[s._v("ease-in-out")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" all .25s ease-in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("三次贝塞尔曲线函数和“弹性”过渡")]),s._v(" "),a("p",[s._v("在底层，控制速度变化的数学函数基于三次贝塞尔函数生成。可以借助工具生成。")])]),s._v(" "),a("li",[a("p",[s._v("步进函数")]),s._v(" "),a("p",[s._v("可以指定过渡中每一步的状态，适合创建定格动画。")])])]),s._v(" "),a("h3",{attrs:{id:"_10-3-4-延迟过渡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-4-延迟过渡"}},[s._v("#")]),s._v(" 10.3.4 延迟过渡")]),s._v(" "),a("p",[s._v("可以通过"),a("code",[s._v("transition-delay")]),s._v("属性推迟过渡发生。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".hello")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transition-delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_10-3-5-过渡的能否"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-5-过渡的能否"}},[s._v("#")]),s._v(" 10.3.5 过渡的能否")]),s._v(" "),a("p",[s._v("并非所有CSS属性都可以拿来过渡动画。一般涉及颜色和长度都是可以的，比如"),a("code",[s._v("red => blue")]),s._v("，"),a("code",[s._v("100px =>200px")]),s._v("。但"),a("code",[s._v("display")]),s._v("从"),a("code",[s._v("none")]),s._v("到"),a("code",[s._v("block")]),s._v("没有中间状态就不行。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("可插值")])]),s._v(" "),a("li",[a("p",[s._v("过渡到内容高度")]),s._v(" "),a("p",[a("code",[s._v("height")]),s._v("只能在数值之间过渡，像"),a("code",[s._v("auto")]),s._v("这样的关键字不能用于过渡。可以使用"),a("code",[s._v("max-height:0")]),s._v("过度到"),a("code",[s._v("max-height:100px")]),s._v("实现不定高度的过渡")])])]),s._v(" "),a("h2",{attrs:{id:"_10-4-css关键帧动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-css关键帧动画"}},[s._v("#")]),s._v(" 10.4 CSS关键帧动画")]),s._v(" "),a("p",[s._v("CSS过渡是一种"),a("strong",[s._v("隐式")]),s._v("动画，只能指定两个状态。想要多个状态可以通过定义"),a("strong",[s._v("关键帧")]),s._v("实现这一类过渡。")]),s._v(" "),a("h3",{attrs:{id:"_10-4-1-动画与生命的幻象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-1-动画与生命的幻象"}},[s._v("#")]),s._v(" 10.4.1 动画与生命的幻象")]),s._v(" "),a("p",[s._v("可以通过CSS动画吸引注意力，提醒用户解释刚刚发生了什么。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" roll")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ease-in-out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("20%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("skewX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("15deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("28%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("skewX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ease-out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("45%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("skewX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-5deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("20deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ease-in-out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("50%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("45deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ease-in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("60%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("90deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("65%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("90deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("skewY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("10deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("70%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("90deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("skewY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("90deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box-inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.74em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.74em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 指定动画序列 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" roll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 滑动时长 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 动画延迟1s */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 翻滚三次 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-iteration-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 设置计时函数 会被关键帧里的覆盖 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 基于右下角翻转 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bottom right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("h3",{attrs:{id:"_10-4-2-曲线动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-2-曲线动画"}},[s._v("#")]),s._v(" 10.4.2 曲线动画")]),s._v(" "),a("blockquote",[a("p",[s._v("注意事项：")]),s._v(" "),a("ol",[a("li",[s._v("关键中的属性不允许添加!important，会被忽略")]),s._v(" "),a("li",[s._v("最好等页面加载完，再通过js触发")])])]),s._v(" "),a("h2",{attrs:{id:"_10-5-三维变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-三维变换"}},[s._v("#")]),s._v(" 10.5 三维变换")]),s._v(" "),a("p",[s._v("三维变换中需要多考虑一个维度，可以控制坐标、旋转、变形、缩放元素等。")]),s._v(" "),a("h3",{attrs:{id:"_10-5-1-透视"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-1-透视"}},[s._v("#")]),s._v(" 10.5.1 透视")]),s._v(" "),a("p",[s._v("不设置透视距离时，默认为无穷大，因此在y轴上旋转时不会有明显变化。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  perspecti\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("透视远点")]),s._v(" "),a("p",[s._v("默认情况下，为元素的中心点。可以通过"),a("code",[s._v("perspective-origin")]),s._v("属性来修改消失点的位置（设置在父元素上）。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("perspective()")]),s._v("函数")]),s._v(" "),a("p",[s._v("可以直接使用"),a("code",[s._v("perspective()")]),s._v("设置个别元素的透视原点，不用在父元素上设置")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);