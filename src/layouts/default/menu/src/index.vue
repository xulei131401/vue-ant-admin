<template>
	<AppLogo />
	<BasicMenu :items="menus" />
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutMenu',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { AppLogo } from '@/components/application'
import { BasicMenu } from '@/components/menu'
import { useLayoutMenu } from './composables/useLayoutMenu'
const { menusRef } = useLayoutMenu()
const menus = unref(menusRef)
</script>

<style scoped lang="scss"></style>
