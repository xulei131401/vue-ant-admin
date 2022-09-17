<template>
	<div :class="getClass">
		<ASwitch :checked="checked" @change="onChange">
			<template #checkedChildren>
				<CustomIcon name="sun" />
			</template>
			<template #unCheckedChildren>
				<CustomIcon name="moon" />
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
import { usePrefixCls } from '@/composables/core/useHtml'
import { useAppConfig } from '@/composables/config/useAppConfig'
const { prefixCls } = usePrefixCls('app-theme-switch')
const { isDarkTheme, isLightTheme, switchTheme } = useAppConfig()

const checked = computed(() => {
	return unref(isLightTheme)
})

const getClass = computed(() => [
	prefixCls,
	{
		[`${prefixCls}--dark`]: unref(isDarkTheme),
		[`${prefixCls}--light`]: !unref(isDarkTheme)
	}
])

const onChange = () => {
	switchTheme()
}
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-app-theme-switch';

.#{$prefix-cls} {
	&--light {
		:deep(.ant-switch-checked) {
			background-color: #151515;
		}
	}

	&--dark {
		:deep(.ant-switch) {
			background-color: #151515;
		}
	}
}
</style>
