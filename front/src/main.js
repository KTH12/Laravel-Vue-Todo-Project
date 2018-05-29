// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import Router from './router';
import store from './store';

import App from './App';
import Auth from './packages/auth/Auth';
import API from './API';

import '../static/css/_common.css';

window.API = API;
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Auth);
Vue.use(VueMaterial);

window.$http = axios;
axios.defaults.baseURL = process.env.API_URL; // 기본 URL 세팅
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common.Authorization = `Bearer ${Vue.auth.getToken()}`; // 새로고침시 token 값 세팅

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store,
});
