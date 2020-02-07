<template>
  <div id="homecards">
    <b-card-group deck>
      <b-card title="Hobbies" img-src="/me.jpg" img-alt="Kevin Animated" img-top>
        <b-card-text>Some of my favorite things to do are playing video games and running races for charity with my family.</b-card-text>
      </b-card>

       <b-card img-src="/biggie.jpg" title="Music" img-alt="Notorious B.I.G." img-top>
        <b-card-text>I love music and recently fell in love with collecting records. Above is one of my favorites: Biggie's Ready to Die.</b-card-text>
      </b-card>

      <b-card title="First Website" img-src="/cyndaquil.png" img-alt="Cyndaquil" img-top>
        <b-card-text>I made my first ever website in the 6th grade using PHP, coding it all in the browser file editor. It was a browser based Pok&eacute;mon game. </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

  <script>
export default {
  name: "HomeCards"
};
</script>

<style scoped>
#homecards {
  width: 50%;
  margin: auto;
  padding-top: 2.5rem;
}
.card-img-top,
.card-img {
  width: 100%;
  height: 13vw;
  object-fit: cover;
  background-color:rgba(0,0,0,0.4);
}
</style>