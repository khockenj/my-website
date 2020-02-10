<template>
  <div id="navBar">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand to="/">Kevin Hockenjos</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About Me</b-nav-item>
          <b-nav-item to="/academics">Academics &amp; Work Experience</b-nav-item>
          <!--<b-nav-item to='/work'>Work Experience</b-nav-item>-->
          <b-nav-item to="/skills">Skills</b-nav-item>
          <b-nav-item to="/roadmap">Projects Roadmap</b-nav-item>
          <b-nav-item to="/roadmap" disabled>League of Legends</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Projects" right :disabled="this.$route.name == 'Projects'">
            <b-dropdown-item
              v-for="p in projects"
              v-bind:key="p.name"
              :to="{'name': 'Projects', 'params': {tab: p.url}}"
            >{{p.name}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      projects: [
        { name: "My Website", url: "SITE" },
        { name: "League of Mentoring", url: "LOM" },
        { name: "NY Population Data Visualizations", url: "NYPLOT" },
        { name: "Stock Tracker", url: "SITE" }
      ]
    };
  }
};
</script>

<style scoped>
#navBar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}
/* .navbar-brand {
   text-transform:uppercase; 
} */
</style>