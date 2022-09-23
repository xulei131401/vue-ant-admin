// 接口传参
type LoginActionParameter = {
	username: string
	password: string
}

// 接口返回值适配
type LoginActionModel = {
	id: string
	name: string
	age: string
}

function transferResponse(response: any): LoginActionModel {
	return {
		id: response.id ?? '',
		name: response.name ?? '',
		age: '21'
	}
}

export type { LoginActionParameter, LoginActionModel }
export { transferResponse }
