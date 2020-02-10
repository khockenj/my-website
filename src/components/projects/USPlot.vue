<template>
<div>
  <b-card>
    <b-media>
      <template v-slot:aside>
        <i class="fas fa-drafting-compass bootstrap color-2"></i>
      </template>

      <h5 class="mt-0">NY Population Data Visualizations</h5>
      <p>
        In this project, I used shapefiles (data + geometric location without topological info) found on the data.gov website that represented the populations of different places in NY over different periods of time. 
        I used pandas, geopandas, matplotlib, and numpy to turn this into different visualizations of population in New York State. When I have the time, I would like to 
         continue and turn these static visualizations to interactable web versions via JavaScript. This was a good first step for me in terms of presenting data in a easily digestable format and I would to like to further that by allowing users to interact.
   
  <br />
  <b-button variant="primary" class="mt-2 mr-1" size="sm" v-b-modal.image-modal>
            <i class="fas fa-images regular"></i>Images
          </b-button>

   <b-button href="https://www.data.gov/" target="_blank" rel="nofollow noopener" variant="success" class="mt-2 mr-1" size="sm">
            <i class="fas fa-globe-americas regular"></i>Data.gov
          </b-button>
          </p>
      

 </b-media>
  </b-card>
<!--Modal-->
<b-modal size='xl' id="image-modal" title="Images" scrollable ok-only>
  <div class='modal-center'>
    <img :key=i v-for='i in this.images' :src="'dataScience/' + i" />
    </div>
  </b-modal>
</div>
</template>

<script>
export default {
    name: 'USPlot',
    data() {
      return {
        images: ["NYCPOPbyzip.png", "NYS_POP19902010.png", "NYS_POP19902010num.png", "NYS_POP20002010.png", "NYS_POP20002010num.png"]
      }
    }
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

.regular {
  font-size: 16px;
  padding: 0.2rem 0.3rem 0 0;
}

.modal-center {
  margin:auto;
  text-align:center;
}
</style>