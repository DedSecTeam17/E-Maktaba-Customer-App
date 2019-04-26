<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white ">
            <a class="navbar-brand" href="#">Maktaba</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <router-link  active-class="active"  class="nav-link" to="/home/index"><i class="fa fa-home"></i>Home </router-link>
                    </li>

                </ul>


                <ul class="navbar-nav">

                    <li class="nav-item ">
                        <router-link active-class="active" class="nav-link"  to="/notifications/index"><i class="fa fa-bell"> Notifications</i></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link  active-class="active" class="nav-link" to="/cart"><i class="fa fa-shopping-cart"> Cart</i></router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        </a>
                        <div class="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item"  to="/profile/profile_data">My Profile</router-link>
                            <a class="dropdown-item" href="#">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        created() {

        },
        methods:{

            changeRoute(){
                console.log(this.$router.currentRoute.path)
            }
        }


    }
</script>

<style scoped>

</style>