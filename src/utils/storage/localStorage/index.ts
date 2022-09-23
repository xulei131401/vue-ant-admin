type UserInfo = {
	isLogin: boolean
}

function setLoginCache() {
	const info: UserInfo = {
		isLogin: true
	}
	localStorage.setItem('user_info', JSON.stringify(info))
}

function setLogout() {
	localStorage.removeItem('user_info')
}

function isLogin(): boolean {
	const info: string = localStorage.getItem('user_info') ?? ''
	if (!info) {
		return false
	}

	const userInfo: UserInfo = JSON.parse(info) as UserInfo
	return userInfo.isLogin
}

// function set(key, value) {
// 	var curtime = new Date().getTime();//获取当前时间
// 	localStorage.setItem(key, JSON.stringify({ val: value, time: curtime }));//转换成json字符串序列
// }
// function get(key, exp)//exp是设置的过期时间
// {
// 	var val = localStorage.getItem(key);//获取存储的元素
// 	var dataobj = JSON.parse(val);//解析出json对象
// 	if (new Date().getTime() - dataobj.time > exp)//如果当前时间-减去存储的元素在创建时候设置的时间 > 过期时间
// 	{
// 		console.log("expires");//提示过期
// 	}
// 	else {
// 		console.log("val=" + dataobj.val);
// 	}
// }

export { setLoginCache, setLogout, isLogin }
