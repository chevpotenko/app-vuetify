import '@babel/polyfill'
import './plugins/vuetify'
import Vuebar from 'vuebar';

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import store from './store/store'
import routes from './routes/routes'
import i18n from './i18n/lang'

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

Vue.use(VueRouter);
Vue.use(Vuebar);

Vue.config.productionTip = false;

new Vue({
    i18n,
    store: store,    
    router: router,
    render: h => h(App)
}).$mount('#app');