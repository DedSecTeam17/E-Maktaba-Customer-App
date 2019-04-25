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
                                   Update
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
    import {required, minLength,maxLength,numeric, email,sameAs} from 'vuelidate/lib/validators'
    import PasswordUpdate from "./PasswordUpdate";

    export default {
        name: "UpdateProfile",
        components: {PasswordUpdate},
        data() {
            return {
                email: '',
                name: '',
                phone: '',


            }
        },
        validations: {

            email: {
                required, email
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

                }
            }
        }
    }
</script>

<style scoped>

</style>