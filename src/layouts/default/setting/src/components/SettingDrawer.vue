<template>
	<BasicDrawer v-bind="basicProps" ref="basicDrawerRef">
		<ADivider>{{ $t('layout.config.themeMode') }}</ADivider>

		<ADivider>{{ $t('layout.config.layoutMode') }}</ADivider>
		<LayoutModePick :items="LayoutModeList" :mode="getLayoutMode" :handler="onClickLayoutMode" />

		<ADivider>{{ $t('layout.config.headerSkin') }}</ADivider>
		<ADivider>{{ $t('layout.config.menuSkin') }}</ADivider>
		<ADivider>{{ $t('layout.config.layoutSetting') }}</ADivider>
		<SwitchItem v-bind="switchItemWithHeaderFixProps" />
	</BasicDrawer>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SettingDrawer'
})
</script>

<script setup lang="ts">
import BasicDrawer from '@/components/drawer/src/BasicDrawer.vue'
import LayoutModePick from './layout-mode/index.vue'
import SwitchItem from './switch-item/index.vue'
import { useLayoutMode } from './layout-mode/useLayoutMode'
import { SettingHandlerEnum } from '@/enums/settingHandlerEnum'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'

const { t } = useI18n()
const { LayoutModeList, getLayoutMode, onClickLayoutMode } = useLayoutMode()
const { getFixed: getHeaderFixed } = useHeaderConfig()

const basicDrawerRef = ref()
const basicProps = reactive({
	visible: false,
	title: '项目配置'
})

const switchItemWithHeaderFixProps = computed(() => {
	return {
		title: t('layout.config.fixedHeader'),
		event: SettingHandlerEnum.HEADER_FIXED,
		checked: unref(getHeaderFixed),
		disabled: false
	}
})

const onClickDrawer = () => {
	basicDrawerRef.value.onToggle()
}

defineExpose({ onClickDrawer })
</script>

<style scoped lang="scss"></style>
