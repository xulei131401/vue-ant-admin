<template>
	<ADropdown :trigger="trigger" v-bind="$attrs">
		<span>
			<slot></slot>
		</span>
		<template #overlay>
			<AMenu :selectedKeys="selectedKeys">
				<template v-for="item in dropMenuList" :key="`${item.event}`">
					<a-menu-item v-bind="getAttr(item.event)" @click="handleClickMenu(item)" :disabled="item.disabled">
						<a-popconfirm v-if="popconfirm && item.popConfirm" v-bind="getPopConfirmAttrs(item.popConfirm)">
							<template #icon v-if="item.popConfirm.icon">
								<!-- <Icon :icon="item.popConfirm.icon" /> -->
							</template>
							<div>
								<!-- <Icon :icon="item.icon" v-if="item.icon" /> -->
								<span class="ml-1">{{ item.text }}</span>
							</div>
						</a-popconfirm>
						<template v-else>
							<!-- <Icon :icon="item.icon" v-if="item.icon" /> -->
							<span class="ml-1">{{ item.text }}</span>
						</template>
					</a-menu-item>
					<a-menu-divider v-if="item.divider" :key="`d-${item.event}`" />
				</template>
			</AMenu>
		</template>
	</ADropdown>
</template>

<script lang="ts">
export default defineComponent({
	name: 'DropDown',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { dropDownProps, type DropMenu } from './props'
import { omit } from 'lodash-es'
import { isFunction } from '@/utils/is'

const props = defineProps(dropDownProps())
const emit = defineEmits(['menuEvent'])

function handleClickMenu(item: DropMenu) {
	const { event } = item
	const menu = props.dropMenuList.find((item) => `${item.event}` === `${event}`)
	emit('menuEvent', menu)
	item.onClick?.()
}

const getPopConfirmAttrs = computed(() => {
	return (attrs) => {
		const originAttrs = omit(attrs, ['confirm', 'cancel', 'icon'])
		if (!attrs.onConfirm && attrs.confirm && isFunction(attrs.confirm)) originAttrs['onConfirm'] = attrs.confirm
		if (!attrs.onCancel && attrs.cancel && isFunction(attrs.cancel)) originAttrs['onCancel'] = attrs.cancel
		return originAttrs
	}
})

const getAttr = (key: string | number) => ({ key })
</script>
<style scoped lang="scss"></style>
