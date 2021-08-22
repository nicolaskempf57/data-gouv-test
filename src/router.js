import {createRouter, createWebHashHistory} from "vue-router";
import DummyHash from "./pages/DummyHash.vue";
import Home from "./pages/Home.vue";
import Hash from "./pages/Hash.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Profile from "./pages/Profile.vue";
import store from "./store/store";

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/dummy-hash', name: 'dummy-hash', component: DummyHash },
    { path: '/hash', name: 'hash', component: Hash },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/profile', name: 'profile', component: Profile, beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
            next()
        } else {
            next({name: 'login'})
        }
    }},
]

export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
