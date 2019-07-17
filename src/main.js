import Vue from 'vue';
import VTooltip from 'v-tooltip';
import App from './App';
import router from './router';

Vue.use(VTooltip);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
