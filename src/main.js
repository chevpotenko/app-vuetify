import '@babel/polyfill'
import './plugins/vuetify'

import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'

import store from './store/store'
import routes from './routes/routes'
import locales from './i18n/lang'

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

Vue.use(VueRouter);

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    messages: locales
});

Vue.config.productionTip = false;

new Vue({
    i18n,
    store: store,    
    router: router,
    render: h => h(App)
}).$mount('#app');


export default i18n;