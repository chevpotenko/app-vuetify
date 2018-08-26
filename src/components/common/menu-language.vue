<template lang="html">
	<v-menu>
		<v-btn
			slot="activator"
			color="primary"
		>
			{{currentLanguage.name}}
		</v-btn>
		<v-list>
			<v-list-tile
			v-for="(item, index) in languages"
			:key="index"
			@click="setLanguage(item)"
			>
				<v-list-tile-title>{{ item.name }}</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script lang="js">
	import i18n from '../../main';
	import { mapMutations } from 'vuex';
	export default {
		name: 'menu-language',
		methods: {
			setLanguage(item) {
				i18n.locale = item.id;
				this.$store.commit('setLanguage', item);
			}
		},
		computed: {
			languages() {
				return this.$store.state.languages;
			},
			currentLanguage() {
				return this.$store.state.currentLanguage;
			}
		}
	}
</script>

<style scoped lang="css">
	
</style>