import { API_INFO_LOGIN } from '@/apis/actions/apiDescription'
import axiosInstance from '@/utils/http/axios'
import { LoginActionParameter, LoginActionModel, transferResponse } from '@/apis/actions/login/model'
import { getDevRequestOptions } from '@/apis/mocks'

export const loginAction = async (param: LoginActionParameter): Promise<LoginActionModel> => {
	const option = getDevRequestOptions()
	const res = await axiosInstance.request(API_INFO_LOGIN, param, option)
	return transferResponse(res)
}
