<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  name: 'TodoList',
  props: ['todos', 'deleteTodo'],
  components: {
    TodoItem
  }
}
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
