<template>
  <div id="app" style='height:100%;'>
    <Jumbotron style='padding-top:7.5%;' />
    <Tabs style='width:75%;margin:auto;' />
    <Carousel style='width:75%;margin:auto;display:none;' />
    <Projects  style='width:75%;margin:auto;display:none;'/>
    <Skills style='display:none;'/>
    <Footer class="navbar mt-4 mb-0 py-3"/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
import Projects from './components/Projects.vue'
import Jumbotron from './components/Jumbotron.vue'
import Tabs from './components/Tabs.vue'


export default {
  name: 'app',
  components: {
    Carousel,
    Footer,
    Skills,
    Projects,
    Jumbotron,
    Tabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgba(0,0,0,0.85);
}
</style>
