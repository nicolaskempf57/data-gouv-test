import { createStore } from 'vuex'
import {decodeToken} from "../services/auth";

// Create a new store instance.

export const mutations = {
    setToken (state, token) {
        state.token = token
    }
}

export const getters = {
    token (state) {
        return state.token
    },
    isAuthenticated(state, getters) {
        return getters.token && !getters.isTokenExpired
    },
    isTokenExpired(state, getters) {
        const token = getters.token
        if(token) {
            let decoded = decodeToken(token);
            return Date.now() >= decoded.exp * 1000
        }
        return false;
    }
}

export default createStore({
    state () {
        return {
            token: 0
        }
    },
    mutations,
    getters,
})