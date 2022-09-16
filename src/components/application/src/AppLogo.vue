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
import type { PropType } from 'vue'
import { usePrefixCls } from '@/composables/core/useHtml'
import { ThemeMode } from '@/enums/themeEnum'
import { HOME_ROUTE } from '@/router/constant'
import { useGo } from '@/composables/core/usePage'

const { go } = useGo()
const { prefixCls } = usePrefixCls('app-logo')
const props = defineProps({
	theme: { type: String as PropType<ThemeMode> }
})

const getClass = computed(() => {
	return [prefixCls, props.theme]
})

const getTitleClass = computed(() => {
	return [`${prefixCls}__title`]
})

const goHome = () => {
	go(HOME_ROUTE.path)
}
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-app-logo';
.#{$prefix-cls} {
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

	&.light &__title {
		color: $primary-color;
	}

	&.dark &__title {
		color: $white;
	}

	&__title {
		font-size: 16px;
		font-weight: 700;
		transition: all 0.5s;
		line-height: normal;
	}
}
</style>
