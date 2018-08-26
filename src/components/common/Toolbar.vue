<template lang="html">
	<v-toolbar
		app
		:clipped-left="clipped"
		>
		
		<v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
		
		<v-btn
			v-if="drawer"
			icon
			@click.stop="toggleMiniVariant()"
			>
			<v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
		</v-btn>

		<v-btn
			v-if="drawer"
			icon
			@click.stop="toggleClipped()"
			>
			<v-icon>web</v-icon>
		</v-btn>		

		<v-toolbar-title>
			<router-link to="/" exact>{{ title }}</router-link>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<menu-language></menu-language>

		<v-btn icon @click.stop="toggleRightDrawer(true)">
			<v-icon>menu</v-icon>
		</v-btn>

	</v-toolbar>
</template>

<script lang="js">
	import { mapMutations } from 'vuex';
	import MenuLanguage from './menu-language';
	
	export default  {
		name: 'Toolbar',
		components: {
			MenuLanguage
		},		
		methods: {
			...mapMutations([
				'toggleDrawer',
				'toggleMiniVariant',
				'toggleClipped',
			]),			
			toggleRightDrawer(value) {
				if(this.$store.state.drawer){
					this.$store.commit('toggleDrawer');
				}
				this.$store.commit('toggleRightDrawer', value)
			}
		},
		computed: {
			drawer() {
				return this.$store.state.drawer;
			},
			miniVariant() {
				return this.$store.state.miniVariant;
			},
			clipped() {
				return this.$store.state.clipped;
			},		
			title() {
				return this.$store.state.title;
			}				
		}
	}
</script>

<style scoped lang="css">
	
</style>
