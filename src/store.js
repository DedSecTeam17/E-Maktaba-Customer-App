import vue from 'vue'


import Vuex from 'vuex';
import {UserSession} from "./services/users_session";
import {AuthService} from "./services/sign_in_service";
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
            auth_error: null,

        },
    getters:
        {
            isLoading(state) {
                return state.loading;
            },
            showErr(state){
                return state.auth_error!==null;
            }
            ,
            isLoggedIn(state) {
                return state.isLoggedIn;
            },
            currentUser(state) {
                return state.currentUser;
            },
            getErrorData(state){
                return state.auth_error;
            },
            getUserToken(state){
                return state.user_token;
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
            signUp({commit},payload){
                commit('isLogin');
                AuthService.signUp(payload.email, payload.password,payload.name).then((response) => {
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
            logOut({commit}){
                commit("logout");
                vm.$router.push('/sign_in');

            }
        },
    mutations:
        {

            isLogin(state) {
                state.isLoggedIn = false;
                state.loading = true
                state.auth_error = null
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
                state.user_token=""
                state.auth_error = null
            }

        }
}