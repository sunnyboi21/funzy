import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store';
import VueSvgIcon from 'vue-svgicon';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueSvgIcon, {
  tagName: 'svgicon'
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
