<template>
<div>
  <b-card>
    <b-media>
      <template v-slot:aside>
        <i class="fas fa-desktop"></i>
      </template>

      <h5 class="mt-0">My Website</h5>
      <p>
        Welcome to my website! I mostly made this as a home/showcase for my projects that I've made over the years. If you have any questions for me, feel free to contact me below.
      <a href='https://github.com/khockenj/my-website'><i class="fab fa-github-square text" v-b-tooltip.hover title="Github"></i></a>
      </p>

      <b-media>
        <template v-slot:aside>
          <i class="fab fa-vuejs vue" v-b-tooltip.hover title="Vue.js"></i>
        </template>

        <h5 class="mt-0">Vue</h5>
        <p class="mb-0">
          This is actually my second project with Vue. I felt very comfortable with it after working on another project with it, so I decided to continue my learning with it on here. 
        
        </p>
      </b-media>

      <b-media>
        <template v-slot:aside>
        <i class="fab fa-bootstrap bootstrap" v-b-tooltip.hover title="Bootstrap 4"></i>
        </template>

        <h5 class="mt-0">Bootstrap</h5>
        <p class="mb-0">
          I used Bootstrap-Vue which is an implementation of Bootstrap with the Vue framework. It allows for quick and easy Bootstrap layouts to be designed completely in-sync with Vue.
        </p>
      </b-media>

 </b-media>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'Website'
}
</script>

<style scoped>
@media (min-width: 576px) {
.fab, .fas {
  font-size: 5.5rem;
  padding-top: 1rem;
}

.text {
  font-size:48px;
  padding-top:.5rem;
  padding-left:.25rem;
  color: rgba(0,0,0,11);
}

}

@media (max-width: 575px){
.fab, .fas {
  font-size: 3rem;
  padding-top: 1rem;
}

.text {
  font-size:2rem;
  padding-top:.5rem;
  padding-left:.25rem;
  color: rgba(0,0,0,11);
}
}

.card {
  border-top:0;
}
.card-body{
    padding-top:0;
}
</style>