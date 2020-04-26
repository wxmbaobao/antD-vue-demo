import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import RouterDemo from './components/routerdemo/index.vue'
import DongtaiDemo from './components/routerdemo/dongtai.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// 模块化写法，要以 .vue文件导入进来

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/helloworld', component: HelloWorld },
  { path: '/router', component: RouterDemo },
  // 动态路径参数 以冒号开头
  { path: '/router1/:id', component: DongtaiDemo },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
