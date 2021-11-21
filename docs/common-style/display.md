# Display 布局

## Display

指定元素的 `display` 属性。

> **类名：`.d-{value}`**

该 value 属性的值是以下之一：
- none
- block
- inline
- inline-block
- table
- table-cell
- table-column
- table-row
- flex
- inline-flex
- grid
- inline-grid


::: demo

```html
<template>
  <div>
    <div class="d-flex justify-space-between">
      <div class="bg-green pa-5">green</div>
      <div class="flex-1 bg-blue pa-5">blue</div>
    </div>
  </div>
</template>
```

:::


## Flex (主轴) 方向

默认情况下, `d-flex` 应用于 `flex-direction: row` 并且一般可以省略。 但是，在某些情况下，您可能需要显式地定义它。

> **类名：`.flex-{value}`**

该 value 属性的值是以下之一：
- row
- column
- row-reverse
- column-reverse

::: demo

```html
<template>
  <div>
    <div class="d-flex flex-column mb-5">
      <span class="d-inline-block bg-green pa-5">flex-column</span>
      <span class="d-inline-block bg-blue pa-5">flex-column</span>
    </div>
    <div class="d-flex flex-row-reverse">
      <span class="d-inline-block flex-1 bg-green pa-5">flex-row-reverse</span>
      <span class="d-inline-block bg-blue pa-5">flex-row-reverse</span>
    </div>
  </div>
</template>
```

:::


## Flex 主轴对齐方式

可以改变 `justify-content` 设置. 默认情况下, 这将修改 **x轴** 上的 flex 项目

> **类名：`.justify-{value}`**

该 value 属性的值是以下之一：
- start
- end
- center
- space-between
- space-around
        
::: demo

```html
<template>
  <div>
    <div class="d-flex justify-end mb-5 border-gray">
      <div class="bg-green pa-5">justify-end</div>
      <div class="bg-blue pa-5">justify-end</div>
    </div>
    <div class="d-flex justify-space-between mb-5 border-gray">
      <div class="bg-green pa-5">justify-space-between</div>
      <div class="bg-blue pa-5">justify-space-between</div>
    </div>
    <div class="d-flex justify-space-around border-gray">
      <div class="bg-green pa-5">justify-space-around</div>
      <div class="bg-blue pa-5">justify-space-around</div>
    </div>
  </div>
</template>
```

:::

## Flex 交叉轴对齐方式

可以改变 `align-items` 设置. 默认情况下, 这将修改 **y轴** 上的 flex 项目

> **类名：`.align-{value}`**

该 value 属性的值是以下之一：
- start
- end
- center
- baseline
- stretch
        
::: demo

```html
<template>
  <div>
    <div class="d-flex border-gray align-center h-50 mb-5">
      <span class="bg-green pa-5">align-center</span>
      <span class="bg-blue pa-5">align-center</span>
    </div>
    <div class="d-flex border-gray align-start h-50 mb-5">
      <span class="bg-green pa-5">align-start</span>
      <span class="bg-blue pa-5">align-start</span>
    </div>
    <div class="d-flex border-gray align-end h-50">
      <span class="bg-green pa-5">align-end</span>
      <span class="bg-blue pa-5">align-end</span>
    </div>
  </div>
</template>
```

:::

## Flex 自身对齐

可以改变 `align-self` 设置. 默认情况下, 这将修改 **x轴** 上的 flex 项目

> **类名：`.align-self-{value}`**

该 value 属性的值是以下之一：
- auto
- start
- end
- center
- baseline
- stretch

## Flex 堆叠（换行）

可以改变 `flex-wrap` 设置. 默认情况下, 这将修改 **x轴** 上的 flex 项目

> **类名：`.flex-{value}`**

该 value 属性的值是以下之一：
- nowrap
- wrap
- wrap-reverse

## Flex 排序

可以改变 `order` 设置. 

> **类名：`.order-{value}`**

该 value 属性的值是以下之一：
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

## Flex 多轴对齐方式

可以改变 `align-content` 设置. 

> **类名：`.align-content-{value}`**

该 value 属性的值是以下之一：
- start
- end
- center
- space-between
- space-around
- stretch

## Flex 增长和收缩系数

可以改变 `flex-grow` 和 `flex-shrink` 设置. 

> **增长系数类名：`.flex-grow-{value}`**    
> **收缩系数类名：`.flex-shrink-{value}`**

该 value 属性的值是以下之一：
- 0
- 1

## Flex Item 自动填充

可以改变 `flex` 设置. 

> **类名：`.flex-1`**
> 即：`flex: 1;`


