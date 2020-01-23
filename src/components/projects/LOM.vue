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
        <br /><b-button variant='primary' style='margin-top:1rem;' size="sm" @click="toggleSideTech">Other Technologies</b-button>
        <b-alert style='margin:1rem;padding-top:0;' variant='info' :show="showTech" fade><i class="fab fa-bootstrap bootstrap text" v-b-tooltip.hover title="Bootstrap 4"></i></b-alert>
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
    name: 'LOM',
    data() {
      return {
        showTech: false
      }
    },
    methods: {
      toggleSideTech() {
        this.showTech = !this.showTech;
      }
    }
}
</script>

<style scoped>
.fab, .fas {
  font-size: 96px;
  padding-top: 1rem;
}
.text {
  font-size:36px;
}
.card {
  border-top:0;
}
.card-body{
    padding-top:0;
}
</style>