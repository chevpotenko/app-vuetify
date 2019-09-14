<template lang="html">
	<v-slide-y-transition mode="out-in">
		<v-container>
			<v-layout class="page-header">
				<v-flex></v-flex>
				<v-flex></v-flex>
				<v-flex></v-flex>
			</v-layout>
			<v-layout row wrap class="page-content">
				<v-flex lg8  offset-md2>
					<slot name="content"></slot>
				</v-flex>
			</v-layout>
			<v-layout class="page-footer">
				<v-flex></v-flex>
				<v-flex></v-flex>
				<v-flex></v-flex>
			</v-layout>
		</v-container>
	</v-slide-y-transition>
</template>

<script lang="js">	
	export default  {
		name: 'PageLayout',
		components: {},
		computed: {},
		methods: {}
	}
</script>

<style scoped lang="css">
	
</style>
