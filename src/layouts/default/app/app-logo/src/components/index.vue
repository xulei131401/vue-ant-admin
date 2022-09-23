<template>
	<div :class="getClass" @click="goHome">
		<img src="@/assets/logo.png" alt="logo" />
		<div :class="getTitleClass">Holy Fronted</div>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'AppLogo'
})
</script>

<script setup lang="ts">
import { type PropType } from 'vue'
import { Theme } from '@/enums'
import { HOME_ROUTE } from '@/typing'
import { useGo } from '@/composables/core/useGo'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { pushGo } = useGo()
const { prefixCls } = usePrefixCls(prefixClsStyle.appLogo)
const props = defineProps({
	theme: { type: String as PropType<Theme> }
})

const getClass = computed(() => {
	return [prefixCls, [`${prefixCls}--${props.theme}`]]
})

const getTitleClass = computed(() => {
	return [`${prefixCls}__title`]
})

const goHome = () => {
	pushGo(HOME_ROUTE.path)
}
</script>

<style scoped lang="scss">
.#{$prefix-cls-app-logo} {
	display: flex;
	align-items: center;
	padding-left: 7px;
	cursor: pointer;
	transition: all 0.2s ease;
	height: $header-height;
	width: 210px;
	min-width: 210px;

	& img {
		width: $logo-width;
		height: $logo-width;
		margin-right: 2px;
		display: inline-block;
		height: 32px;
		vertical-align: middle;
		transition: height 0.2s;
	}

	&__title {
		font-size: 16px;
		font-weight: 700;
		transition: all 0.5s;
		line-height: normal;
	}

	&--#{$light-theme} {
		.#{$prefix-cls-app-logo}__title {
			color: $primary-color;
		}
	}

	&--#{$dark-theme} {
		.#{$prefix-cls-app-logo}__title {
			color: $white;
		}
	}
}
</style>
