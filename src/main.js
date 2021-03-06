import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/index';
import './style/main.scss';
import './permission'; // permission control
import '@/icons'; // icon

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
