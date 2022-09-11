<template>
	<!--menu组件的内部只能是menuItem或者subMenu-->
	<MenuItem v-bind="$props" />
	<SubMenu v-bind="$props" />
</template>
<script lang="ts">
export default defineComponent({
	name: 'MenuItemWrapper',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import SubMenu from './sub-menu/SubMenu.vue'
import MenuItem from './menu-item/MenuItem.vue'
import { usePrefixCls } from '@/composables/core/useHtml'
import { menuItemWrapperProps } from './menuItemWrapperProps'
const { prefixCls } = usePrefixCls('basic-menu-item-wrapper')
defineProps(menuItemWrapperProps())
</script>

<style scoped lang="scss"></style>
