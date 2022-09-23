<template>
	<RouterView>
		<template #default="{ Component, route }">
			<!-- <keep-alive v-if="false">
						<component :is="Component" :key="route.fullPath" />
					</keep-alive> -->
			<div>
				<!-- {{ route }} -->
				<component :is="Component" />
			</div>
		</template>
	</RouterView>
</template>
<script lang="ts">
export default defineComponent({
	name: 'PageLayout'
})
</script>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
