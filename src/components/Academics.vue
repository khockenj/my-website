<template>
  <div id="academics">
    <b-card class="deck-holder" title="My Academics">
      <b-card-group deck class='justify-content-center'>
        <b-card
          class="schools"
          img-src="/calhoun.png"
          img-alt="Sanford H. Calhoun High School"
          img-top
          no-body
        >
          <div class="pseudo-footer">
            <h5 class="text-muted">Sanford H. Calhoun High School</h5>
          </div>
          <div class="pseudo-footer">
            <p class="text-muted">Regents Diploma with Advanced Designation</p>
          </div>
          <template v-slot:footer>
            <small class="text-muted">September 2011 - May 2015</small>
          </template>
        </b-card>

        <b-card
          class="schools"
          img-src="/stevens.png"
          img-alt="Stevens Institute of Technology"
          img-top
          no-body
        >
          <div class="pseudo-footer">
            <h5 class="text-muted">Stevens Institute of Technology</h5>
          </div>
          <div class="pseudo-footer">
            <p class="text-muted">Bachelor of Engineering in Software Engineering</p>
          </div>
          <template v-slot:footer>
            <small class="text-muted">September 2015 - May 2019</small>
          </template>
        </b-card>

      </b-card-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Academics"
};
</script>

<style scoped>
#academics {
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
  background-color: rgba(255, 255, 255, 0.99);
}
</style>