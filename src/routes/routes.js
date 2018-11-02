import PageMain from '../components/pages/main/page-main.vue';
import Edetailing from '../components/pages/edetailing/edetailing.vue';
import Templates from '../components/pages/templates/templates.vue';
import About from '../components/pages/about/about.vue';

export default [
	{
		name: 'about',
		path: '/about',
		component: About
	},
	{
		name: 'main',
		path: '/',
		component: PageMain
	},
	{
		name: 'edetailing',
		path: '/edetailing',
		component: Edetailing
	},
	{
		name: 'templates',
		path: '/templates',
		component: Templates
	}	
]