<template>
	<v-app>
		<app-left-aside></app-left-aside>		
		<app-toolbar></app-toolbar>
		<v-content>
			<router-view></router-view>
		</v-content>
		<app-footer></app-footer>		
	</v-app>
</template>

<script>
	import AppToolbar from './components/common/app-toolbar';
	import AppFooter from './components/common/app-footer';
	import AppLeftAside from './components/common/app-left-aside';	

	export default {
		name: 'App',		
		components: {
			AppToolbar,
			AppFooter,
			AppLeftAside
		}
	}
</script>
