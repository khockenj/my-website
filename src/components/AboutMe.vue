<template>
  <div id="aboutMe">
    <b-card header="About Me">
        <b-media>
          <template v-slot:aside>
            <b-img src="/me.jpg" class='big-img' alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0">general ?</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <b-media>
            <template v-slot:aside>
              <i class="fas fa-city big"></i>
            </template>

            <h5 class="mt-0">what im looking for ?</h5>
            <p class="mb-0">
              Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
              faucibus. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
              faucibus. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
              faucibus.
            </p>
          </b-media>

          <b-media>
            <template v-slot:aside>
              <i class="fas fa-code big"></i>
            </template>

            <h5 class="mt-0">coding ?</h5>
            <p class="mb-0">
              Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
              faucibus.  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
              faucibus.  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
              faucibus.  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
              faucibus.
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