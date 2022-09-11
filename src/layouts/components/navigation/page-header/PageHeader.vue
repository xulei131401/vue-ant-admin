<!-- <template>
	<div class="x-page-header-wrapper">
		<a-page-header :ghost="false" class="page-header" :title="title" :breadcrumb="breadcrumb" />
	</div>
</template>
<script lang="ts">
export default {
	name: 'XPageHeader'
}
</script>
<script setup lang="ts">
import { getMenuInfoByRouteName } from '@/business/export'
import type { RouteRecordName } from '@/business/export'
import { getRouteRecordByName } from '@/router/route'
import XPageHeaderBreadcrumb from '@/layouts/components/navigation/page-header/PageHeaderBreadcrumb.vue'

interface Route {
	path: string
	breadcrumbName: string
	children?: Array<{
		path: string
		breadcrumbName: string
	}>
}

const route = useRoute()
const breadcrumb = reactive<any>({
	// routes: [],
	itemRender: () => {
		return XPageHeaderBreadcrumb.render && XPageHeaderBreadcrumb.render()
	}
})

const title = ref<string>('')
const subTitle = ref<string>('')

watch(
	() => route.name,
	(newValue) => {
		createBreadcrumb(newValue!)
	}
)
const createBreadcrumb = (routeName: RouteRecordName) => {
	const _routeName = routeName as string
	if (!_routeName) {
		return
	}

	const { currentMenu, parentMenu } = getMenuInfoByRouteName(_routeName)
	const currentRoute = getRouteRecordByName(currentMenu?.routeName!)
	const parentRoute = getRouteRecordByName(parentMenu?.routeName!)
	breadcrumb.routes = []

	breadcrumb.routes = [
		{
			path: '#',
			breadcrumbName: '首页'
		}
	]

	console.log('parentRoute:', parentRoute, parentMenu)

	if (parentMenu) {
		breadcrumb.routes.push({
			path: parentRoute?.path,
			breadcrumbName: parentMenu?.title
		})
	}

	if (currentMenu) {
		breadcrumb.routes.push({
			path: currentRoute?.path,
			breadcrumbName: currentMenu?.title
		})
	}

	if (currentMenu) {
		title.value = currentMenu.title
	}

	console.log('breadcrumbs:', breadcrumb.routes)
}
</script>

<style scoped lang="scss">
.x-page-header-wrapper {
	border: 1px solid rgb(235, 237, 240);
	background-color: #fff;
}
</style> -->
