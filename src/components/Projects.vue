<template>
<div>
  <b-card>
    <b-media>
      <template v-slot:aside>
        <b-img src='/lom.png' width="96" alt="League of Mentoring"></b-img>
      </template>

      <h5 class="mt-0">League of Mentoring</h5>
      <p>
        here's a real vague description of the project. it's really cool and does awesome things so you probably should hire me.
      </p>
      <p>
        Other interesting technologies used: 
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
          <i class="fab fa-python python" v-b-tooltip.hover title="Python"></i>
        </template>

        <h5 class="mt-0">Python</h5>
        <p class="mb-0">
          i did really cool things with python bro
        </p>
      </b-media>

    <b-media>
        <template v-slot:aside>
                <i class="fas fa-flask npm" v-b-tooltip.hover title="Flask"></i>
        </template>

        <h5 class="mt-0">Flask</h5>
        <p class="mb-0">
          i did really cool things with python bro
        </p>
      </b-media>

    <b-media>
        <template v-slot:aside>
                <i class="fas fa-database" v-b-tooltip.hover title="MongoDB"></i>
        </template>

        <h5 class="mt-0">MongoDB</h5>
        <p class="mb-0">
          i did really cool things with python bro
        </p>
      </b-media>

 </b-media>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
.fab, .fas {
  font-size: 96px;
  padding-top: 1rem;
}
</style>