import Vue from 'vue'
import './plugins/axios'
import './server' 
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/stylus/main.styl'
import "ant-design-vue/dist/antd.less";
import './components/antd'

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  if (!store.state.logined && to.matched.some((item) => item.meta.login_required)) {
    next('/login')
  }else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
