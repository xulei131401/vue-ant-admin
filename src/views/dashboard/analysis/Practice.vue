<template>
	<div>
		<button @click="onClick">点我</button>
		<Attr :abc="abc" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'Practice',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import Attr from '@/views/test/Attr.vue'

let abc = ref(123)
console.log('unref:', unref(abc))
const onClick = () => {
	abc.value = 234
}
</script>

<style scoped lang="scss"></style>
