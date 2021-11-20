# CSS 重置

## 引导

此 CSS 重置为样式表提供一个坚实的基础。 它构建于 [normalize.css](https://github.com/necolas/normalize.css) 之上并添加了新功能如为 `<code>` 元素设置 `font-family: monospace` , 移除元素悬停时的所有 `outlines` , 还有更多. 在 [resse GitHub 仓库](https://github.com/filipelinhares/ress) 上可以找到更多信息。

> CSS 重置已全局应用，并影响默认元素，如`buton`和`input`。文件路径：`packages/theme-chalk/src/common/reset.scss`


## 重置特性

- 应用 box-sizing: border-box 到所有元素.
- 重置所有元素的 padding 和 margin .
- 在所有元素和为元素中指定 background-repeat: no-repeat .
- 继承 text-decoration 和 vertical-align 到 ::before 和 ::after.
- 在所有的浏览器中移除悬停时的 outline .
- 指定code元素的字体为 font-family: monospace .
- 重置input元素的 border-radius .
- 指定表单元素的字体继承。
- 移除所有浏览器中的默认按钮样式。
- 指定文本区域的大小调整为垂直。
- 应用 cursor: pointer 到按钮元素.
- 在 html 中应用 tab-size: 4 .
- 像标准input一样的 select 样式.
- 由aria属性设置 cursor 样式.
- 隐藏屏幕上的内容，但不隐藏屏幕阅读器。