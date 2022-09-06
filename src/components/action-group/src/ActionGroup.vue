<template>
	<div class="x-action-group-wrapper" v-if="xActions.length > 0">
		<template v-for="(action, index) in xActions">
			<span>
				<x-action-click v-if="action.type == 'click'" v-bind="{ action, record }" />
			</span>
			<span v-if="index < xActions.length - 1" style="margin: 0 2px">|</span>
		</template>
		<!-- <span v-if="moreActions.length > 0 || idx < thisActions.length - 1" style="margin: 0 2px">|</span> -->
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'XActionGroup',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { actionGroupProps } from './actionGroupProps'
import { useActionGroup } from './hooks/useActionGroup'
import xActionClick from './components/ActionClick.vue'
const props = defineProps(actionGroupProps())
const { xActions } = useActionGroup(props)
</script>

<style scoped lang="scss">
.x-action-group-wrapper {
	display: flex;
}
</style>
