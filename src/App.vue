<template>
	<v-app>
		<left-aside></left-aside>		
		<toolbar></toolbar>
		<v-content>
			<Main/>
		</v-content>
		<right-aside></right-aside>
		<app-footer></app-footer>
	</v-app>
</template>

<script>
	import Main from './components/pages/main';
	import Toolbar from './components/common/Toolbar';
	import AppFooter from './components/common/app-footer';
	import RightAside from './components/common/right-aside';
	import LeftAside from './components/common/left-aside';

	export default {
		name: 'App',
		components: {
			Main,
			Toolbar,
			AppFooter,
			RightAside,
			LeftAside
		}
	}
</script>
