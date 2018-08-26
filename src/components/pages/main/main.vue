<i18n>
	{
		"en": {
			"message": {
				"hello": "hello world"
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
				<p>
					<img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
				</p>				
				<p class="display-4 font-weight-black">App</p>
				<p class="display-4 font-weight-black">{{ $t("message.hello") }}</p>
			</v-layout>
		</v-slide-y-transition>
	</v-container>
</template>

<script>
	export default {
		name: 'Main'
	}
</script>

<style scoped>
	
</style>
