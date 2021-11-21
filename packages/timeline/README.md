### ep-timeline [返回](../#组件说明)

时间轴组件

ep-timeline Attributes

| 参数       | 说明                                         | 类型                       | 默认值 |
| :--------- | :------------------------------------------- | :------------------------- | ------ |
| pending    | 指定最后一个幽灵节点是否存在或内容           | boolean \| string \| slot  | false  |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点     | string \| slot             |        |
| mode       | 通过设置 mode 可以改变时间轴和内容的相对位置 | left \| alternate \| right |        |

ep-timeline-item Attributes

| 参数     | 说明                                          | 类型           | 默认值 |
| :------- | :-------------------------------------------- | :------------- | ------ |
| color    | 指定圆圈颜色 blue, red, green，或自定义的色值 | string         | blue   |
| dot      | 自定义时间轴点                                | string \| slot |        |
| position | 自定义节点位置                                | left \| right  |        |

```javascript
<template>
  <ep-timeline style="marginTop: 10px" pending="Recording..." mode="alternate">
    <ep-timeline-item color="#000" position="left">
      <i slot="dot" class="el-icon-eleme"></i>
      Technical testing 2015-09-01
    </ep-timeline-item>
    <ep-timeline-item position="right">
      Create a services site 2015-10-01
    </ep-timeline-item>
    <ep-timeline-item position="left">
      Network problems being solved 2015-11-01
    </ep-timeline-item>
  </ep-timeline>
</template>
```
