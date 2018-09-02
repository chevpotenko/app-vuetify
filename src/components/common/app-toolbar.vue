<template lang="html">
	<v-toolbar
		app
		:clipped-left="false"
		>		
		<v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
		<v-toolbar-title>
			<router-link to="/" exact>{{ title }}</router-link>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<app-menu-language></app-menu-language>
	</v-toolbar>
</template>

<script lang="js">
	import { mapMutations } from 'vuex';
	import AppMenuLanguage from './app-menu-language';
	
	export default  {
		name: 'app-toolbar',
		components: {
			AppMenuLanguage
		},		
		methods: {
			...mapMutations([
				'toggleDrawer'
			])
		},
		computed: {		
			title() {
				return this.$store.state.title;
			}				
		}
	}
</script>

<style scoped lang="css">
	
</style>
