<template>
	<div class="x-logo-wrapper">
		<div class="logo">
			<router-link to="/">
				<img src="@/assets/logo.png" alt="logo" width="32" height="32" />
				<h1>Holy Fronted</h1>
			</router-link>
		</div>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'Logo',
	inheritAttrs: false
})
</script>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
	position: relative;
	display: flex;
	align-items: center;
	padding: 16px 16px;
	line-height: 32px;
	cursor: pointer;
}

.logo > a {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 32px;
}

.logo img {
	display: inline-block;
	height: 32px;
	vertical-align: middle;
	transition: height 0.2s;
}

.logo h1 {
	display: inline-block;
	height: 32px;
	margin: 0 0 0 12px;
	overflow: hidden;
	color: #0960bd;
	font-weight: 600;
	font-size: 18px;
	line-height: 32px;
	vertical-align: middle;
	animation: fade-in;
	animation-duration: 0.2s;
}
</style>
