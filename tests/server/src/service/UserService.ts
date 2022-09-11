import { Result } from '../utils'
import { userInfo } from '../mock/login'

export default class UserService {
	async login() {
		return Result.Success(userInfo)
	}

	async getUserInfoById() {
		return Result.Success(userInfo)
	}
}
