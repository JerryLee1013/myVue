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
      this.$store.dispatch('deleteTodo', this.index)
    }
  }
}
</script>

<style>

</style>
