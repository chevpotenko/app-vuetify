<template>
	<v-container grid-list-lg fluid>
		<v-layout row wrap fluid>
			<v-flex
				class="item"
				v-for="item in presentations"							
				:key="item.id"
			>
				<edetailing-item :item="item"></edetailing-item>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import EdetailingItem from './edetailing-item';	
	import { mapState } from 'vuex';

	export default {
		name: 'edetailing',
		
		components: {
			EdetailingItem
		},

		computed: {
			...mapState('presentations', [
				'presentations'
			])
		}
	}
</script>

<style scoped>
	.item{
		flex: 0 0 400px;
	}	
</style>
