<template>

    <div class="row m-1">

        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="row justify-content-center">
                            <div class="col-12">
                            <span v-if="!this.$store.state.uploadingImage">
                       <img v-bind:src="this.$store.state.profile_image_path" width="70" height="70"
                            class="rounded-circle m-1"><br>
                            </span>
                                <span v-else class="spinner-border text-dark" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span><br>

                                <input ref="file" type="file" hidden name="profile_image" v-on:change="handleFileInput">

                                <button class="btn btn-outline-info " @click="$refs.file.click()"><i
                                        class="fa fa-camera" style="font-size: small"></i></button>
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
        data() {
            return {
                name: this.$store.getters.currentUser.name,
                file: null
            }
        },
        name: "ProfileHeader",
        methods: {
            handleFileInput(e) {
                console.log(e.target.files[0])

                this.$store.dispatch("uploadUserProfileImage", e.target.files[0])

            }
        }
    }
</script>

<style scoped>

</style>