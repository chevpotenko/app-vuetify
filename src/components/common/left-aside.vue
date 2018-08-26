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
				value="true"
				v-for="(item, i) in menu"
				:key="i"
				>
				<v-list-tile-action>
					<router-link
							v-if="item.link"
							to="/edetailing"
							exact
							class="menu-icon"
							>
							<v-icon v-html="item.icon"></v-icon>
					</router-link>
					<v-icon  v-else v-html="item.icon"></v-icon>					
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>
						<router-link
							v-if="item.link"
							to="/edetailing"
							exact
							>
							{{item.title }}
						</router-link>
						<span v-else>{{item.title }}</span>					
					</v-list-tile-title>
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
