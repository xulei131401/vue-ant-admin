<template>
	<BasicDrawer v-bind="basicProps" ref="basicDrawerRef">
		<ADivider>{{ $t('layout.config.theme') }}</ADivider>
		<AppTheme />
		<ADivider>{{ $t('layout.config.layoutMode') }}</ADivider>
		<LayoutMode :items="LayoutModeList" :mode="getLayoutMode" :handler="onClickLayoutMode" />
		<ADivider>{{ $t('layout.config.headerSkin') }}</ADivider>
		<ThemeColor v-bind="headerThemeColorProps" />
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
import { BasicDrawer } from '@/components/drawer'
import { AppTheme, LayoutMode, ThemeColor, SwitchItem, useLayoutMode } from '@/layouts/default/app'
import { SettingHandler } from '@/enums'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { HEADER_THEME_COLOR } from '@/constant'
import { useAppConfig } from '@/composables/config/useAppConfig'

const { t } = useI18n()
const { LayoutModeList, onClickLayoutMode } = useLayoutMode()
const { getLayoutMode } = useAppConfig()
const { getFixed: getHeaderFixed, getHeaderBgColor } = useHeaderConfig()

const basicDrawerRef = ref()
const basicProps = computed(() => {
	return {
		visible: false,
		title: '项目配置'
	}
})

const switchItemWithHeaderFixProps = computed(() => {
	return {
		title: t('layout.config.fixedHeader'),
		event: SettingHandler.HEADER_FIXED,
		checked: unref(getHeaderFixed),
		disabled: false
	}
})

const headerThemeColorProps = computed(() => {
	return {
		colorList: HEADER_THEME_COLOR,
		color: unref(getHeaderBgColor),
		event: SettingHandler.HEADER_BG_COLOR
	}
})
const onClickDrawer = () => {
	basicDrawerRef.value.onToggle()
}

defineExpose({ onClickDrawer })
</script>

<style scoped lang="scss"></style>
