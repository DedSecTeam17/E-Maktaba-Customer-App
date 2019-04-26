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
import Chat from "./components/notification/Chat";
import ProfileData from "./components/profile/ProfileData";
import BookDetails from "./components/Books/BookDetails";
import Home from "./components/Books/Home";
import StarRating from 'vue-star-rating'
import UpdateProfile from "./components/profile/UpdateProfile";
import UserLocation from "./components/cart/UserLocation";

import * as VueGoogleMaps from 'vue2-google-maps'
import Notifications from "./components/notification/Notifications";


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate)


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCGhUxWPAW04G22vB41iJQnYSIL8XNaiW8',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

const routes = [
  {path: '/home', component: Home,children:[
      {path:':book_id/book',component : BookDetails },
      {path:'index',component : AllBooks }

    ]},
  {path: '/sign_up', component: SignUp},
  {path: '/sign_in', component: SignIn},
  {path: '/change_password', component: PasswordChange},
  {path: '/password_reset', component: PasswordReset},
  {path: '/notifications', component: Notifications,children:
        [
          {path: 'index', component: AllNotifications},
          {path: 'chat/:provider_id', component: Chat},
        ]
  },
  {path: '/cart', component: MainPage},
    {path: '/map', component: UserLocation},

    {path: '/profile', component: MainProfile,children:[
      {path: 'profile_data' , component : ProfileData},
      {path: 'update_profile' , component : UpdateProfile},
    ]},
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({routes,  linkActiveClass: "active",})


new Vue({  router,
  render: h => h(App),

}).$mount('#app')
