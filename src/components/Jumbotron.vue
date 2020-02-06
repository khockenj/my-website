<template>
  <b-jumbotron bg-variant="dark" text-variant="light">
    <template v-slot:header>Kevin Hockenjos</template>

    <template v-slot:lead>Software developer, data nerd, game enthusiast</template>
    <div class='button-holder'>
    <b-button class='button' variant="primary" to='/about'><i class="far fa-user"></i>About Me</b-button>
    <b-button class='button' variant="success" to='/projects'><i class="fas fa-tasks"></i>My Projects</b-button>
    </div>
  </b-jumbotron>
</template>
<script>
export default {
    name: 'Jumbotron'
}
</script>

<style scoped>
.button {
  margin:.2rem;
  font-size:1.1rem;
  padding:1rem;
}
.far, .fas {
  padding-right:.4rem;
}
.jumbotron {
  margin-bottom:0;
  padding-bottom:2rem;
}
.button-holder {
  padding-top:1rem;
}
</style>