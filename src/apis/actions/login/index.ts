import { API_INFO_LOGIN } from '@/apis/actions/apiDescription'
import axiosInstance from '@/utils/http/axios'
import { RequestOption } from '@/utils/http/typing'
import { LoginActionParameter, LoginActionModel, transferResponse } from '@/apis/actions/login/model'

// 示例传参：login({id:1,name:"张三"}, {isMock:true})
export const loginAction = async (param: LoginActionParameter, option?: RequestOption): Promise<LoginActionModel> => {
    const res = await axiosInstance.request(API_INFO_LOGIN, param, option)
    return transferResponse(res)
}
