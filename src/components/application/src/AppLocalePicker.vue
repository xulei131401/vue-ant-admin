<template>
	<span class="cursor-pointer flex items-center">
		<!-- <Icon icon="ion:language" /> -->
		<span v-if="showText" class="ml-1">{{ getLocaleText }}</span>
	</span>
</template>
<script lang="ts">
export default defineComponent({
	name: 'AppLocalePicker',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
// type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko'
const showText = ref(true)
const getLocaleText = '简体中文'
</script>

<style scoped lang="scss"></style>
