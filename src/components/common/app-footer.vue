<template lang="html">
	<v-footer :fixed="fixed" app>
		<span>&copy; 2018</span>
	</v-footer>
</template>

<script lang="js">
	export default {
		name: 'app-footer',
		props: [],
		mounted() {},
		data() {return {}},
		methods: {},
		computed: {
			fixed() {
				return this.$store.state.fixed;
			}
		}
	}
</script>

<style scoped lang="css">
	
</style>
