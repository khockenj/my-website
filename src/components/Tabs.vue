<template>
<div>
  <b-tabs content-class="mt-3" justified>
    <b-tab title="My Website" active><Website /></b-tab>
    <b-tab title="League of Mentoring"><LOM /></b-tab>
     <b-tab disabled>
       <template v-slot:title>
         US Data Plotting  <b-badge variant="danger">Coming Soon</b-badge>
      </template>
      <USPlot />
      </b-tab>
       <b-tab disabled>
       <template v-slot:title>
         Stock Tracker  <b-badge variant="danger">Coming Soon</b-badge>
      </template>
      <StockTracker />
      </b-tab>
  </b-tabs>
</div>
</template>
<script>
import LOM from './projects/LOM.vue'
import Website from './projects/Website.vue'
import StockTracker from './projects/StockTracker.vue'
import USPlot from './projects/USPlot.vue'

export default {
  name: 'Tabs',
  components: {
    LOM,
    Website,
    StockTracker,
    USPlot
  }
}
</script>

<style scoped>
div {
background-color:#fff;
text-align:left;
}
</style>