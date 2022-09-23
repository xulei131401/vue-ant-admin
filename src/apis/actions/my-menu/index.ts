import { API_INFO_MY_MENU } from '@/apis/actions/apiDescription'
import axiosInstance from '@/utils/http/axios'
import { RouteStatic, MenuStatic, type Menu } from '@/typing'
import { getDevRequestOptions } from '@/apis/mocks'

export const myMenuAction = async (): Promise<Menu[]> => {
	const option = getDevRequestOptions()
	const res = await axiosInstance.request(API_INFO_MY_MENU, {}, option)
	MenuStatic.initMenu(res)
	RouteStatic.initRoute(res)
	return MenuStatic.menuList
}
