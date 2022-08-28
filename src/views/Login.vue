<template>
	<div>
		<h1 style="text-align: center">登录页面</h1>
		<a-form @submit.prevent name="loginForm" ref="formRef" :model="formState" :rules="rules" :label-col="layout.labelCol" :wrapper-col="layout.wrapperCol">
			<a-form-item label="账号" name="username">
				<a-input v-model:value="formState.username" autocomplete="off" />
			</a-form-item>

			<a-form-item label="密码" name="password">
				<a-input-password v-model:value="formState.password" autocomplete="off" />
			</a-form-item>

			<a-form-item :wrapper-col="{span: 4, offset: 10}">
				<a-button type="primary" @click="onLogin">登录</a-button>
				<a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script setup lang="ts">
	import type {FormInstance} from 'ant-design-vue'
	import {message} from 'ant-design-vue'
	import type {Rule} from 'ant-design-vue/es/form'
	import {loginAction} from '@/apis'
	import {login as loginRequest} from '@/business/utils/localStorage'

	const router = useRouter()

	const layout = {
		labelCol: {span: 10},
		wrapperCol: {span: 4}
	}

	type FormState = {
		username: string
		password: string
		remember: boolean
	}

	const formState = reactive<FormState>({
		username: '',
		password: '',
		remember: true
	})

	const formRef = ref<FormInstance>()

	let checkUserName = async (_rule: Rule, value: string) => {
		if (value === '') {
			return Promise.reject('账号必填')
		}

		return Promise.resolve()
	}

	let checkPassword = async (_rule: Rule, value: string) => {
		if (value === '') {
			return Promise.reject('密码必填')
		}

		return Promise.resolve()
	}

	const rules: Record<string, Rule[]> = {
		username: [{required: true, validator: checkUserName, trigger: 'change'}],
		password: [{required: true, validator: checkPassword, trigger: 'change'}]
	}

	const resetForm = () => {
		formRef.value?.resetFields()
	}

	const onLogin = async () => {
		await onCheck()
		await login()
	}

	// 表单验证
	const onCheck = async () => {
		const values = await formRef.value?.validateFields().catch((e) => {
			message.error('表单校验失败，请检查参数')
		})
	}

	const login = async () => {
		const res = await loginAction({username: 'xxxx', password: '121212'}, {isMock: true})
		message.success('登录成功')
		loginRequest()
		router.replace({name: 'index'})
	}
</script>
<style scoped></style>
