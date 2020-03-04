import "../sass/app.scss";

// Vue packages
import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from "vue-router";

// Vue components
import Landing from './landing.vue';

// Store object, the one true app state, please be gentle

// Vue initialize routing
Vue.use(VueRouter);
const routes = [
    { path: '/', component: Landing }
];
export const router = new VueRouter({
    routes
});

// Vue mount app with all
const app = new Vue({
    router
}).$mount('#app');
