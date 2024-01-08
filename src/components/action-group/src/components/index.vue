<template>
	<div class="action-group-wrapper" v-if="actionsRef.length > 0">
		<template v-for="(action, index) in actionsRef" :key="index">
			<span>
				<ActionClick v-if="action.type == 'click'" v-bind="{ action, record }" />
			</span>
			<span v-if="index < actionsRef.length - 1" style="margin: 0 2px">|</span>
		</template>
		<!-- <span v-if="moreActions.length > 0 || idx < thisActions.length - 1" style="margin: 0 2px">|</span> -->
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'ActionGroup'
})
</script>

<script setup lang="ts">
import ActionClick from './ActionClick.vue'
import { actionGroupProps } from '../typing'
import { useActionGroup } from '../composables'

const props = defineProps(actionGroupProps())
const { actionsRef } = useActionGroup(props)
</script>

<style scoped lang="scss">
.action-group-wrapper {
	display: flex;
}
</style>
