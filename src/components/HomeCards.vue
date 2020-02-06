<template>
<div id='homecards'>
<b-card-group deck>
    <b-card title="tidbit 1" img-src="/me.jpg" img-alt="Image" img-top>
      <b-card-text>
        small tidbits of info about me! small tidbits of info about me! small tidbits of info about me! small tidbits of info about me!
      </b-card-text>
    </b-card>

   <b-card title="tidbit 2" img-src="/me.jpg" img-alt="Image" img-top>
      <b-card-text>
        small tidbits of info about me! small tidbits of info about me! 
      </b-card-text>
    </b-card>

    <b-card title="tidbit 3" img-src="/me.jpg" img-alt="Image" img-top>
      <b-card-text>
        small tidbits of info about me!
      </b-card-text>
    </b-card>
    
  </b-card-group>
  </div>
  </template>

  <script>
export default {
  name: 'HomeCards',
}
</script>

<style scoped>
#homecards {
    width:50%;
    margin:auto;
    padding-top:2.5rem;
}
.card-img-top, .card-img {
  width: 100%;
  height: 13vw;
  object-fit: cover;
}
</style>