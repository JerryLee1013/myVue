<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{msgDetail.id}}</li>
      <li>title:{{msgDetail.title}}</li>
      <li>content:{{msgDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MessageDetail',
  data () {
    return {
      msgDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMsgDetails = [
        {
          id: 1,
          title: 'message001',
          content: 'content001.....'
        },
        {
          id: 2,
          title: 'message002',
          content: 'content002.....'
        },
        {
          id: 3,
          title: 'message003',
          content: 'content003.....'
        },
        {
          id: 4,
          title: 'message004',
          content: 'content004.....'
        }
      ]
      this.allMsgDetails = allMsgDetails
      const id = this.$route.params.id * 1
      this.msgDetail = this.allMsgDetails.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value) {
      const id = value.params.id * 1
      this.msgDetail = this.allMsgDetails.find(detail => detail.id === id)
    }
  }
}
</script>

<style>

</style>
