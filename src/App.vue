<template>
	<AConfigProvider>
		<AppProvider>
			<RouterView />
		</AppProvider>
	</AConfigProvider>
</template>

<script setup lang="ts">
import { AppProvider } from '@/components/application'
</script>

<style>
#app {
	width: 100%;
	height: 100%;
}
</style>

<style scoped></style>
