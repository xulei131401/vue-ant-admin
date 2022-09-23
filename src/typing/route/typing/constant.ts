import { type Route } from './route'

export const LOGIN_ROUTE: Route = {
	name: 'login',
	path: '/login'
}

export const ROOT_ROUTE: Route = {
	name: 'Root',
	path: '/'
}

export const HOME_ROUTE: Route = {
	name: 'Home',
	path: '/dashboard'
}

export const PAGE_NOT_FOUND_ROUTE: Route = {
	name: 'PageNotFound',
	childrenName: 'PageNotFoundChildren',
	path: '/:path(.*)*' // '/:catchAll(.*)'
}
