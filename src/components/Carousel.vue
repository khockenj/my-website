<template>
  <div id='carousel'>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100"
      img-height="100"
      style="text-shadow: 1px 1px 2px #333;object-fit: cover;"
    >
    <b-carousel-slide
        v-for="i in images"
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
  data() {
     return { images: [
               {'url': '/figoskirun.jpg', 'caption': 'ooga booga', 'text': 'i love running for charity'},
               {'url': '/league.jpeg', 'caption': 'league of legends', 'text': 'i love league of legends'}
               ]
  }}
}
</script>

<style scoped>
#carousel {
    text-align:center;
}
</style>