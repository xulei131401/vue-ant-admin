import { API_INFO_MY_MENU } from '@/apis/api-description'
import axiosInstance from '@/business/request/axios'
import { RequestOption } from '@/business/request/type'
import { transferSecondLevelMenu } from '@/business/menu/secondLevelMenu'
import { Menu } from '@/business/menu/menu'

export const myMenuAction = async (option?: RequestOption): Promise<Menu[]> => {
	const res = await axiosInstance.request(API_INFO_MY_MENU, {}, option)
	return transferSecondLevelMenu(res)
}
