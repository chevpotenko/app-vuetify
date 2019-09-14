<template lang="html">
	<v-menu>
		<v-btn slot="activator" color="primary">
			{{ currentLanguage.name }}
		</v-btn>
		<v-list>
			<v-list-tile
			v-for="(item, index) in languages"
			:key="index"
			@click="updateLanguage(item)"
			>
				<v-list-tile-title>{{ item.name }}</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script lang="js">
	import i18n from '../../i18n/lang';
	import { mapState } from 'vuex';
	import { mapActions } from 'vuex'
	import { SET_LANGUAGE } from '../../store/mutation-types';	

	export default {
		name: 'app-menu-language',

		computed: {
			...mapState('common', [
				'languages',
				'currentLanguage'
			])
		},

		methods: {			
			...mapActions('common', {
				setLanguage: SET_LANGUAGE
			}),

			updateLanguage(item) {
				i18n.locale = item.id;
				this.setLanguage(item);	
			}
		}
	}
</script>

<style scoped lang="css">
	
</style>