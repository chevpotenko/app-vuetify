<i18n>
	{
		"en": {
			"hello": "hello world!"
		},
		"ja": {
			"hello": "こんにちは、世界！"
		}
	}
</i18n>

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
				v-for="(item, i) in menu"
				:key="i"
				>
				<v-list-tile-action>
					<v-icon v-html="item.icon"></v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>
						<router-link
							v-if="item.link"
							to="/edetailing"
							exact>
							{{ $t('hello') }}
						</router-link>
						<span v-else>{{ $t('hello') }}</span>					
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
				set() {
					return this.$store.state.drawer;
				}
			},
			menu() {
				return this.$store.state.menu;
			}
		}
	}
</script>

<style scoped lang="css">
	
</style>
