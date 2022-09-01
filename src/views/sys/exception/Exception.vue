<template>
	<div>
		<a-result status="404" title="404" sub-title="页面不存在1">
			<template #extra>
				<a-button type="primary" @click="toHome"> 返回首页 </a-button>
			</template>
		</a-result>
	</div>
</template>
<script setup lang="ts">
	const router = useRouter()
	const toHome = () => {
		console.log('back home')
		router.push({name: 'dashboard'})
	}
</script>

<style scoped lang="scss"></style>
