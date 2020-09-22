# VUE学习笔记

-----------------

##  Vue.js是什么

Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层
在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

##  Vue入门使用

1.  引入Vue.js
2.  创建Vue对象

```javascript
new Vue({
  el:指定根element选择器,
  data:初始化数据
})
```
3.  双向数据绑定:v-model
4.  显示数据{{xxx}}
5.  理解vue的mvvm实现
  - m:数据模型,数据对象(data)
  - v:视图(DOM),模板页面
  - vm:视图模型 (Vue实例对象)

##  Vue常用指令：

- v-model：数据绑定
- v-if：条件
- v-for：循环
- v-on:事件绑定
- v-bind:给组件中定义的属性从Vue对象的data中绑定数据赋值
- v-once:只渲染元素和组件一次
- v-html:



