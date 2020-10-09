// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
//  引入css文件
import './base.css'
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
//   store
// })

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
