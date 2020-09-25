<template>
  <li @mouseenter="enter" @mouseleave="out" :style="{backgroundColor:bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="show" @click="deleteItem">删除</button>
  </li>
</template>

<script>
import PubSub from "pubsub-js"
export default {
  name: 'TodoItem',
  data () {
    return {
      show: false,
      bgColor: 'white'
    }
  },
  props: {
    index: Number,
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    enter () {
      this.show = !this.show
      this.bgColor = 'rgba(0,0,0,.1)'
    },
    out () {
      this.show = !this.show
      this.bgColor = 'white'
    },
    deleteItem () {
      let index = this.index
      const title = this.todo.title
      if (window.confirm(`确认删除${title}吗`)) {
        //  this.deleteTodo(index)
        // 发布消息
        PubSub.publish('deleteTodo',index)
      }
    }
  }
}
</script>

<style>

</style>
