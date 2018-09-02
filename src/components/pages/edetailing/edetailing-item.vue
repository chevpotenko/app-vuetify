<template>
	<v-card color="white" class="v-card">
		<v-card-media
			:src="image"
			alt="icon"
			height="200px"
		>
			<v-container
				fill-height
				fluid
				pa-2
				>
				<v-layout fill-height>
					<v-flex xs12 align-end flexbox>
						<span class="headline white--text" v-text="item.name"></span>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card-media>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>favorite</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>bookmark</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>share</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import defaultImage from '@/assets/road.jpg';
	export default {
		name: 'edetailing-item',
		props:{
			item: {
				type: Object,
				required: true
			}
		},				
		computed: {
			image: function() {
				return this.item.image ? this.item.image : defaultImage;
			}
		}
	}
</script>

<style scoped>
	
</style>
