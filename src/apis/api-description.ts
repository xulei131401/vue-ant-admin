import { ApiInfo } from "@/business/request/type"
import { aliasToMockUrl } from '@/business/utils/mix'

export const ACTION_LOGIN: string = '/login'
export const API_INFO_LOGIN: ApiInfo = {
	desc: '登录接口',
	url: ACTION_LOGIN,
	method: 'post',
	mockUrl: aliasToMockUrl('@/mock/login.json')
}

export const ACTION_MY_INFO: string = '/my/info'
export const API_INFO_MY_INFO: ApiInfo = {
	desc: '登录用户信息',
	url: ACTION_MY_INFO,
	method: 'get',
	mockUrl: aliasToMockUrl('@/mock/my-info.json')
}

export const ACTION_MY_MENU: string = '/my/menu'
export const API_INFO_MY_MENU: ApiInfo = {
	desc: '菜单',
	url: ACTION_MY_MENU,
	method: 'get',
	mockUrl: aliasToMockUrl('@/mock/my-menu.json')
}
