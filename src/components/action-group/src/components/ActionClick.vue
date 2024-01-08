<template>
	<ALink v-bind="{ text: action.text, link: action.url }" @link-click="onClick" />
</template>
<script lang="ts">
export default defineComponent({
	name: 'ActionClick'
})
</script>

<script setup lang="ts">
import { ALink } from '@/components/link'
import { actionClickProps } from '../typing'
import { useActionClick } from '../composables'
const props = defineProps(actionClickProps())
const { onClick } = useActionClick(props)
</script>

<style scoped lang="scss"></style>
