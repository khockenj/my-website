<template>
  <div>
    <b-card>
      <b-media>
        <template v-slot:aside>
          <b-img src="/lom.png" class="img-tab" alt="League of Mentoring"></b-img>
        </template>

        <h5 class="mt-0">League of Mentoring</h5>
        <p>
          League of Mentoring is a community that connects League of Legends players and coaches to help enable both students and coaches to improve their craft.
          This project was created to streamline the process of connecting students and mentors, cutting down excess time spent on scheduling sessions and replying to messages and creating more time for actual coaching.
          It is a full stack web application that allows for things like signing up, logging in, scheduling coaching, reviews, and 3rd party integrations.
          <br />

          <span data-toggle="tooltip" tabindex="0" v-b-tooltip.hover title="Coming Soon!">
            <b-button
              variant="success"
              class="mt-2 mx-1"
              size="sm"
              style="pointer-events:none;"
              disabled
            >
              <i class="fas fa-sitemap regular"></i>Website
            </b-button>
          </span>
          <b-button variant="primary" class="mt-2 mr-1" size="sm" @click="toggleSideTech">
            <i class="fas fa-cogs regular"></i>Other Technologies
          </b-button>
          <b-alert style="margin:1rem;padding-top:0;" variant="info" :show="showTech" fade>
            <i class="fab fa-bootstrap bootstrap text px-1" v-b-tooltip.hover title="Bootstrap 4"></i>
            <i class="fas fa-laptop-code text px-1" v-b-tooltip.hover title="Axios"></i>
          </b-alert>
        </p>

        <b-media>
          <template v-slot:aside>
            <i class="fab fa-vuejs vue" v-b-tooltip.hover title="Vue.js"></i>
          </template>

          <h5 class="mt-0">Vue</h5>
          <p class="mb-0">
            While Vue might be a little less common, I decided on it because of
            <a href="https://2019.stateofjs.com/overview/">this</a> super interesting website which piqued my interest in Vue as an up and coming framework.
            I used Vue to manipulate the DOM and to pass data to and from the backend and update the page accordingly. One of the coolest things (in my opinion) that I did was making a live search of coaches.
          </p>
        </b-media>

        <b-media>
          <template v-slot:aside>
            <i class="fab fa-python python" v-b-tooltip.hover title="Python"></i>
          </template>

          <h5 class="mt-0">Python</h5>
          <p class="mb-0">
            I decided on Python for the backend mostly because I'm very familiar with Python and Flask. I used Python to pull data from 3rd party resources such as Discord Oauth(for logging in),
            Twitch API to show which coaches were live streaming, Riot API to pull statistics and accounts from players, and also from Riot, but from their static API, I pulled champion skins and images that can be set as your profile background.
          </p>
        </b-media>

        <b-media>
          <template v-slot:aside>
            <i class="fas fa-flask npm" v-b-tooltip.hover title="Flask"></i>
          </template>

          <h5 class="mt-0">Flask</h5>
          <p
            class="mb-0"
          >I used the Flask microframework to create a RESTful API that is used in cooperation with Vue to load information from the backend (mongoDB and other resources) to represent and visualize on the frontend.</p>
        </b-media>

        <b-media>
          <template v-slot:aside>
            <i class="fas fa-database" v-b-tooltip.hover title="MongoDB"></i>
          </template>

          <h5 class="mt-0">MongoDB</h5>
          <p
            class="mb-0"
          >I went with MongoDB because I wanted to utilize a noSQL database solution that has good Python and Flask support. I used the Flask-PyMongo module to bridge Flask and PyMongo to be able to easily utilize the features of MongoDB with my Flask infrastructure.</p>
        </b-media>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "LOM",
  data() {
    return {
      showTech: false
    };
  },
  methods: {
    toggleSideTech() {
      this.showTech = !this.showTech;
    }
  }
};
</script>

<style scoped>
@media (min-width: 576px) {
  .fab,
  .fas {
    font-size: 5.5rem;
    padding-top: 1rem;
  }

  .img-tab {
    width: 5.5rem;
  }
  .text {
    font-size: 36px;
    padding-top: 0.5rem;
    padding-left: 0.25rem;
  }
}

@media (max-width: 575px) {
  .fab,
  .fas {
    font-size: 3rem;
    padding-top: 1rem;
  }
  .img-tab {
    width: 3rem;
  }
  .text {
    font-size: 2rem;
    padding-top: 0.5rem;
    padding-left: 0.25rem;
    color: rgba(0, 0, 0, 11);
  }
}
.card {
  border-top: 0;
}
.card-body {
  padding-top: 0;
}
.regular {
  font-size: 16px;
  padding: 0.2rem 0.3rem 0 0;
}
</style>