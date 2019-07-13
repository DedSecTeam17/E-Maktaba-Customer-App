<template>



    <div>


        <ProfileHeader></ProfileHeader>
        <div class="row m-1">
             <div class="col-md-6 offset-3">
                 <div class="card">
                      <div class="card-body">
                          <ul class="nav nav-pills">
                              <li class="nav-item">
                                  <router-link class="nav-link " to="/profile/profile_data" href="#">My profile</router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link class="nav-link " to="/profile/update_profile" href="#">Edit my profile</router-link>
                              </li>
                          </ul>
                      </div>
                 </div>
             </div>
        </div>

        <router-view></router-view>


    </div>



</template>

<script>
    import ProfileHeader from "./ProfileHeader";
    export default {
        name: "MainProfile",
        components: {ProfileHeader}
    }
</script>

<style scoped>

</style>