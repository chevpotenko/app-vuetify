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
	import { TOGGLE_DRAWER } from '../../store/mutation-types'
	import { mapState } from 'vuex';
	import AppMenuLanguage from './app-menu-language';
	
	export default  {
		name: 'app-toolbar',

		components: {
			AppMenuLanguage
		},

		computed: {
			...mapState('common', [
				'title'
			])
		},		
		
		methods: {
			...mapMutations('common', {
				toggleDrawer: TOGGLE_DRAWER 
			})
		}
	}
</script>

<style scoped lang="css">
	
</style>
