import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Roadmap from './components/Roadmap.vue'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/roadmap', component: Roadmap }
]

const router = new VueRouter({
  routes,
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(NavBar),
}).$mount('#navBar')





