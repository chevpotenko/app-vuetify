import '@babel/polyfill'
import './plugins/vuetify'
import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import store from './store/store';

Vue.use(VueI18n);

Vue.config.productionTip = false

new Vue({
    store: store,
    render: h => h(App)
}).$mount('#app')
