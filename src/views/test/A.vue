<template>
	<div>
		<div>A组件</div>
		<div>数字:{{ count }}</div>
	</div>
</template>
<script setup lang="ts">
const count = ref<number>(0)

/**
 * 必须在template引用才会执行，引用几次，执行几次
 */
console.log('AAAAAAAAA')

onMounted(() => {
	console.log('A组件onMounted')
})
</script>
<script lang="ts"></script>

<style scoped lang="scss"></style>
