<template>
  <div id="roadmap">
  <b-card title="Projects Roadmap" sub-title="Last Update: 1/29/2020">
  <ul class="list-unstyled">
    <b-media tag="li">
      <template v-slot:aside>
         <i class="fas fa-code big bootstrap"></i>
      </template>
      <h5 class="mt-0 mb-1">My Website</h5>
      <p class="mb-0">
        My primary objective is to complete this website first so I can use it as a place to access all of my future projects all in one place. 
      </p>
      <p><b-badge variant='danger'>February 2020</b-badge></p>
    </b-media>

    <b-media tag="li" class="my-4">
      <template v-slot:aside>
       <i class="fas fa-laptop-code big css3"></i>
      </template>

      <h5 class="mt-0 mb-1">League of Mentoring</h5>
      <p class="mb-0">
        This project is nearing completion for it's initial launch. The only things remaining to be built out are the review system and the scheduling system along with testing, fulltime hosting setup and deployment.
        After working out any issues after launch a way to track your stats and improvement may be added using the Riot API.
      </p>
      <p><b-badge variant='danger'>March 2020</b-badge></p>
    </b-media>

    <b-media tag="li">
      <template v-slot:aside>
        <i class="fas fa-gamepad big node"></i>
      </template>

      <h5 class="mt-0 mb-1">HTML5 Canvas Game</h5>
      <p class="mb-0">
       I'm not 100% sure on what type of game I want to make, but I've been interested in HTML5 Canvases since HTML5's initial release. I've messed around with them and Pixi.js before, so I'm hoping to build out a full (small-scale) project.
       I want to create something that is vastly different in nature from any other project I've worked on before, and for me this would be a good indicator if I have a passion for designing games (even if on a smaller, browser-based level).
      </p>
      <p><b-badge variant='danger'>Mid/Late 2020</b-badge></p>
    </b-media>
  </ul>
  </b-card>
  </div>
</template>

<script>

export default {
  name: 'Roadmap'
}
</script>

<style scoped>
#roadmap {
  text-align:left;
  padding-top:2em;
  width:75%;
  margin:auto;
}
.big {
  font-size:64px;
}
</style>