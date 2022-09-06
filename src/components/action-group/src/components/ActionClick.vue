<template>
	<x-link v-bind="{ text: action.text, link: action.url }" @linkClick="onClick" />
</template>
<script lang="ts">
export default defineComponent({
	name: 'XActionClick',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { actionClickProps } from '../props/actionClickProps'
import { useActionClick } from '../hooks/useActionClick'
const props = defineProps(actionClickProps())
const { onClick } = useActionClick(props)
</script>

<style scoped lang="scss"></style>
