import '@babel/polyfill' // 加载ES6解析器
import Vue from 'vue' // 加载vue.js
import './plugins/vuetify' // 加载插件 vuetify.js
import './plugins/axios' // 加载插件 axios.js
import App from './App.vue' // 加载App.vue模板
import router from './router' // 加载router实例
import store from './store' // 加载Vuex
import 'bootstrap/dist/css/bootstrap.min.css'
import './registerServiceWorker' // 加载registerServiceWorker,在开发中，注册一个服务来为本地缓存提供服务。
import 'roboto-fontface/css/roboto/roboto-fontface.css' // 加载vuetify的css依赖
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 加载vuetify的css依赖

Vue.config.productionTip = false // 这个是设置浏览器打开时是否弹出提示

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 关于这个render: h => h(App) 的作用,等价于 render:function (creatElement){return createElement(App)}
// 使用这个函数会将传进去的(App)模板渲染为html结构,并且会返回这个html结构,会替换掉el指定的容器
// 等价于:
// import App from './App'
// new Vue({
//     el: '#root',
//     template: '<App></App>',
//     components: {
//         App
//     }
// })
// 区别:使用render渲染出来的组件会把整个el指定的容器替换掉,容器里面的内容全部失效,而使用el:'#app'的方法,不会替换整个#app,只会渲染插入的组件,其他内容不影响
// 关于.$mount('#app')
// 手动挂载,延迟注入 没有指定el:'#app'的情况下使用,等同于手动执行将模板实例挂载到#app标签中
