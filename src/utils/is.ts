import { isEmpty, isArray, isNumber, isDate, isFunction, isObject, isString, isBoolean, isRegExp } from 'lodash-es'
export const toString = Object.prototype.toString

export function is(val: unknown, type: string) {
	return toString.call(val) === `[object ${type}]`
}

export function isWindow(val: any): boolean {
	return typeof window !== 'undefined' && is(val, 'Window')
}

export { isEmpty, isArray, isNumber, isFunction, isDate, isObject, isString, isBoolean, isRegExp }
