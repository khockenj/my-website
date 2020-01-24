<template>
  <b-jumbotron bg-variant="dark" text-variant="light">
    <template v-slot:header>Kevin Hockenjos</template>

    <template v-slot:lead>
        Welcome to a website all about me
    </template>
    <b-button class='button' variant="primary" href="#">About Me</b-button>
    <b-button class='button' variant="success" href="#">My Projects</b-button>
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
}
</style>