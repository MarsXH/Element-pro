# Font 字体/文档流

`font-size`, `font-weight`, `float`, `text-align`, 文字换行, 禁止选中文本 相关。

## Font-size & Font-weight

指定元素的 `font-size` 和 `font-weight` 属性。     

> **类名：`.font-s-{sizeValue}`**     
> **类名：`.font-w-{weightValue}`**

该 `sizeValue` 属性的值是以下之一：    
12, 14, 16, 18, 20, 22, 24, 26, 28, 30    
    

该 `weightValue` 属性的值是以下之一：    
100, 200, 300, 400, 500, 600, 700, 800, 900


::: demo

```html
<template>
  <div>
    <p class="font-s-24">font-s-24</p>
    <p class="font-s-16 font-w-900">font-s-16&font-w-900</p>
  </div>
</template>
```

:::

## Float

指定元素的 `float` 属性。     

> **类名：`.float-{value}`**  

该 value 属性的值是以下之一：     
left, right, start, end, none


## Text-align

指定元素的 `text-align` 属性。     

> **类名：`.text-{value}`**  

该 value 属性的值是以下之一：     
left, right, center

## 单行超出省略

> **类名：`.text-ellipsis-1`**  

## n行超出省略

> **类名：`.text-ellipsis-{value}`**     
 
该 value 属性的值是以下之一：     
2, 3, 4, 5, 8, 10

## 英文或数字换行

> **类名：`.word-wrap-break-all`**     

## 英文或数字不换行，其他换行

> **类名：`.word-wrap-break-word`**     

## 禁止选中文本

> **类名：`.select-disabled`**     

  