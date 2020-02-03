<template>
<div class='skills'>
<i class="fab fa-html5 html5" v-b-tooltip.hover title="HTML5"></i>
<i class="fab fa-css3-alt css3" v-b-tooltip.hover title="CSS3"></i>
<i class="fab fa-css3 css3" v-b-tooltip.hover title="CSS3"></i>
<i class="fab fa-js-square js" v-b-tooltip.hover title="JavaScript"></i>
<i class="fab fa-vuejs vue" v-b-tooltip.hover title="Vue.js"></i>
<i class="fab fa-python python" v-b-tooltip.hover title="Python"></i>
<i class="fab fa-python python-alt" v-b-tooltip.hover title="Python"></i>
<i class="fab fa-npm npm" v-b-tooltip.hover title="npm"></i>
<i class="fab fa-node-js node" v-b-tooltip.hover title="node.js"></i>
<i class="fab fa-node node" v-b-tooltip.hover title="node.js"></i>
<i class="fab fa-bootstrap bootstrap" v-b-tooltip.hover title="Bootstrap 4"></i>
<i class="fab fa-windows" v-b-tooltip.hover title="Microsoft Office"></i>
<i class="fab fa-google-drive" v-b-tooltip.hover title="Google Drive"></i>
</div>
</template>
<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
.skills {
  background-color:rgba(0,0,0,0.95);
  height:100%;
  color: rgba(255,255,255,0.4);
  font-size:36px;
}
.fab, .fas {
    padding: .5rem;
}
</style>