import { API_INFO_MY_INFO } from '@/apis/actions/apiDescription'
import axiosInstance from '@/utils/http/axios'
import { RequestOption } from '@/utils/http/typing'
import { UserInfo } from '@/models/user/user'

export const myInfoAction = async (option?: RequestOption): Promise<UserInfo> => {
    const res = await axiosInstance.request(API_INFO_MY_INFO, {}, option)
    return res
}
