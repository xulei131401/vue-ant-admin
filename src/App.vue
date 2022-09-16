<template>
	<AConfigProvider :locale="getAntdLocale">
		<AppProvider>
			<RouterView />
		</AppProvider>
	</AConfigProvider>
</template>

<script setup lang="ts">
import { AppProvider } from '@/components/application'
import { useLocale } from './composables/core/useLocale'
const { getAntdLocale } = useLocale()
</script>

<style>
#app {
	width: 100%;
	height: 100%;
}
</style>

<style scoped></style>
