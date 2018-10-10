import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 定义一个懒加载方法来加载组件,这样就不用import每一个组件名称了
// 效果:只有当路由匹配成功时，才会加载相应的组件，而且加载一次后会将它缓存，下次再访问这个路由，不会重新加载。
function loadView (view) {
  return () => import(`./views/${view}.vue`) // 表示加载当前目录下的views文件夹下的组件
}
// export default 用于对外输出本模块变量的接口,用export default 定义的接口,外部模块在加载的时候,只需要import name from './本文件名(不要后缀)'即可加载
export default new Router({ // 这里指定一个router的实例对象为对外接口
  routes: [
    {
      path: '/home',
      name: 'home', // 定义name属性之后,在router-link to="name",可替换to="/"
      component: loadView('Home')
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    },
    {
      path: '/',
      name: 'home',
      redirect: '/home' // 重定向,一进页面就定向到home组件
    },
    {
      path: '/01',
      name: '01',
      component: loadView('01')
    }
  ]
})
