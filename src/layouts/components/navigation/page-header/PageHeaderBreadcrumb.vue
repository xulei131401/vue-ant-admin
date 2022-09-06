<template>
	<div>
		<a-breadcrumb :routes="routes">
			<template #itemRender="{ route, params, routes, paths }">
				<span v-if="routes.indexOf(route) === routes.length - 1">{{ route.breadcrumbName }}</span>
				<router-link v-else :to="paths.join('/')">{{ route.breadcrumbName }}</router-link>
			</template>
		</a-breadcrumb>
	</div>
</template>
<script lang="ts">
export default {
	name: ''
}
</script>

<script setup lang="ts">
interface Route {
	path: string
	breadcrumbName: string
	children?: Array<{
		path: string
		breadcrumbName: string
	}>
}

const routes = ref<Route[]>([
	{
		path: 'index',
		breadcrumbName: 'home'
	},
	{
		path: 'first',
		breadcrumbName: 'first',
		children: [
			{
				path: '/general',
				breadcrumbName: 'General'
			},
			{
				path: '/layout',
				breadcrumbName: 'Layout'
			},
			{
				path: '/navigation',
				breadcrumbName: 'Navigation'
			}
		]
	},
	{
		path: 'second',
		breadcrumbName: 'second'
	}
])
</script>

<style scoped lang="scss"></style>
