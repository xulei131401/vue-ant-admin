import { API_INFO_LOGIN } from '@/apis/api-description'
import axiosInstance from '@/business/request/axios'
import { RequestOption } from '@/business/request/type'
import { LoginActionParameter, LoginActionModel, transferResponse } from '@/apis/controller/login/model'

// 示例传参：login({id:1,name:"张三"}, {isMock:true})
export const loginAction = async (param: LoginActionParameter, option?: RequestOption): Promise<LoginActionModel> => {
	const res = await axiosInstance.request(API_INFO_LOGIN, param, option)
	return transferResponse(res)
}
