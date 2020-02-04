<template>
<div class='skills'>
<b-card 
header='Skills'
title='Page in Progress'
>
<div>
<i class="fab fa-html5 html5" v-b-tooltip.hover title="HTML5"></i>
<i class="fab fa-css3-alt css3" v-b-tooltip.hover title="CSS3"></i>
<i class="fab fa-js-square js" v-b-tooltip.hover title="JavaScript"></i>
<i class="fab fa-vuejs vue" v-b-tooltip.hover title="Vue.js"></i>
<i class="fab fa-python python" v-b-tooltip.hover title="Python"></i>
</div>
<div>
<i class="fab fa-npm npm" v-b-tooltip.hover title="npm"></i>
<i class="fab fa-node-js node" v-b-tooltip.hover title="node.js"></i>
<i class="fab fa-bootstrap bootstrap" v-b-tooltip.hover title="Bootstrap 4"></i>
<i class="fab fa-windows msft" v-b-tooltip.hover title="Microsoft Office"></i>
<i class="fab fa-google-drive gdrive" v-b-tooltip.hover title="Google Drive"></i>
</div>
</b-card>
</div>
</template>
<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
.skills {
  padding-top: 2rem;
  width: 75%;
  margin: auto;
  color: rgba(0,0,0,.4);
  font-size:64px;
}
.fab, .fas {
    padding: .5rem;
}

.card-header{
  text-align:center;
  font-size:24px;
  color:#949494;
}
.card-subtitle, .card-title {
  text-align:center;
  color:#949494;
  font-size:16px;
}
</style>