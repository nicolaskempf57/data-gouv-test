import router from "../router"
import store from "../store/store";
import jwt_decode from "jwt-decode";

export function postLogin(token) {
    store.commit('setToken', token)
    router.push({name: 'profile'})
}

export function logout() {
    store.commit('setToken', null)
    router.replace({name: 'login'})
}

export function decodeToken(token) {
    return jwt_decode(token);
}