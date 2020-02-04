import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import Academics from './components/Academics.vue'
import Work from './components/Work.vue'
import Skills from './components/Skills.vue'
import Roadmap from './components/Roadmap.vue'
import Projects from './components/Projects.vue'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutMe },
  { path: '/academics', component: Academics },
  { path: '/work', component: Work },
  { path: '/skills', component: Skills },
  { path: '/roadmap', component: Roadmap },
  { path: '/projects', name:"Projects",  component: Projects, props:true }
]

const router = new VueRouter({
  routes,
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  router,
  render: h => h(NavBar),
}).$mount('#navBar')

new Vue({
  router,
  render: h => h(Footer),
}).$mount('#footer')





