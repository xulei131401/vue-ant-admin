<template>
	<div :class="getClass" @click="switchThemeMode">
		<div :class="`${prefixCls}-inner`"></div>
		<CustomIcon size="14" name="sun" />
		<CustomIcon size="14" name="moon" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'AppThemeModeSwitch',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import CustomIcon from '@/components/icon/src/components/CustomIcon.vue'
import { useAppConfig } from '@/composables/config/useAppConfig'
import { usePrefixCls } from '@/composables/core/useHtml'
const { prefixCls } = usePrefixCls('theme-mode-switch')
const { getThemeMode, isDarkTheme, setThemeMode } = useAppConfig()

const getClass = computed(() => [
	prefixCls,
	{
		[`${prefixCls}--dark`]: unref(isDarkTheme)
	}
])

const switchThemeMode = () => {
	const darkMode = unref(isDarkTheme)
	setThemeMode(darkMode)
	// updateDarkTheme(darkMode)
	// updateHeaderBgColor()
	// updateSidebarBgColor()
}
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-dark-switch';

html[data-theme='dark'] {
	.#{$prefix-cls} {
		border: 1px solid rgb(196 188 188);
	}
}

.#{$prefix-cls} {
	position: relative;
	display: flex;
	width: 50px;
	height: 26px;
	padding: 0 6px;
	margin-left: auto;
	cursor: pointer;
	background-color: #151515;
	border-radius: 30px;
	justify-content: space-between;
	align-items: center;

	&-inner {
		position: absolute;
		z-index: 1;
		width: 18px;
		height: 18px;
		background-color: #fff;
		border-radius: 50%;
		transition: transform 0.5s, background-color 0.5s;
		will-change: transform;
	}

	&--dark {
		.#{$prefix-cls}-inner {
			transform: translateX(calc(100% + 2px));
		}
	}
}
</style>
