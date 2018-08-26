<template>
	<v-container grid-list-lg fluid>
		<v-layout row wrap fluid>
			<v-flex
				class="item"
				v-for="item in presentations"							
				:key="item.id"
			>
				<edetailing-item :data="item"></edetailing-item>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import EdetailingItem from './edetailing-item';
	export default {
		name: 'Edetailing',
		components: {
			EdetailingItem
		},			
		computed: {
			presentations() {
				return this.$store.state.presentations;
			}
		}
	}
</script>

<style scoped>
	.item{
		flex: 0 0 400px;
	}	
</style>
