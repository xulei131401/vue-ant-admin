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
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'
import { menuItemWrapperProps } from '../typing'
defineProps(menuItemWrapperProps())
</script>

<style scoped lang="scss"></style>
