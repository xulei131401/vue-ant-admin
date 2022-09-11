<template>
	<BasicDrawer v-bind="basicProps">asd</BasicDrawer>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SettingDrawer'
})
</script>

<script setup lang="ts">
import BasicDrawer from '@/components/drawer/src/BasicDrawer.vue'

const basicProps = {
	visible: false,
	title: '22'
}
</script>

<style scoped lang="scss"></style>
