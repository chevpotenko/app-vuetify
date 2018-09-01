import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

const stores = {
	state: {},
	actions: {},
	getters: {},
	mutations: {}
};

for (const moduleName of Object.keys(modules)) {	
	for (const property of Object.keys(stores)) {
		Object.assign(stores[property], modules[moduleName][property]);
	}
}

Vue.use(Vuex);

const store = new Vuex.Store(stores);

for (const moduleName of Object.keys(modules)) {
	if (modules[moduleName].actions.init) {
		store.dispatch(`${moduleName}/init`)
	}
}

export default store;