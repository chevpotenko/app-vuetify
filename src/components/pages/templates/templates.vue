<i18n>
	{
		"en": {
			"message": {
				"hello": "templates"
			}
		},
		"ja": {
			"message": {
				"hello": "こんにちは、世界"
			}
		}
	}
</i18n>

<template>
	<v-container fluid>
		<v-slide-y-transition mode="out-in">
			<v-layout column align-center>				
				<p class="display-2 font-weight-black">{{ $t("message.hello") }}</p>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>

<script>
	export default {
		name: 'templates'
	}
</script>

<style scoped>
	
</style>
