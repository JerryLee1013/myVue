# VUE学习笔记

-----------------

##  Vue.js是什么

Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层

##  Vue入门使用

1.引入Vue.js
2.创建Vue对象

```javascript
new Vue({
  el:指定根element选择器,
  data:初始化数据
})
```
3.双向数据绑定:v-model
4.显示数据{{xxx}}
5.理解vue的mvvm实现
  - m:数据模型
  - v:视图(DOM)
  - vm:视图模型 (Vue对象)

##  Vue常用指令：

- v-model：数据绑定
- v-if：条件
- v-for：循环
- v-on:事件绑定



