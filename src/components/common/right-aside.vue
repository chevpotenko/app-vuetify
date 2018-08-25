<template lang="html">
	<v-navigation-drawer
		temporary
		:right="right"
		v-model="rightDrawer"
		fixed
		app
		>
		<v-list>
			<v-list-tile @click="toggleRight()">
			<v-list-tile-action>
				<v-icon>compare_arrows</v-icon>
			</v-list-tile-action>
			<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="js">
	import { mapMutations } from 'vuex';

	export default  {
		name: 'right-aside',
		props: [],
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {
			...mapMutations([				
				'toggleRight'
			])
		},
		computed: {
			right() {
				return this.$store.state.right;
			},			
			
			rightDrawer: {
				get() {
					return this.$store.state.rightDrawer
				},
				set(value) {
					this.$store.commit('toggleRightDrawer',value);
				}
			}
		}
	}
</script>

<style scoped lang="css">
	
</style>
