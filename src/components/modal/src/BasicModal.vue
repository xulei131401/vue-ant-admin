<template>
	<Modal v-bind="getBindValue" @cancel="onCancel" @ok="onOk">
		<!--自定义closeIcon-->
		<template v-if="!$slots.closeIcon" #closeIcon>
			<ModalClose @cancel="onCancel" />
		</template>
		<!--自定义 header-->
		<template v-if="!$slots.title" #title>
			<ModalHeader :title="getBindValue.title" />
		</template>
		<!--自定义footer-->
		<template v-if="!$slots.footer" #footer>
			<ModalFooter v-bind="getBindValue" @cancel="onCancel" @ok="onOk">
				<template v-for="item in Object.keys(pick($slots, ['insertFooter', 'centerFooter', 'appendFooter']))" #[item]="data">
					<slot :name="item" v-bind="data || {}"></slot>
				</template>
			</ModalFooter>
		</template>
		<!--自定义 content-->
		<ModalWrapper>
			<slot></slot>
		</ModalWrapper>
		<!--其余未自定义的slot-->
		<template v-for="item in Object.keys(omit($slots, 'default'))" #[item]="data">
			<slot :name="item" v-bind="data || {}"></slot>
		</template>
	</Modal>
</template>

<script lang="ts">
export default defineComponent({
	name: 'BasicModal',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import Modal from './components/Modal.vue'
import ModalHeader from './components/ModalHeader.vue'
import ModalWrapper from './components/ModalWrapper.vue'
import ModalFooter from './components/ModalFooter.vue'
import { basicProps } from './props'
import { omit, pick } from 'lodash-es'
import { useBasicModal } from './composables/useBasicModal'

const props = defineProps(basicProps())
const emits = defineEmits(['cancel', 'ok'])
const { getBindValue, openModal, closeModal, onCancel, onOk } = useBasicModal(props, emits)
defineExpose({ openModal, closeModal })
</script>

<style scoped lang="scss"></style>
