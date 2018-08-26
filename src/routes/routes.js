import main from '../components/pages/main/main.vue';
import edetailing from '../components/pages/edetailing/edetailing.vue';
import templates from '../components/pages/templates/templates.vue';

export default [
	{
		name: 'main',
		path: '/',
		component: main
	},
	{
		name: 'edetailing',
		path: '/edetailing',
		component: edetailing
	},
	{
		name: 'templates',
		path: '/templates',
		component: templates
	}
]