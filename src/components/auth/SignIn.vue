<template>


    <div>
        <div class="row mt-5">
            <div class="col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-danger" v-show="this.$store.getters.showErr">
                            {{this.$store.getters.getErrorData}}
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="needs-validation">
                            <form @submit.prevent="submit" class="needs-validation" novalidate>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}"
                                           v-model.trim="$v.email.$model" class="form-control" placeholder="Email"
                                           id="exampleInputEmail1" name="email"
                                           type="email">
                                    <p class="invalid-feedback" v-if="!$v.email.email">invalid email</p>
                                    <p class="invalid-feedback" v-if="!$v.email.required">Email required</p>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}"
                                           v-model.trim="$v.password.$model" class="form-control "
                                           id="exampleInputPassword1" placeholder="Password"
                                           name="password" type="password">

                                    <p class="invalid-feedback" v-if="!$v.password.minLength">min length is 6
                                        character</p>
                                    <p class="invalid-feedback" v-if="!$v.password.required">Password required</p>

                                </div>
                                <button type="submit" class="btn btn-primary btn-block  text-center">
                                    <span v-if="this.$store.getters.isLoading" class="spinner-border text-light" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span>
                                    <span v-else>Sign In</span>
                                </button>
                                <router-link class="nav-link" to="/sign_up">Not have account ? Sign up</router-link>
                                <router-link class="nav-link" to="/password_reset">Forget your password ?</router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {required, minLength, email} from 'vuelidate/lib/validators'
    import {AuthService} from "../../services/auth_service";
    import {UserSession} from "../../services/users_session_services"

    export default {
        name: "SignIn",
        data() {
            return {
                password: '',
                email: '',
                isLoading: false,
                showError : false ,
                error_data:""
            }
        },
        validations: {

            email: {
                required, email
            },
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
                    this.SignIn();
                }
            },
            SignIn() {
                this.$store.dispatch('login',{
                   "email":this.email,
                    "password":this.password
                })

                // this.isLoading = true;
                // AuthService.signIn(this.email, this.password).then((response) => {
                //     UserSession.setToken(response["user_token"]);
                //     if (UserSession.isAuth()) {
                //         AuthService.getUserInfo(UserSession.getUserToken()).then((response) => {
                //             UserSession.saveUserData(response)
                //             this.isLoading = false;
                //             this.$router.push('/home/index');
                //
                //
                //         }).catch((err) => {
                //             this.isLoading = false;
                //             this.error_data=err;
                //             this.showError=true;
                //
                //             console.log(err)
                //         })
                //     }
                // }).catch((err) => {
                //     this.isLoading = false;
                //     this.error_data=err;
                //     this.showError=true;
                //     console.log(err)
                // })
            }
        }
    }
</script>

<style scoped>

</style>