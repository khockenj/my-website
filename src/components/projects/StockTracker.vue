<template>
<div>
  <b-card>
    <b-media>
      <template v-slot:aside>
        <i class="fas fa-desktop"></i>
      </template>

      <h5 class="mt-0">My Website</h5>
      <p>
        I made this website as a home page for myself.
      </p>
      <p>
        Other interesting technologies used: <i class="fab fa-bootstrap bootstrap text" v-b-tooltip.hover title="Bootstrap 4"></i>
      </p>

      <b-media>
        <template v-slot:aside>
          <i class="fab fa-vuejs vue" v-b-tooltip.hover title="Vue.js"></i>
        </template>

        <h5 class="mt-0">Vue</h5>
        <p class="mb-0">
          i did really cool things with vue.js
        </p>
      </b-media>

      <b-media>
        <template v-slot:aside>
        <i class="fab fa-bootstrap bootstrap" v-b-tooltip.hover title="Bootstrap 4"></i>
        </template>

        <h5 class="mt-0">Bootstrap</h5>
        <p class="mb-0">
          i did really cool things with boot4
        </p>
      </b-media>

 </b-media>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'StockTracker'
}
</script>

<style scoped>
.fab, .fas {
  font-size: 96px;
  padding-top: 1rem;
}
.text {
  font-size:24px;
}
.card {
  border-top:0;
}
.card-body{
    padding-top:0;
}
</style>