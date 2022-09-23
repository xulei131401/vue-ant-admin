<template>
	<div>
		<LayoutHeaderLeftRight v-if="isLeftRightLayoutMode && mode === LayoutMode.LEFT_RIGHT_LAYOUT" />
		<LayoutHeaderTopBottom v-if="isTopBottomLayoutMode && mode === LayoutMode.TOP_BOTTOM_LAYOUT" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutHeader'
})
</script>

<script setup lang="ts">
import { type PropType } from 'vue'
import { LayoutHeaderLeftRight, LayoutHeaderTopBottom } from '@/layouts/default/app'
import { useAppConfig } from '@/composables/config/useAppConfig'
import { LayoutMode } from '@/enums'
const { isLeftRightLayoutMode, isTopBottomLayoutMode } = useAppConfig()
defineProps({
	mode: { type: String as PropType<LayoutMode> }
})
</script>

<style scoped lang="scss"></style>
