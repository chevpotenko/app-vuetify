<template lang="html">
	<v-navigation-drawer
		persistent
		v-model="drawer"
		enable-resize-watcher
		app
		>
		<v-list>
			<v-list-tile
				v-for="(item, i) in menu"
				:key="i"
				:to="item.link ? item.link : '/'"
				>
				<v-list-tile-action>					
					<v-icon v-html="item.icon"></v-icon>									
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>{{ item.title }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="js">
	import { mapState } from 'vuex';
	import { mapMutations } from 'vuex';
	import { SET_DRAWER } from '../../store/mutation-types'

	export default  {
		name: 'app-left-aside',

		computed: {
			...mapState('common', [
				'menu',
			]),

			drawer: {
				get() {
					return this.$store.state.common.drawer;
				},
				set(value) {
					this.setDrawer(value);
				}
			}
		},
		
		methods: {
			...mapMutations('common', {
				setDrawer: SET_DRAWER
			})
		}
	}
</script>

<style scoped lang="css">
	
</style>
