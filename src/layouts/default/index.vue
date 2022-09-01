<template>
	<ALayout :class="prefixCls">
		<XLayoutHeader />
		<ALayout :class="layoutClass">
			<XLayoutSideBar />
			<ALayout>
				<XLayoutContent />
				<XLayoutFooter />
			</ALayout>
		</ALayout>
	</ALayout>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XLayout',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import XLayoutHeader from './header/index.vue'
	import XLayoutSideBar from './sider/index.vue'
	import XLayoutContent from './content/index.vue'
	import XLayoutFooter from './footer/index.vue'
	import {useHtmlClass} from '@/composables/web/useHtmlClass'

	const {prefixCls} = useHtmlClass('default-layout')
	const layoutClass = computed(() => {
		let cls: string[] = ['ant-layout']
		cls.push('ant-layout-has-sider')
		return cls
	})
</script>

<style scoped lang="scss">
	@import '@/style/layouts/index.scss';
</style>
