<template>
  <div id="work">
    <b-card class="deck-holder" title="Work Experience">
      <b-card-group deck class='justify-content-center'>
        <b-card
          class="schools"
          img-src="/tci.png"
          img-alt="Teledata Communications, Inc."
          img-top
          no-body
        >
          <div class="pseudo-footer">
            <h5 class="text-muted">Teledata Communications, Inc.</h5>
          </div>
          <div class="pseudo-footer">
            <p class="text-muted">Technology Specialist</p>
          </div>
          <template v-slot:footer>
            <small class="text-muted">June 2019 - Present</small>
          </template>
        </b-card>

      </b-card-group>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'Work'
}
</script>

<style scoped>
#work{
  padding-top: 2em;
  width: 75%;
  margin: auto;
}
.pseudo-footer {
  padding-top: 0.75rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.schools {
  max-width: 20rem;
  /* This spaces out the cards a bit more */
  /* margin:0 5rem 0rem 5rem!important; */
}
.big {
  font-size: 64px;
}
.card-img-top {
  width: 100%;
  height: 18vw;
  object-fit: cover;
}
.deck-holder {
  background-color: rgba(255, 255, 255, .99);
}
</style>