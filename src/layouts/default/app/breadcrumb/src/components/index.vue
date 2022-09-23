<template>
	<div>
		<ABreadcrumb :routes="routes">
			<template #itemRender="{ route, paths }">
				<span v-if="routes.indexOf(route) === routes.length - 1">
					{{ route.breadcrumbName }}
				</span>
				<router-link v-else :to="`${basePath}/${paths.join('/')}`">
					{{ route.breadcrumbName }}
				</router-link>
			</template>
		</ABreadcrumb>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutBreadcrumb'
})
</script>

<script setup lang="ts">
import { useBreadcrumb } from '@/composables/permission/useBreadcrumb'

const basePath = '/components/breadcrumb'
const { routes } = useBreadcrumb()
</script>

<style scoped lang="scss"></style>
