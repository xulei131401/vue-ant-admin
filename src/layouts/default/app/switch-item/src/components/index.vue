<template>
	<div :class="prefixCls">
		<span> {{ title }}</span>
		<ASwitch v-bind="getSwitchProps" @change="OnChange" :disabled="disabled" :checkedChildren="t('layout.config.on')" :unCheckedChildren="t('layout.config.off')" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SwitchItem'
})
</script>

<script setup lang="ts">
import { switchItemProps } from '../typing'
import { useSetting } from '@/layouts/default/setting'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.settingSwitchItem)
const { t } = useI18n()
const { handler } = useSetting()
const props = defineProps(switchItemProps())

const getSwitchProps = computed(() => {
	return props.checked ? { checked: props.checked } : {}
})

const OnChange = (value) => {
	props.event && handler(props.event, value)
}
</script>

<style scoped lang="scss">
.#{$prefix-cls-setting-switch-item} {
	display: flex;
	justify-content: space-between;
	margin: 16px 0;
}
</style>
