<template>
	<BasicTitle :class="prefixCls">
		<slot name="title"></slot>
		{{ !$slots.title ? title : '' }}
	</BasicTitle>
</template>
<script lang="ts">
export default defineComponent({
	name: 'DrawerHeader',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { BasicTitle } from '@/components/title'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'
import { drawerHeaderProps } from '../typing'

const { prefixCls } = usePrefixCls(prefixClsStyle.basicDrawerHeader)
defineProps(drawerHeaderProps())
</script>

<style scoped lang="scss">
$footer-height: 60px;
.#{$prefix-cls-basic-drawer-header} {
	display: flex;
	height: 100%;
	align-items: center;

	&__back {
		padding: 0 12px;
		cursor: pointer;

		&:hover {
			color: $primary-color;
		}
	}

	&__twrap {
		flex: 1;
	}

	&__toolbar {
		padding-right: 50px;
	}
}
</style>
