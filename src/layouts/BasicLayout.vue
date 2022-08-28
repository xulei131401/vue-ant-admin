<template>
	<div class="basic-layout-wrapper">
		<x-loading v-if="loading" />
		<template v-else>
			<component :is="layoutComponent" />
		</template>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'XBasicLayout'
	}
</script>

<script setup lang="ts">
	import XSidebarLayout from '@/layouts/components/sidebar-layout/SidebarLayout.vue'
	import XLoading from '@/layouts/components/loading/Loading.vue'
	import {useMainStore} from '@/store/main'
	import type {Component} from 'vue'

	let layoutComponent = shallowRef<Component>(XSidebarLayout)
	let loading = ref<boolean>(true)

	const mainStore = useMainStore()
	onMounted(async () => {
		// https://blog.csdn.net/weixin_43245095/article/details/111354368
		await mainStore.loadMy()
		loading.value = false
	})
</script>

<style scoped>
	.basic-layout-wrapper {
		width: 100%;
		height: 100%;
	}
</style>
