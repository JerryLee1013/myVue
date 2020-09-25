<template>
  <div>
    <mt-button type="primary" size="large" @click.native="handleClick">Test</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'App',
  methods: {
    handleClick () {
      Toast('提示信息')
    }
  }
}
</script>

<style>

</style>
