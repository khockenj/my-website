<template>
    <div id='footer' class='navbar'>
      <div>
        <a href='https://github.com/khockenj' target="_blank" rel="nofollow noopener"><i class="fab fa-github" v-b-tooltip.hover title="Github"></i></a>
        <a href='https://www.linkedin.com/in/kevin-hockenjos-264371107/' target="_blank" rel="nofollow noopener"><i class="fab fa-linkedin" v-b-tooltip.hover title="LinkedIn"></i></a>
        <a href='mailto:khockenj@gmail.com'><i class="fas fa-paper-plane" v-b-tooltip.hover title="khockenj@gmail.com"></i></a>
        <a href='https://drive.google.com/file/d/1Wxca0DxutLRAWSDXOPhp7D2B1HytLYEv/view?usp=sharing' target="_blank" rel="nofollow noopener"><i class="fas fa-file-alt" v-b-tooltip.hover title="Resume"></i></a>
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
  flex:none;
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