<template>

<div class="row m-1">

    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div  class="card-body">
                <div class="text-center">
                    <div class="row">
                        <div class="col-12">
                            <img src="https://via.placeholder.com/150/#f2f1ef" width="70" height="70" class="rounded-circle m-1"><br>
                            <button class="btn btn-outline-info "> <i class="fa fa-camera" style="font-size: small"></i></button>
                            <p>{{name}}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        data (){
            return{
                name: this.$store.getters.currentUser.name,
            }
        },
        name: "ProfileHeader"
    }
</script>

<style scoped>

</style>