<template>
  <div id='carousel'>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-height="400"
      img-width="1500"
      style="text-shadow: 1px 1px 2px #333;object-fit: cover;"
      ref='projectCarousel'
    >
    <b-carousel-slide
     
        v-for="i in images[tab]"
        v-bind:key='i.url'
        :caption="i.caption"
        :text="i.text"
        :img-src="i.url"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['tab'],
  updated: function() {
    this.$refs.projectCarousel.setSlide(0);
  },
  data() {
    //Images are 1500Wx400H
     return { 
               images: {
               "SITE": [
               {'url': '/websitecode.png', 'caption': 'My Website', 'text': ''},
               {'url': '/github.png', 'caption': '', 'text': ''}
              
               ],
               "LOM": [
               {'url': '/placeholder.png', 'caption': 'League of Mentoring', 'text': 'Actual Pictures and link will be available soon :)'}
               ],
               "NYPLOT": [
               {'url': '/dataScience/preview.png', 'caption': '', 'text': ''},
                {'url': '/dataScience/preview2.png', 'caption': '', 'text': ''}
               ]
               },
  }
  }
}
</script>

<style scoped>

#carousel {
    text-align:center;
}

</style>