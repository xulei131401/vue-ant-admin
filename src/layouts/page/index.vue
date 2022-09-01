<template>
	<RouterView>
		<template #default="{Component, route}">
			<!-- <keep-alive v-if="false">
						<component :is="Component" :key="route.fullPath" />
					</keep-alive> -->
			<div :key="route.name">
				<component :is="Component" :key="route.fullPath" />
			</div>
		</template>
	</RouterView>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XPageLayout',
		inheritAttrs: false
	})
</script>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
