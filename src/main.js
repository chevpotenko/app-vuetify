import '@babel/polyfill'
import './plugins/vuetify'

import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import store from './store/store';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en'
});

Vue.config.productionTip = false

new Vue({
    i18n,
    store: store,
    render: h => h(App)
}).$mount('#app')
