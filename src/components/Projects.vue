<template>
  <div id="roadmap">
    <Carousel :tab='tab' />
    <Tabs style='width:75%;margin:auto;' v-on:setTab="tab = $event" />
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