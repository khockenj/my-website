<template>
  <div>
    <b-tabs @activate-tab="changeTab" v-model="tabIndex" content-class="mt-3" justified>
      <b-tab title="My Website" active>
        <Website />
      </b-tab>
      <b-tab title="League of Mentoring">
        <LOM />
      </b-tab>
      <b-tab disabled>
        <template v-slot:title>
          US Data Plotting
          <b-badge variant="danger">Coming Soon</b-badge>
        </template>
        <USPlot />
      </b-tab>
      <b-tab disabled>
        <template v-slot:title>
          Stock Tracker
          <b-badge variant="danger">Coming Soon</b-badge>
        </template>
        <StockTracker />
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import LOM from "./projects/LOM.vue";
import Website from "./projects/Website.vue";
import StockTracker from "./projects/StockTracker.vue";
import USPlot from "./projects/USPlot.vue";

export default {
  name: "Tabs",
  components: {
    LOM,
    Website,
    StockTracker,
    USPlot
  },
  props: ["tab"],
  data() {
    return {
      tabIndex: 1
    };
  },
  methods: {
    changeTab(tab) {
      switch (tab) {
        case 0:
          this.$emit("setTab", "SITE");
          break;
        case 1:
          this.$emit("setTab", "LOM");
          break;
      }
    }
  },
  updated: function() {
    switch (this.tab) {
      case "SITE":
        this.tabIndex = 0;
        break;
      case "LOM":
        this.tabIndex = 1;
        break;
    }
  }
};
</script>

<style scoped>
div {
  background-color: #fff;
  text-align: left;
}
</style>