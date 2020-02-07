<template>
  <div id="home">
    <Jumbotron />
    <HomeCards />
  </div>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import HomeCards from './HomeCards.vue'
export default {
  name: 'Home',
  components: {
    Jumbotron,
    HomeCards
  }
}
</script>

