<template>
    <div id='footer'>
      <div>
        <a href='https://github.com/khockenj'><i class="fab fa-github" v-b-tooltip.hover title="Github"></i></a>
        <a href='https://www.linkedin.com/in/kevin-hockenjos-264371107/'><i class="fab fa-linkedin" v-b-tooltip.hover title="LinkedIn"></i></a>
        <a href='mailto:khockenj@gmail.com'><i class="fas fa-at" v-b-tooltip.hover title="khockenj@gmail.com"></i></a>
        <a><i class="fas fa-paper-plane" v-b-tooltip.hover title="Contact Me"></i></a>
      </div>
      <div class='text'>&copy; 2020 Kevin Hockenjos</div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
  background-color:rgba(0,0,0,0.95);
  height:12%;
  width:100%;
  color: rgba(255,255,255,0.4);
  font-size:36px;
}
.text {
  font-size:18px;
}
.fab, .fas {
    padding: .3rem;
    color:rgba(255,255,255,0.4);
}
.fab:hover, .fas:hover {
  color: rgba(255,255,255,0.7);
}
</style>