<template>
	<div>
		<BasicModal ref="modal" v-bind="modalProps" :destroyOnClose="false" :closeFunc="onCloseFunc" @ok="onOk">
			<template #default>自定义modal</template>
		</BasicModal>
		<div>xxxxxxxxxxxx</div>
	</div>
</template>
<script setup lang="ts">
const modal = ref()

const modalProps = {
	title: '标题',
	width: 800,
	okType: 'link',
	loading: true,
	loadingTip: 'loading tip'
}
onMounted(() => {
	modal.value.openModal()
})

const onCloseFunc = async () => {
	return true
}

const onOk = () => {
	console.log('ok')
}
</script>

<style scoped lang="scss"></style>
