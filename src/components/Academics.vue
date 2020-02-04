<template>
  <div id="academics">
    <b-card class="deck-holder">
       <template v-slot:header>
      <span class='pseudo-header'>Academics &amp; Work Experience</span>
    </template>
      <b-card-group deck class='justify-content-center'>
        <b-card
          header="Education"
          class="schools"
          no-body
          border-variant="success"
          header-bg-variant="success"
          header-text-variant="white"
        >
          <div><a href='http://www.bellmore-merrick.k12.ny.us/schools/sanford_h_calhoun_high_school' target="_blank" rel="nofollow noopener"><img class='card-img' src='/calhoun.png' alt="Sanford H. Calhoun High School" /></a></div>
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
          header="Education"
          class="schools"
          no-body
                    border-variant="success"
          header-bg-variant="success"
          header-text-variant="white"
        >
          <div><a href='https://www.stevens.edu/school-systems-enterprises/undergraduate-programs/software-engineering' target="_blank" rel="nofollow noopener"><img class='card-img' src='/stevens.png' alt="Stevens Institute of Technology" /></a></div>
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

      <b-card
          header="Work"
          class="schools"
          no-body
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <div><a href='https://tcicredit.com/' target="_blank" rel="nofollow noopener"><img class='card-img' src='/tci.png' alt="Teledata Communications, Inc." /></a></div>
          <div class="pseudo-footer">
            <h5 class="text-muted">Teledata Communications, Inc.</h5>
          </div>
          <div class="pseudo-footer">
            <p class="text-muted">Technology Specialist</p>
          </div>
          <div class='work-location'><small class="text-muted">Islandia, New York</small></div>
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
  name: "Academics",
  components: {
  }
};
</script>

<style scoped>
#academics {
  padding-top: 2rem;
  width: 75%;
  margin: auto;
}
.work-location {
background-color: rgba(0, 0, 0, 0.03);
border-top: 1px solid rgba(0, 0, 0, 0.125);
padding:.25rem;
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
.card-img-top, .card-img {
  width: 100%;
  height: 18vw;
  object-fit: cover;
}
.deck-holder {
  background-color: rgba(255, 255, 255, .99);
}

.pseudo-header {
  text-align:center;
  font-size:24px;
  color:#949494;
}

</style>