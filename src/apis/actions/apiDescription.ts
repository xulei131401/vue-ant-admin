import { ApiInfo } from '@/utils/http/typing'
import { aliasToMockUrl } from '@/apis/mocks'

export const ACTION_LOGIN = '/login'
export const API_INFO_LOGIN: ApiInfo = {
	desc: '登录接口',
	url: ACTION_LOGIN,
	method: 'post',
	mockUrl: aliasToMockUrl('@/apis/mocks/login.json')
}

export const ACTION_MY_INFO = '/my/info'
export const API_INFO_MY_INFO: ApiInfo = {
	desc: '登录用户信息',
	url: ACTION_MY_INFO,
	method: 'get',
	mockUrl: aliasToMockUrl('@/apis/mocks/my-info.json')
}

export const ACTION_MY_MENU = '/my/menu'
export const API_INFO_MY_MENU: ApiInfo = {
	desc: '菜单',
	url: ACTION_MY_MENU,
	method: 'get',
	mockUrl: aliasToMockUrl('@/apis/mocks/my-menu.json')
}
