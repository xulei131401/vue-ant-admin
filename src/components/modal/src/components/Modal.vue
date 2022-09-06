<template>
	<AModal v-bind="props" @cancel="onCancel" @ok="onOk">
		<template #[item]="data" v-for="item in Object.keys($slots)">
			<slot :name="item" v-bind="data || {}"></slot>
		</template>
	</AModal>
</template>

<script lang="ts">
export default defineComponent({
	name: 'Modal',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { modalProps } from './modalProps'
const props = defineProps(modalProps())
const emits = defineEmits(['cancel', 'ok'])

const onCancel = (e: Event) => {
	emits('cancel', e)
}

const onOk = (e: Event) => {
	emits('ok', e)
}
</script>

<style scoped lang="scss"></style>
