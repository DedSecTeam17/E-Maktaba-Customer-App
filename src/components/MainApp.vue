<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./partials/NavBar";
export default {
  name: 'MainApp',
  components: {NavBar},
  created(){

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
