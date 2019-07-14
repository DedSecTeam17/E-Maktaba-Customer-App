<template>
    <div>
        <div class="row m-2">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-danger" v-show="!this.$store.state.loading && this.$store.state.message!=='' ">
                            {{this.$store.state.message}}
                        </div>
                    </div>
                    <div class="card-body">
                        <!--                        <div class="alert alert-danger m-3 p-3" *ngIf="err">{{err}}</div>-->
                        <div class="needs-validation">
                            <form @submit.prevent="submit" class="needs-validation" novalidate>

                                <div class="form-group">
                                    <label for="name">User name</label>
                                    <input :class="{'is-invalid':$v.name.$error,'is-valid':!$v.name.$invalid}"
                                           v-model.trim="$v.name.$model" class="form-control" placeholder="User name"
                                           id="name" name="name" type="text">
                                    <p class="invalid-feedback" v-if="!$v.name.minLength">minimum character at least
                                        6</p>
                                    <p class="invalid-feedback" v-if="!$v.name.required">User name is required</p>
                                </div>
                                <!---->
                                <div class="form-group">
                                    <label for="exampleInputEmail1">job</label>
                                    <input :class="{'is-invalid':$v.job.$error,'is-valid':!$v.job.$invalid}"
                                           v-model.trim="$v.job.$model" class="form-control" placeholder="job"
                                           id="exampleInputEmail1" name="job">
                                    <p class="invalid-feedback" v-if="!$v.job.required">job required</p>
                                </div>

                                <div class="form-group">
                                    <label for="about">About</label>
                                    <input :class="{'is-invalid':$v.about.$error,'is-valid':!$v.about.$invalid}"
                                           v-model.trim="$v.about.$model" class="form-control" placeholder="about"
                                           id="about" name="about">

                                    <p class="invalid-feedback" v-if="!$v.about.required">about required</p>
                                </div>


                                <div class="form-group">
                                    <label for="phone">Phone number</label>
                                    <input :class="{'is-invalid':$v.phone.$error,'is-valid':!$v.phone.$invalid}"
                                           v-model.trim="$v.phone.$model" class="form-control" placeholder="phone"
                                           id="phone" name="phone">
                                    <p class="invalid-feedback" v-if="!$v.phone.required">Phone is required</p>
                                    <p class="invalid-feedback" v-if="!$v.phone.maxLength">invalid phone number </p>
                                    <p class="invalid-feedback" v-if="!$v.phone.minLength">invalid phone number </p>
                                    <p class="invalid-feedback" v-if="!$v.phone.numeric">Only numeric data</p>

                                </div>


                                <button type="submit" class="btn btn-primary btn-block  text-center">
                                                                        <span v-if="this.$store.getters.isLoading"
                                                                              class="spinner-border text-light"
                                                                              role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span>

                                    <span v-else> Update</span>
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <PasswordUpdate></PasswordUpdate>

    </div>

</template>

<script>
    import {required, minLength, maxLength, numeric, sameAs} from 'vuelidate/lib/validators'
    import PasswordUpdate from "./PasswordUpdate";

    export default {
        name: "UpdateProfile",
        components: {PasswordUpdate},
        data() {
            return {
                job: this.$store.getters.currentUser.profile.job,
                name: this.$store.getters.currentUser.name,
                phone: this.$store.getters.currentUser.profile.phone_number,
                about: this.$store.getters.currentUser.profile.about
            }
        },
        validations: {

            job: {
                required
            },
            about: {
                required
            },

            name: {
                required,
                minLength: minLength(6)
            },
            phone: {
                required,
                numeric,
                maxLength: maxLength(10),
                minLength: minLength(10),
            }

        },
        methods: {
            submit() {

                this.$v.$touch()
                if (this.$v.$invalid) {
                    console.log('invalid')
                } else {
                    console.log('valid')

                    //phone_num, about, job, user_id, token
                    this.$store.dispatch("updateUserProfile", {
                        "phone_num": this.phone,
                        "about": this.about,
                        "job": this.job,
                    })

                }
            }
        }
    }
</script>

<style scoped>

</style>