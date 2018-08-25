<template lang="html">
	<v-navigation-drawer
		persistent
		:mini-variant="miniVariant"
		:clipped="clipped"
		v-model="drawer"
		enable-resize-watcher
		fixed
		app
		>
		<v-list>
			<v-list-tile
				value="true"
				v-for="(item, i) in items"
				:key="i"
				>
				<v-list-tile-action>
					<v-icon v-html="item.icon"></v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title v-text="item.title"></v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="js">
	export default  {
		name: 'left-aside',
		props: [],
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {

		},
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
				set() {
					return this.$store.state.drawer;
				}
			},
			items() {
				return this.$store.state.items;
			}
		}
	}
</script>

<style scoped lang="css">
	
</style>
