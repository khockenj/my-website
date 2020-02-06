<template>
  <div id="home">
    <Jumbotron />
    <HomeCarousel style='display:none;'/>
    <HomeCards />
  </div>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import HomeCarousel from './HomeCarousel.vue'
import HomeCards from './HomeCards.vue'
export default {
  name: 'Home',
  components: {
    Jumbotron,
    HomeCarousel,
    HomeCards
  }
}
</script>

