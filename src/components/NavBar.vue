<template>
<div id="navBar">
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand href="#">Kevin Hockenjos</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">About Me</b-nav-item>
        <b-nav-item href="#">Academics</b-nav-item>
        <b-nav-item href="#">Work Experience</b-nav-item>
        <b-nav-item href="#">Skills</b-nav-item>
        <b-nav-item><router-link to='/roadmap'>Projects Roadmap</router-link></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Projects" right>
          <b-dropdown-item v-for='p in projects' v-bind:key='p.name' :href="p.url">{{p.name}}</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      projects: [
        {'name': 'My Website', 'url': '/'},
        {'name': 'League of Mentoring', 'url': '#'},
        {'name': 'US Data Plotting', 'url': '#'},
        {'name': 'Stock Tracker', 'url': '#'}
      ]
    }
  }
}
</script>

<style scoped>
#navBar {
  position:fixed;
  width:100%;
  top:0;
  z-index:999;
}
</style>