import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		clipped: false,
		drawer: false,
		fixed: false,
		miniVariant: false,
		right: true,
		rightDrawer: false,
		title: 'App - Vue',
		items: [
			{
				icon: 'bubble_chart',
				title: 'eDetailing'
			},
			{
				icon: 'email',
				title: 'Templates'
			},
			{
				icon: 'drafts',
				title: 'Item 1'
			},
			{
				icon: 'access_time',
				title: 'Item 2'
			}
		]
	},
	mutations: {
		toggleDrawer(state) {
			state.drawer = !state.drawer;
		},
		toggleMiniVariant(state) {
			state.miniVariant = !state.miniVariant;
		},
		toggleFixed(state) {
			state.fixed = !state.fixed;
		},
		toggleClipped(state) {
			state.clipped = !state.clipped;
		},
		toggleRightDrawer(state, value) {			
			state.rightDrawer = value;
		},		
		toggleRight(state) {
			state.right = !state.right;
		}
	}
  });

  export default store;