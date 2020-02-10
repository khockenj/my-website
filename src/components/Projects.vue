<template>
  <div id="projects">
    {{tab}}
    <Carousel :tab='tab' />
    <Tabs :tab='tab' v-on:setTab="tab = $event"/>
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
      tab: null,
    }
  },
  created: function() {
    if(this.$attrs.tab) {
      this.tab = this.$attrs.tab;
      this.$attrs.tab = null;
    } else {
      this.tab = 'SITE';
    }
  } 
}
</script>

<style scoped>
#projects {
  width:75%;margin:auto;
  padding-bottom:1rem;
}
</style>