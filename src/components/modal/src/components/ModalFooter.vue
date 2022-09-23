<template>
	<div>
		<slot name="insertFooter"></slot>
		<!--取消按钮-->
		<template v-if="showCancelButton">
			<AButton v-bind="cancelButtonProps" @click="handleCancel">
				{{ cancelText }}
			</AButton>
		</template>

		<slot name="centerFooter"></slot>
		<!--确认按钮-->
		<template v-if="showOkButton">
			<AButton :type="okType" @click="handleOk" :loading="confirmLoading" v-bind="okButtonProps">
				{{ okText }}
			</AButton>
		</template>
		<slot name="appendFooter"></slot>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'ModalFooter'
})
</script>

<script setup lang="ts">
import { basicProps } from '../typing'
defineProps(basicProps())

const emits = defineEmits(['ok', 'cancel'])
const handleOk = (e: Event) => {
	emits('ok', e)
}

const handleCancel = (e: Event) => {
	emits('cancel', e)
}
</script>

<style scoped lang="scss"></style>
