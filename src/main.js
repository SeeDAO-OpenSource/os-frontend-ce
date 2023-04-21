/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import Breadcrumbs from './components/bread_crumbs';
import { store } from './store';
import Vue2Filters from 'vue2-filters';
import VueSweetalert2 from 'vue-sweetalert2';
import VueFormWizard from 'vue-form-wizard';
import VueTour from 'vue-tour';
import Notifications from 'vue-notification';
import { Vue2Dragula } from 'vue2-dragula';
import Toasted from 'vue-toasted';
import SmartTable from 'vuejs-smart-table';
import * as VueGoogleMaps from 'vue2-google-maps';
import { VueMasonryPlugin } from 'vue-masonry';
import VueFeather from 'vue-feather';
import VueApexCharts from 'vue-apexcharts';
import FunctionalCalendar from 'vue-functional-calendar';
import vueKanban from 'vue-kanban';
import PxCard from './components/Pxcard.vue';
Vue.component(PxCard.name, PxCard);

import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;

// Multi Language Add
import en from './locales/en.json';
import cn from './locales/cn.json';
import { defaultLocale, localeOptions } from './constants/config';
import VueI18n from 'vue-i18n';
global.$t = Vue.t

// Import Theme scss
import './assets/scss/app.scss';

// config for firebase
import config from './config.json';


Icon.Default.mergeOptions({
  iconRetinaUrl: require('./assets/images/vue2leaflet/marker-icon.png'),
  iconUrl: require('./assets/images/vue2leaflet/marker-icon.png')
});

Vue.use(VueFeather);

Vue.use(Toasted, {
  iconPack: 'fontawesome'
});
Vue.use(Vue2Dragula);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ',
    libraries: 'places',
  },
});

Vue.use(Notifications);
Vue.use(Vue2Filters);
Vue.use(VueSweetalert2);
Vue.use(VueFormWizard);
Vue.use(VueTour);
Vue.use(BootstrapVue);
Vue.use(SmartTable);
Vue.use(require('vue-chartist'));
Vue.use(require('vue-moment'));
Vue.component('Breadcrumbs', Breadcrumbs);
Vue.use(VueMasonryPlugin);
Vue.component('apexchart', VueApexCharts);
Vue.use(FunctionalCalendar, {
  dayNames: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
});
Vue.use(vueKanban);
Vue.use(VueI18n);

//ApiService
import ApiService from './services/api.service'
ApiService.init();

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

const messages = { en: en, cn: cn };
const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale;
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'cn',
  messages,
  silentTranslationWarn: true
});

Vue.config.productionTip = false;


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');