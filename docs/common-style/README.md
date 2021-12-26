> 使用时只需引入 `element-pro-ui/lib/theme-chalk/index.css`即可。
> 类名后增加 `-im` 即 `!important`， eg: `w-200-im`。

# Quick Query 快查

<!-- ## [Color 颜色](/common-style/color.html)

```
/* 文字/背景 颜色
color = red, pink,  pink,  pink,  pink,  pink,  pink,  pink,  pink,  pink,
        red, pink,  pink,  pink,  pink,  pink,  pink,  pink,  pink,  pink,
*/
.text-{color} // 主色
.text-{color}-light-{n} // 亮色 n = 1,2,3,4,5
.text-{color}-darken-{n} // 暗色 n = 1,2,3,4
.text-{color}-accent-{n} // 强调色 n = 1,2,3,4
.bg-{color}
.bg-{color}-light-{n}
.bg-{color}-darken-{n}
.bg-{color}-accent-{n}
``` -->

## [Display 布局](/common-style/display.html)     

#### display

```
.d-{value}
// value = none, block, inline, inline-block, table, table-cell, table-column, table-row, flex, inline-flex, grid, inline-grid
```
## [Flex 弹性布局](/common-style/display.html#flex-主轴-方向)
#### flex-direction
```
.flex-{value} // value = row, column, row-reverse, column-reverse
```
#### justify-content
```
.justify-{value} // value = start, end, center, space-between, space-around
```
#### align-items
```
.align-{value} // value = start, end, center, baseline, stretch
```
#### align-self
```
.align-self-{value} // value = auto, start, end, center, baseline, stretch
```
#### flex-wrap
```
.flex-{value} // value = nowrap, wrap, wrap-reverse
```
#### order
```
.order-{value} // value = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
```
#### align-content
```
.align-content-{value} // value = start, end, center, space-between, space-around, stretch
```
#### flex-grow、flex-shrink
```
.flex-grow-{value} // value = 0, 1
.flex-shrink-{value} // value = 0, 1
```
#### flex: 1;
```
.flex-1 // flex: 1;
```

## [Box 盒模型](/common-style/box.html#box-盒模型)

#### Margin & Padding
```
.m{direction}-{value}
.p{direction}-{value}
// direction = l, r, t, b, x, y, a
// value = 0, 2, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 50, 60, 70, 80, 90, 100, auto
```
#### Width
```
.w-{value}
// value = 50, 60, 70, 80, 90, 100, 120, 150, 180, 200, 220, 250, 280, 300, 320, 350, 380, 400, 420, 450, 480, 500, 520, 550, 580, 600, 620, 650, 680, 700, 800, 900, 1000, 1200
.width-100-percent // width: 100%;
.height-100-percent // height: 100%;
```
#### border-radius
```
.border-radius-{value} // value = 0, 3, 5, 8, 10, 12, 15, 18, 20
.border-radius-50 // border-radius: 50%;
```
#### border: 0
```
.border-0 // border: 0;
```
## [Font 字体/文档流](/common-style/font.html#font-字体-文档流)

#### Font-size
```
.font-s-{value} // value = 12, 14, 16, 18, 20, 22, 24, 26, 28, 30
```
#### Font-weight
```
.font-w-{value} // value = 100, 200, 300, 400, 500, 600, 700, 800, 900
```
#### Float
```
.float-{value} // value = left, right, start, end, none
```
#### Text-align
```
.text-{value} // value = left, right, center
```
#### n行超出省略
```
// 单行超出省略
.text-ellipsis-1
// n行超出省略
.text-ellipsis-{value} // value = 2, 3, 4, 5, 8, 10
```
#### 英文或数字换行
```
.word-wrap-break-all
```
#### 英文或数字不换行，其他换行
```
.word-wrap-break-word
```
#### 禁止选中文本
```
.select-disabled
```