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
import {UserSession} from "../services/users_session_services";

export default {

  name: 'MainApp',
  components: {NavBar},

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
