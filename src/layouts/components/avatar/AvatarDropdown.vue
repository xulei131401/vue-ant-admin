<template>
	<div class="x-avatar-wrapper">
		<a-dropdown v-if="currentUser && currentUser.name" placement="bottomRight">
			<span class="ant-pro-account-avatar">
				<a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" />
				<span>{{ currentUser.name }}</span>
			</span>
			<template #overlay>
				<a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
					<a-menu-item v-for="(item, key) in menuList" :key="key">
						<user-outlined />
						{{ item.title }}
					</a-menu-item>
					<a-menu-divider />
					<a-menu-item key="logout" @click="onLogout">
						<logout-outlined />
						<span>退出登录</span>
					</a-menu-item>
				</a-menu>
			</template>
		</a-dropdown>
		<span v-else>
			<a-spin size="small" style="margin-left: 8px; margin-right: 8px" />
		</span>
	</div>
</template>
<script lang="ts">
export default {
	name: 'XAvatar'
}
</script>
<script setup lang="ts">
type UserInfo = {
	name: string
}

const currentUser: UserInfo = reactive<UserInfo>({
	name: '许磊'
})

type MenuItem = {
	key: string
	title: string
}

const menuList: Array<MenuItem> = [
	{
		key: 'setting',
		title: '设置'
	},
	{
		key: 'help',
		title: '帮助'
	},
	{
		key: 'center',
		title: '个人中心'
	}
]

const onLogout = () => {
	console.log('退出登录')
}
</script>

<style scoped lang="scss">
.x-avatar-wrapper {
	// display: inline-block;
	width: 100px;
}

.ant-pro-drop-down {
	:deep(.action) {
		margin-right: 8px;
	}
	:deep(.ant-dropdown-menu-item) {
		min-width: 160px;
	}
}
</style>
