<template>
  <div>
    <img src='./assets/logo.png' alt='logo'>
    <HelloWorld />
  </div>
</template>

<script>
/* eslint-disable */
  import HelloWorld from './components/HelloWorld'
  export default {
    components:{
      HelloWorld
    }
  }
</script>

<style>
  img{
    width: 300px;
    height: 300px;
  }
</style>
