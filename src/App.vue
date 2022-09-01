<template>
	<AConfigProvider>
		<XAppProvider>
			<RouterView />
		</XAppProvider>
	</AConfigProvider>
</template>

<script setup lang="ts">
	import {XAppProvider} from '@/components/application'
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
	}
</style>

<style scoped></style>
