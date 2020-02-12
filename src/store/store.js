import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable-next-line */
export const store = new Vuex.Store({
  strict: true,
  state: {
    baseUrl: 'https://res.cloudinary.com/dljgq8ek2/image/upload/',
    pixelRatio: null,
  },
  getters: {},
  mutations: {
    setPixelRatio(state, payload) {
      this.state.pixelRatio = payload;
    },
  },
  actions: {},
});
