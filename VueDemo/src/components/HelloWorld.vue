
<template>
  <div>
    <p class='msg'>{{msg}}</p>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    data(){
      return {
        msg:'Hello Vue Component'
      }
    }
  }
</script>

<style>
  .msg{
    color: red;
    font-size: 30px;
  }
</style>
