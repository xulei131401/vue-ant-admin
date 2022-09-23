import { API_INFO_MY_INFO } from '@/apis/actions/apiDescription'
import axiosInstance from '@/utils/http/axios'
import { getDevRequestOptions } from '@/apis/mocks'
import { UserInfo } from '@/typing/user'

export const myInfoAction = async (): Promise<UserInfo> => {
	const option = getDevRequestOptions()
	const res = await axiosInstance.request(API_INFO_MY_INFO, {}, option)
	return res
}
