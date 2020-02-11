<template>
  <div id="aboutMe">
    <b-card header="About Me" title="Page in progress :)">
        <b-media>
          <template v-slot:aside>
            <b-img src="/me.jpg" class='big-img' alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0">Me</h5>
          <p>
           I'm a 22 year old Software Developer from New York. I graduated from Stevens Institute of Technology in May 2019 with a Bachelor's of Engineering in Software Engineering.
          </p>
          <b-media>
            <template v-slot:aside>
              <i class="fas fa-code big"></i>
            </template>

            <h5 class="mt-0">Software Interests</h5>
            <p class="mb-0">
              Currently, my interests within Software Development are mainly focused in Data Analysis and Full Stack Development.
            </p>
          </b-media>
          
        </b-media>
      </b-card>

  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style scoped>
#aboutMe {
  padding-top: 2em;
  width: 75%;
  margin: auto;
  text-align: left;
}

.card-header {
  text-align: center;
  font-size: 24px;
  color: #949494;
}
.card-subtitle,
.card-title {
  text-align: center;
  color: #949494;
  font-size: 16px;
}
.media {
  padding: 0.75rem;
}

@media (min-width: 576px) {
  .big {
    font-size: 4rem;
    padding-top: 1rem;
  }
  .big-img {
    width:6rem;
  }
}

@media (max-width: 575px) {
  .big {
    font-size: 2rem;
    padding-top: 1rem;
  }
.big-img {
    width:3rem;
  }
}
</style>