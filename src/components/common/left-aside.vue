<template lang="html">
	<v-navigation-drawer
		persistent
		:mini-variant="miniVariant"
		:clipped="clipped"
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
					<v-list-tile-title>{{item.title }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="js">
	export default  {
		name: 'left-aside',
		computed: {
			miniVariant() {
				return this.$store.state.miniVariant;
			},
			clipped() {
				return this.$store.state.clipped;
			},			
			drawer: {
				get() {
					return this.$store.state.drawer;
				},
				set(value) {
					this.$store.commit('setDrawer', value);
				}
			},
			menu() {
				return this.$store.state.menu;
			}
		}
	}
</script>

<style scoped lang="css">
	.menu-icon{
		text-decoration: none;
	}
</style>
