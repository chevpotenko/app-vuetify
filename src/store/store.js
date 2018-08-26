import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		clipped: false,
		drawer: false,
		miniVariant: false,
		right: true,
		rightDrawer: false,
		title: 'App - Vue',
		menu: [
			{
				icon: 'bubble_chart',
				title: 'eDetailing',
				link: 'edetailing'
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
		],
		presentations: [
			{
				id: '1',
				name: 'Presentation 1'
			},
			{
				id: '2',
				name: 'Presentation 2'
			},
			{
				id: '3',
				name: 'Presentation 3'
			},
			{
				id: '4',
				name: 'Presentation 4'
			},
			{
				id: '5',
				name: 'Presentation 5'
			},
			{
				id: '6',
				name: 'Presentation 6'
			}
		],
		currentLanguage: {
			id: 'en',
			name: 'English'
		},
		languages: [
			{
				id: 'en',
				name: 'English'
			},
			{
				id: 'ja',
				name:'Japanese'
			}
		]
	},
	mutations: {
		toggleDrawer(state) {							
			state.drawer = !state.drawer;
		},
		setDrawer(state, value) {
			state.drawer = value;
		},
		toggleMiniVariant(state) {
			state.miniVariant = !state.miniVariant;
		},
		toggleClipped(state) {
			state.clipped = !state.clipped;
		},
		toggleRightDrawer(state, value) {			
			state.rightDrawer = value;
		},		
		toggleRight(state) {
			state.right = !state.right;
		},
		setLanguage(state, language){
			state.currentLanguage = language
		}
	}
  });

  export default store;