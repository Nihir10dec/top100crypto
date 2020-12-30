import Vuex from 'vuex';
import Vue from 'vue';
import coins from './modules/coins';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    coins
  }
});