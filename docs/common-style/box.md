# Box 盒模型

`margin`, `padding`, `width`, `height: 100%`, `border-radius` 相关。

## Margin & Padding

指定元素的 `margin` 和 `padding` 属性。     
以 left、right、top、bottom、x(左右)、y(上下)、all(全部) 几个方面来设定。

> **margin 类名：`.m{direction}-{value}`**     
> **padding 类名：`.p{direction}-{value}`**

该 direction 属性的值是以下之一：
- l
- r
- t
- b
- x
- y
- a

该 value 属性的值是以下之一：    
0, 2, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 50, 60, 70, 80, 90, 100, auto


::: demo

```html
<template>
  <div class="border-gray">
    <div class="bg-green mx-auto w-80 pa-5">mx-auto</div>
  </div>
</template>
```

:::


## Width

指定元素的 `width` 属性。     

> **类名：`.w-{value}`**  

该 value 属性的值是以下之一：     
50, 60, 70, 80, 90, 100, 120, 150, 180, 200, 220, 250, 280, 300, 320, 350, 380, 400, 420, 450, 480, 500, 520, 550, 580, 600, 620, 650, 680, 700, 800, 900, 1000, 1200     

---

- **百分百宽高**
> **百分百宽类名：`.width-100-percent`** 即：`width: 100%;`   
> **百分百高类名：`.height-100-percent`** 即：`height: 100%;` 



## border-radius 圆角

指定元素的 `border-radius` 属性。     

> **类名：`.border-radius-{value}`**  

该 value 属性的值是以下之一：     
0, 2, 5, 8, 10, 12, 15, 18, 20    

---

- **单独封装了 border-radius: 50%**
> **类名：`.border-radius-50`** 即：`border-radius: 50%;`   

## border 边框

指定元素的 `border` 属性。     

- **单独封装了 border: 0**
> **类名：`.border-0`** 即：`border: 0;`   