<template>


    <div>
        <div class="row m-2">
            <div class="col-md-6 offset-md-3">
                <div class="card">
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
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}"
                                           v-model.trim="$v.email.$model" class="form-control" placeholder="Email"
                                           id="exampleInputEmail1" name="email">

                                    <p class="invalid-feedback" v-if="!$v.email.email">invalid email</p>
                                    <p class="invalid-feedback" v-if="!$v.email.required">Email required</p>
                                </div>

                                <!---->
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}"
                                           v-model.trim="$v.password.$model" class="form-control"
                                           id="exampleInputPassword1" placeholder="Password"
                                           name="password" type="password">

                                    <p class="invalid-feedback" v-if="!$v.password.minLength">minimum character at least
                                        6 </p>
                                    <p class="invalid-feedback" v-if="!$v.password.required">password required</p>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputConfirmPassword1">Password Confirm</label>
                                    <input :class="{'is-invalid':$v.password_confirm.$error}"
                                           v-model.trim="$v.password_confirm.$model" class="form-control"
                                           id="exampleInputConfirmPassword1"
                                           placeholder="Password Confirm"
                                           name="password" type="password">
                                    <p class="invalid-feedback" v-if="!$v.password_confirm.sameAs">Password must be identical </p>


                                </div>

                                <button type="submit" class="btn btn-primary btn-block  text-center">
                                    <!--                            <span *ngIf="loading" class="spinner-border spinner-border-sm" role="status">-->
                                    <!--                            </span>-->
                                    <span>Sign Up</span>
                                </button>
                                <router-link to="/sign_in" class="nav-link"> have account ? Sign in</router-link>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {required, minLength, email,sameAs} from 'vuelidate/lib/validators'

    export default {
        name: "SignUp",
        data() {
            return {
                password: '',
                password_confirm: '',
                email: '',
                name: '',

            }
        },
        validations: {

            email: {
                required, email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            password_confirm: {
                sameAsPassword: sameAs('password')
            },
            name: {
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

                }
            }
        }
    }
</script>

<style scoped>

</style>