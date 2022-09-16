<template>
	<div :class="prefixCls">
		<span> {{ title }}</span>
		<ASwitch v-bind="getBindValue" @change="OnChange" :disabled="disabled" :checkedChildren="t('layout.config.on')" :unCheckedChildren="t('layout.config.off')" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SwitchItem',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
import { switchItemProps } from './props'
import { useSetting } from '../composables/useSetting'

const { prefixCls } = usePrefixCls('setting-switch-item')
const { t } = useI18n()
const { handler } = useSetting()
const props = defineProps(switchItemProps())

const getBindValue = computed(() => {
	return props.checked ? { checked: props.checked } : {}
})

const OnChange = (value) => {
	props.event && handler(props.event, value)
}
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-setting-switch-item';

.#{$prefix-cls} {
	display: flex;
	justify-content: space-between;
	margin: 16px 0;
}
</style>
