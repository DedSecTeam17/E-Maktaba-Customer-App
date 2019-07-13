import vue from 'vue'


import Vuex from 'vuex';
import {UserSession} from "./services/users_session_services";
import {AuthService} from "./services/auth_service";
import {vm} from "./main";


vue.use(Vuex);


const user = UserSession.getUserData();

export default {
//    we have 5 method to use
//    1- State
    state:
        {
            currentUser: user,
            user_token: "",
            isLoggedIn: !!user,
            loading: false,
            updating: false,
            auth_error: null,
            password_reset_message: null,
            password_reset_err: false,
            password_change_message: null,
            password_update_message: null

        },
    getters:
        {
            isLoading(state) {
                return state.loading;
            },
            passwordResetHaveErr(state) {
                return state.password_reset_err;
            },
            showErr(state) {
                return state.auth_error !== null;
            }
            ,
            isLoggedIn(state) {
                return state.isLoggedIn;
            },
            currentUser(state) {
                return state.currentUser;
            },
            getErrorData(state) {
                return state.auth_error;
            },
            getUserToken(state) {
                return state.user_token;
            },
            getPasswordResetMessage(state) {
                return state.password_reset_message;
            },
            getPasswordChangetMessage(state) {
                return state.password_change_message;
            },
            getPasswordUpdateMessage(state) {
                return state.password_update_message;
            },
            getIsUpdating(state) {
                return state.updating;
            }

        }
    ,
    actions:
        {
            login({commit, state}, payload) {
                commit('isLogin');
                AuthService.signIn(payload.email, payload.password).then((response) => {
                    commit('setUserToken', response["user_token"]);
                    if (UserSession.isAuth()) {
                        AuthService.getUserInfo(state.user_token).then((response) => {
                            commit('login_successfully', response);
                            vm.$router.push("/home/index")
                        }).catch((err) => {
                            commit('login_error', err);
                        })
                    }
                }).catch((err) => {
                    commit('login_error', err);
                })
            },
            signUp({commit}, payload) {
                commit('isLogin');
                AuthService.signUp(payload.email, payload.password, payload.name).then((response) => {
                    commit('setUserToken', response["user_token"]);
                    // UserSession.setToken(response["user_token"]);
                    if (UserSession.isAuth()) {
                        AuthService.getUserInfo(UserSession.getUserToken()).then((response) => {
                            commit('login_successfully', response);
                            vm.$router.push("/home/index")
                        }).catch((err) => {
                            commit('login_error', err);

                        })
                    }
                }).catch((err) => {
                    commit('login_error', err);
                })
            },
            logOut({commit}) {
                commit("logout");
                vm.$router.push('/sign_in');

            },
            passwordReset({commit}, payload) {
                commit('isLogin');
                AuthService.passwordReset(payload).then((response) => {
                    commit('linkSent', response["message"]);
                }).catch((err) => {
                    commit('linkNotSent', err["message"]);

                })
            },
            passwordChange({commit}, payload) {
                commit('isLogin');
                AuthService.passwordChange(payload.new_password, payload.reset_token)
                    .then((response) => {
                        commit('passwordSetSuccessfully', response["message"]);
                        vm.$router.push("/home/index")


                    })
                    .catch((err) => {
                        commit('passwordSetUnSuccessfully', err["message"]);

                    })
            },
            passwordUpdate({commit, state}, payload) {
                commit('isUpdating');
                AuthService.passwordUpdate(payload.new_password, payload.old_password, state.user_token)
                    .then((response) => {
                        commit('updateSuccessfully', response["message"]);
                    })
                    .catch((err) => {
                        commit('updateUnSuccessfully', err["message"]);

                    })
            }
        },
    mutations:
        {


            passwordSetSuccessfully(state, payload) {
                state.password_change_message = payload;
                state.loading = false
            },
            passwordSetUnSuccessfully(state, payload) {
                state.password_change_message = payload;
                state.loading = false
            },

            isLogin(state) {
                state.isLoggedIn = false;
                state.loading = true
                state.auth_error = null
            },
            isUpdating(state) {
                state.updating = true
            },
            updateSuccessfully(state, payload) {
                state.password_update_message = payload;
                state.updating = false

            },
            updateUnSuccessfully(state, payload) {
                state.password_update_message = payload;
                state.updating = false

            },
            linkSent(state, payload) {
                state.password_reset_message = payload;
                state.loading = false
            },
            linkNotSent(state, payload) {
                state.password_reset_message = payload;
                state.loading = false

            },
            login_successfully(state, payload) {
                state.loading = false
                state.currentUser = payload
                state.isLoggedIn = true;
                state.auth_error = null
                // save current user
                UserSession.saveUserData(payload)

            },
            setUserToken(state, payload) {
                //
                UserSession.setToken(payload)
                state.user_token = UserSession.getUserToken()

            },
            login_error(state, payload) {
                state.auth_error = payload
                state.isLoggedInf = false
                state.loading = false
            },
            logout(state) {
                UserSession.destroySession();
                state.currentUser = null
                state.isLoggedIn = false;
                state.user_token = ""
                state.auth_error = null
            }

        }
}