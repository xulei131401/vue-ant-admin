import UserController from '../controller/UserController';

export default [
	// user
	{
		path: '/login',
		method: 'post',
		action: UserController.login,
	},
	{
		path: '/getUserInfoById',
		method: 'get',
		action: UserController.getUserInfoById,
	},
];
