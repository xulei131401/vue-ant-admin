<template>
	<div>
		<div><AntIcon name="UserOutlined" /></div>
		<ADropdown placement="bottomLeft" :overlayClassName="`${prefixCls}-dropdown-overlay`">
			<span :class="[`${prefixCls}`]" class="flex">
				<img :class="`${prefixCls}__header`" src="https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640" />
				<span :class="`${prefixCls}__info hidden md:block`">
					<span :class="`${prefixCls}__name  `" class="truncate"> 许磊 </span>
				</span>
			</span>

			<template #overlay> </template>
		</ADropdown>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'UserDropdown'
})
</script>

<script setup lang="ts">
import AntIcon from '@/components/icon/src/components/AntIcon.vue'
import { usePrefixCls } from '@/composables/core/useHtml'

const { prefixCls } = usePrefixCls('header-user-dropdown')
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-header-user-dropdown';

.#{$prefix-cls} {
	img {
		width: 24px;
		height: 24px;
		margin-right: 12px;
	}
}
</style>
