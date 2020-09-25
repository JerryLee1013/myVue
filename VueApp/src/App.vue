<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader @addTodo="addTodo"/>-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
      <todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}}</span> / 全部{{todos.length}}
        <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<!--
  绑定事件监听   ---订阅消息
  触发事件      ---发布消息
-->

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import storageUtil from './util/storageUtil'
  export default {
    name: 'App',
    data () {
      return {
        todos: storageUtil.readTodos()
      }
    },
    mounted () {
      //  给 <TodoHeader ref="header"/>绑定事件
      this.$refs.header.$on('addTodo', this.addTodo)

      //  订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAllTodos (check) {
        this.todos.forEach(todo => {
          todo.complete = check
        })
      }
    },
    watch: {
      todos: {
        //  深度监视
        deep: true,
        //  处理监视回调函数
        // handler: function (newValue) {
        //   //  将todos最新的JSON数据值保存到localStorage
        //   storageUtil.saveTodos(newValue)
        // }
        handler: storageUtil.saveTodos
      }
    },
    computed: {
      completeSize () {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
      isAllCheck: {
        get () {
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        set (value) {
          //  value是当前checkbox的最新值
          this.selectAllTodos(value)
        }
      }
    }
  }
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
