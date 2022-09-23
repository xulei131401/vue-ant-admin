import { type RouteRecordRaw } from 'vue-router'

export type Route = {
	name: string
	path: string
	childrenName?: string
}

export type AppRouteRecordRaw = RouteRecordRaw
