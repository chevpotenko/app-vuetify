<template lang="html">
	<v-toolbar
		app
		:clipped-left="clipped"
		>
		<v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
		<v-btn icon @click.stop="toggleMiniVariant()">
			<v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
		</v-btn>
		<v-btn icon @click.stop="toggleClipped()">
			<v-icon>web</v-icon>
		</v-btn>
		<v-btn icon @click.stop="toggleFixed()">
			<v-icon>remove</v-icon>
		</v-btn>
		<v-toolbar-title>
			<router-link to="/" exact>{{ title }}</router-link>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn icon @click.stop="toggleRightDrawer(true)">
			<v-icon>menu</v-icon>
		</v-btn>
	</v-toolbar>
</template>

<script lang="js">
	import { mapMutations } from 'vuex';
	
	export default  {
		name: 'Toolbar',
		methods: {
			...mapMutations([
				'toggleDrawer',
				'toggleMiniVariant',
				'toggleFixed',
				'toggleClipped',
				'toggleRightDrawer'
			])
		},
		computed: {
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
