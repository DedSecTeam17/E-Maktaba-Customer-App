<template>

    <div>

        <div class="row m-2">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-danger" v-show="this.$store.getters.getPasswordChangetMessage">
                            {{this.$store.getters.getPasswordChangetMessage}}
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="needs-validation">
                            <form @submit.prevent="submit" class="needs-validation" novalidate>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}"  v-model.trim="$v.password.$model" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                           name="new_password" type="password"
                                    >
                                    <p class="invalid-feedback" v-if="!$v.password.minLength">min length is 6 character</p>
                                    <p  class="invalid-feedback" v-if="!$v.password.required">Password required</p>

                                </div>
                                <button type="submit" class="btn btn-primary btn-block  text-center">
                                    <!--                            <span *ngIf="loading" class="spinner-border spinner-border-sm" role="status">-->
                                    <!--                            </span>-->

                                    <span v-if="this.$store.getters.isLoading" class="spinner-border text-light" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span>

                                    <span v-else>Change Password</span>
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
    import {required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: "PasswordChange",
        data() {
            return {
                password:'',
                reset_token : this.$route.query.token
            }
        },
        validations: {
            password: {
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

                    this.$store.dispatch("passwordChange",{
                        "new_password":this.password,
                        "reset_token":this.reset_token

                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>