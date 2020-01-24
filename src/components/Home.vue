<template>
  <div id="home" style='height:100%;'>
    <Jumbotron style='padding-top:7.5%;' />
    <Footer class="navbar mt-4 mb-0 py-3"/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Jumbotron from './Jumbotron.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Jumbotron
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgba(0,0,0,0.85);
}
</style>
