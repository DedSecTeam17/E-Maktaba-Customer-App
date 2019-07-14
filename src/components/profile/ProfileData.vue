<template>


    <div>
        <div class="row m-1">
            <div class="col-md-6 offset-md-3">
                <ul v-if="!this.$store.getters.isLoading" class="list-group">
                    <li class="list-group-item m-1">
                        <div class="row justify-content-between m-1">
                            <i class="fa fa-user-circle "></i>
                            <p>{{name}}</p>
                        </div>
                    </li>
                    <li class="list-group-item m-1">
                        <div class="row justify-content-between m-1">
                            <i class="fa fa-envelope"></i>
                            <p>{{email}}</p>
                        </div>
                    </li>
                    <li class="list-group-item m-1">
                        <div class="row justify-content-between m-1">
                            <i class="fa fa-info"></i>
                            <p>{{about}}</p>
                        </div>
                    </li>
                </ul>

                <div v-else>

                    <div class="row justify-content-center">
                           <span class="spinner-border text-dark" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span>
                    </div>


                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "ProfileDate",
        data() {
            return {
                email: this.$store.getters.currentUser.email,
                name: this.$store.getters.currentUser.name,
                about: this.$store.getters.currentUser.profile["about"],
            }
        },
        beforeCreate() {
            this.$store.dispatch("getUserData")
        }
    }
</script>

<style scoped>

</style>