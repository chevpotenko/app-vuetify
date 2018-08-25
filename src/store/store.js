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
				icon: 'bubble_chart',
				title: 'Templates'
			},
			{
				icon: 'bubble_chart',
				title: 'Item 1'
			},
			{
				icon: 'bubble_chart',
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
		toggleRightDrawer(state) {
			state.rightDrawer = !state.rightDrawer;
		},
		toggleRight(state) {
			state.right = !state.right;
		}
	}
  });

  export default store;