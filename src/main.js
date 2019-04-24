import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AllBooks from "./components/Books/AllBooks";
import PasswordChange from "./components/auth/PasswordChange";
import PasswordReset from "./components/auth/PasswordReset";
import Vuelidate from 'vuelidate'
import AllNotifications from "./components/notification/AllNotifications";
import MainApp from "./components/MainApp";
import MainProfile from "./components/profile/MainProfile";
import MainPage from "./components/cart/MainPage";
import NotFound from "./components/partials/NotFound";


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate)



const routes = [
  {path: '/home', component: AllBooks},
  {path: '/sign_up', component: SignUp},
  {path: '/sign_in', component: SignIn},
  {path: '/change_password', component: PasswordChange},
  {path: '/password_reset', component: PasswordReset},
  {path: '/notifications', component: AllNotifications},
  {path: '/cart', component: MainPage},
  {path: '/profile', component: MainProfile},
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({routes,  linkActiveClass: "active",})


new Vue({  router,
  render: h => h(App),

}).$mount('#app')
