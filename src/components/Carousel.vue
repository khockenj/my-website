<template>
  <div id='carousel'>

    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;object-fit: cover;"
      ref='projectCarousel'
    >
    <b-carousel-slide
     
        v-for="i in testImages[tab]"
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
     return { images: [
               {'url': '/figoskirun.jpg', 'caption': 'ooga booga', 'text': 'i love running'},
               {'url': '/league.jpeg', 'caption': 'league of legends', 'text': 'i love league of legends'}
               ],

               testImages: {
               "LOM": [
               {'url': 'https://picsum.photos/1024/480/?image=52', 'caption': 'ooga booga', 'text': 'i love running'},
               {'url': 'https://picsum.photos/1024/480/?image=57', 'caption': 'ooga booga2', 'text': 'i love running2'}
               ],
               "SITE": [
               {'url': 'https://picsum.photos/1024/480/?image=58', 'caption': 'league of legends', 'text': 'i love league of legends'},
               {'url': 'https://picsum.photos/1024/480/?image=52', 'caption': 'teamfight tactics', 'text': 'i love teamfight tactics'}
               ]
               }
  }
  }
}
</script>

<style scoped>
#carousel {
    text-align:center;
}
</style>