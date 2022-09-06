<template>
	<AppLogo />
	<BasicMenu v-bind="basicMenuProps" />
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
import { menus } from '@/mock/menu'

const basicMenuProps = {
	items: menus
}
</script>

<style scoped lang="scss"></style>
