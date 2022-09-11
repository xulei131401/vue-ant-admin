<template>
	<AConfigProvider :locale="locale">
		<AppProvider>
			<RouterView />
		</AppProvider>
	</AConfigProvider>
</template>

<script setup lang="ts">
import { AppProvider } from '@/components/application'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const locale = zhCN
</script>

<style>
#app {
	width: 100%;
	height: 100%;
}
</style>

<style scoped></style>
