<template>
    <div>
        <div class="row m-2">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-danger" v-show="this.$store.getters.getPasswordUpdateMessage">
                            {{this.$store.getters.getPasswordUpdateMessage}}
                        </div>
                    </div>
                    <div class="card-body">
                        <!--                        <div class="alert alert-danger m-3 p-3" *ngIf="err">{{err}}</div>-->
                        <div class="needs-validation">
                            <form @submit.prevent="submit" class="needs-validation" novalidate>

                                <div class="form-group">
                                    <label for="new_password">New Password</label>
                                    <input :class="{'is-invalid':$v.new_password.$error,'is-valid':!$v.new_password.$invalid}"
                                           v-model.trim="$v.new_password.$model" class="form-control"
                                           placeholder="New Password"
                                           id="new_password" name="new_password" type="password">
                                    <p class="invalid-feedback" v-if="!$v.new_password.minLength">minimum character at
                                        least
                                        6</p>
                                    <p class="invalid-feedback" v-if="!$v.new_password.required">Your new password is
                                        required</p>
                                </div>


                                <div class="form-group">
                                    <label for="old_password">Old password</label>
                                    <input :class="{'is-invalid':$v.old_password.$error,'is-valid':!$v.old_password.$invalid}"
                                           v-model.trim="$v.old_password.$model" class="form-control"
                                           placeholder="Old password"
                                           id="old_password" name="old_password" type="password">
                                    <p class="invalid-feedback" v-if="!$v.old_password.minLength">minimum character at
                                        least
                                        6</p>
                                    <p class="invalid-feedback" v-if="!$v.old_password.required">Old password is
                                        required</p>
                                </div>


                                <button type="submit" class="btn btn-primary btn-block  text-center">
                                                                        <span v-if="this.$store.getters.getIsUpdating"
                                                                              class="spinner-border text-light"
                                                                              role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span>

                                    <span v-else>Update Password</span>
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {required, minLength, maxLength, numeric, email, sameAs} from 'vuelidate/lib/validators'

    export default {
        name: "PasswordUpdate",
        data() {
            return {
                new_password: '',
                old_password: '',
            }
        },
        validations: {
            new_password: {
                required,
                minLength: minLength(6)
            },
            old_password: {
                required,
                minLength: minLength(6)
            }

        },
        methods: {
            submit() {

                this.$v.$touch()
                if (this.$v.$invalid) {
                    console.log('invalid')
                } else {
                    console.log('valid')
                    this.$store.dispatch("passwordUpdate", {
                        "new_password": this.new_password,
                        "old_password": this.old_password
                    })

                }
            }
        }
    }
</script>

<style scoped>

</style>