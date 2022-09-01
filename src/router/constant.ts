export const LOGIN_ROUTE = {
	name: 'login',
	path: '/login',
}

export const ROOT_ROUTE = {
	name: 'Root',
	path: '/',
}

export const HOME_ROUTE = {
	name: 'Home',
	path: '/dashboard',
}

export const PAGE_NOT_FOUND_ROUTE = {
	name: 'PageNotFound',
	childrenName: 'PageNotFoundChildren',
	path: '/:path(.*)*', // '/:catchAll(.*)'
}
