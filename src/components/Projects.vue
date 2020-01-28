<template>
  <div id="projects">
    <Carousel :tab='tab' />
    <Tabs v-on:setTab="tab = $event" />
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
import Carousel from './Carousel.vue'
export default {
  name: 'Projects',
  components: {
    Tabs,
    Carousel
  },
  data() {
    return {
      tab: 'LOM'
    }
  }
}
</script>

<style scoped>
#projects {
  width:75%;margin:auto;
}
</style>