<template>
<div>
  <b-tabs content-class="mt-3" justified>
    <b-tab title="League of Mentoring" active>
      <LOM />
    </b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
</template>
<script>
import LOM from './projects/LOM.vue'
export default {
  name: 'Tabs',
  components: {
    LOM
  }
}
</script>