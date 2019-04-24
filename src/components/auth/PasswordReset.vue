<template>


    <div>

        <div class="row m-2">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="needs-validation">
                            <form @submit.prevent="submit" class="needs-validation" novalidate>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}"  v-model.trim="$v.email.$model" class="form-control" placeholder="Your email" id="exampleInputEmail1"
                                           name="email" type="email">

                                    <p class="invalid-feedback" v-if="!$v.email.email">invalid email</p>
                                    <p  class="invalid-feedback" v-if="!$v.email.required">Email required</p>

                                </div>

                                <button type="submit" class="btn btn-primary btn-block  text-center">
                                    <!--                            <span *ngIf="loading" class="spinner-border spinner-border-sm" role="status">-->
                                    <!--                            </span>-->
                                    <span>SEND ME RESET LINK</span>
                                </button>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!--spinner-->
    </div>

</template>

<script>

    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: "PasswordReset",
        data() {
            return {
                email: ''
            }
        },
        validations: {
            email: {
                required, email
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