<template>
  <div>
    <header class='site-header jumbotron'>
      <div class='container'>
        <div class='row'>
          <div class='col-xs-12'>
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class='container'>
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'

  export default {
    name: 'App',
    data () {
      return {
        comments: [
          {name: 'Bob', content: 'Vue还不错'},
          {name: 'Lucy', content: 'Vue比react容易'},
          {name: 'Jerry', content: 'Vue很好'}
        ]
      }
    },
    components: {
      Add,
      List
    },
    methods: {
      //  添加评论
      addComment (comment) {
        this.comments.unshift(comment)
      },
      //  删除评论
      deleteComment (index) {
        this.comments.splice(index, 1)
      }
    }
  }
</script>

<style>

</style>
