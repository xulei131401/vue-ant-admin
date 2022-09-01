<template>
	<div>
		<div>B组件</div>
		<div>数字：{{ count }}</div>
	</div>
</template>
<script lang="ts">
	import {defineComponent} from 'vue'

	/**
	 * 这个区域代码只会执行一次，不管是多次import还是多次使用组件
	 */

	/**
	 * defineComponent内部的代码必须在template使用才会执行，使用几次执行几次，
	 * 与import多次无关
	 */
	export default defineComponent({
		data() {
			return {
				count: 1
			}
		},
		mounted() {
			console.log('我是B组件mounted')
		}
	})
</script>

<style scoped lang="scss"></style>
