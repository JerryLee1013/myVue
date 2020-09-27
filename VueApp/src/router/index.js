//  路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

//  引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import MessageDetail from '../pages/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  //  配置路由
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News
        },
        {
          path: 'message', // 简化写法
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id', // 简化写法
              component: MessageDetail
            }
          ]
        },
        {
          path: '',
          redirect: 'news'
        }
      ]
    }
  ]
})
