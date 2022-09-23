<template>
	<div :class="getClass">
		<ASwitch :checked="checked" @change="onChange">
			<template #checkedChildren>
				<CustomIcon name="moon" />
			</template>
			<template #unCheckedChildren>
				<CustomIcon name="sun" />
			</template>
		</ASwitch>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'AppThemeSwitch'
})
</script>

<script setup lang="ts">
import { CustomIcon } from '@/components/icon'
import { useAppConfig } from '@/composables/config/useAppConfig'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'
import { useAppTheme } from '../composables'

const { prefixCls } = usePrefixCls(prefixClsStyle.appThemeSwitch)
const { isDarkTheme, getTheme } = useAppConfig()
const { switchTheme } = useAppTheme()

const checked = computed(() => {
	return unref(isDarkTheme)
})

const getClass = computed(() => {
	const theme = unref(getTheme)
	return [prefixCls, [`${prefixCls}--${theme}`]]
})

const onChange = () => {
	switchTheme()
}
</script>

<style scoped lang="scss">
.#{$prefix-cls-app-theme-switch} {
	&--#{$light-theme} {
		:deep(.ant-switch) {
			background-color: $dark-color;
		}
	}

	&--#{$dark-theme} {
		:deep(.ant-switch-checked) {
			background-color: $dark-color;
		}
	}
}
</style>
