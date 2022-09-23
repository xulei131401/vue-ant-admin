<template>
	<div>
		<Dropdown placement="bottom" :trigger="['click']" :dropMenuList="availableLocaleList" :selectedKeys="selectedKeys" @menu-event="handleMenuEvent" overlayClassName="app-locale-picker-overlay">
			<span class="cursor-pointer flex items-center">
				<AntIcon name="FontColorsOutlined" />
				<span v-if="showText" class="ml-1">{{ getLocaleText }}</span>
			</span>
		</Dropdown>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'AppLocale'
})
</script>

<script setup lang="ts">
import { Dropdown, type DropMenu } from '@/components/dropdown'
import AntIcon from '@/components/icon/src/components/AntIcon.vue'
import { availableLocaleList } from '@/configs/locale'
import { LocaleType } from '@/utils'

const props = defineProps({
	/**
	 * Whether to display text
	 */
	showText: { type: Boolean, default: true },
	/**
	 * Whether to refresh the interface when changing
	 */
	reload: { type: Boolean }
})

const selectedKeys = ref<string[]>([])

// const { changeLocale, getLocale } = useLocale()

const getLocaleText = computed(() => {
	const key = selectedKeys.value[0]
	if (!key) {
		return ''
	}
	return availableLocaleList.find((item) => item.event === key)?.text
})

// watchEffect(() => {
// 	selectedKeys.value = [unref(getLocale)]
// })

async function toggleLocale(lang: LocaleType | string) {
	// await changeLocale(lang as LocaleType)
	selectedKeys.value = [lang as string]
	props.reload && location.reload()
}

function handleMenuEvent(menu: DropMenu) {
	// if (unref(getLocale) === menu.event) {
	// return
	// }
	// toggleLocale(menu.event as string)
}
</script>

<style scoped lang="scss">
.app-locale-picker-overlay {
	.ant-dropdown-menu-item {
		min-width: 160px;
	}
}
</style>
