import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/counte';
import color from './modules/color';
import todo from './modules/todo';
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    count,
    color,
    todo,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});
