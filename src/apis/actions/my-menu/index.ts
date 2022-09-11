import { API_INFO_MY_MENU } from '@/apis/actions/apiDescription'
import axiosInstance from '@/utils/http/axios'
import { RequestOption } from '@/utils/http/typing'
import { Menu, type MenuType } from '@/models/menu/menu'

export const myMenuAction = async (option?: RequestOption): Promise<MenuType[]> => {
    const res = await axiosInstance.request(API_INFO_MY_MENU, {}, option)
    Menu.initMenu(res)
    return Menu.menuList
}
