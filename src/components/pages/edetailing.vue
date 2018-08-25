<template>
	<v-container grid-list-lg fluid>
		<v-layout row wrap fluid>
			<v-flex
				class="item"
				v-for="item in presentations"							
				:key="item.id"
			>
				<v-card color="white" class="v-card">
					<v-card-media
						:src="defaultImage"
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
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import * as VCard from 'vuetify/es5/components/VCard';
	import defaultImage from '@/assets/road.jpg';

	export default {
		name: 'Edetailing',
		data: function() {
			return {
				defaultImage: defaultImage
			}
		},
		components: {
			...VCard
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
