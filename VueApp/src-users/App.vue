<template>
  <div class="container">
    <Search/>
    <Main/>
  </div>
</template>

<script>
// import axios from 'axios'
import Search from './components/Search'
import Main from './components/Main'
export default {
  name: 'App',
  mounted () {
  },
  components: {
    Search,
    Main
  }
}
</script>

<style>

</style>
