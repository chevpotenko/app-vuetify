<i18n>
	{
		"en": {
			"message": {
				"hello": "news"
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
	<page-layout>
		<template slot="content">
			<v-layout column align-center>				
				<p class="display-2 font-weight-black">{{ $t("message.hello") }}</p>
			</v-layout>
		</template>
	</page-layout>		
</template>

<script>
	import PageLayout from '../../../components/common/page-layout'
	export default {
		name: 'News',
		components: {
			'page-layout': PageLayout,
		},
	}
</script>

<style scoped>
	
</style>
