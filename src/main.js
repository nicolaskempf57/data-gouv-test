import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import * as dsfr from "./js/dsfr.module";
import './css/dsfr.min.css';
import './css/wells.css';
import './css/wordbreaks.css';
import axios from "axios";
import {BASE_URL} from "./config";
import i18n from "./i18n";
import store from "./store/store";


const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(store)
app.mount('#app')

axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use(function (config) {
    const token = store.getters.token;
    if(store.getters.isTokenExpired) {
        return router.replace({name: 'login'})
    }
    config.headers.Authorization = 'Bearer ' + token;

    return config;
});