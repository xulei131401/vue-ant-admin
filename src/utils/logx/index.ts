import { now } from '@/utils'

type TLog = (msg?: any, msg2?: any, msg3?: any) => void

const log: TLog = (msg: any, msg2: any, msg3: any): void => {
	if (true) {
		if (msg3) {
			console.log('%c' + now() + ' ' + msg, 'color:green;font-weight:600', msg2, msg3)
		} else if (msg2) {
			console.log('%c' + now() + ' ' + msg, 'color:green;font-weight:600', msg2)
		} else {
			console.log('%c' + now(), 'color:green;font-weight:600', msg)
		}
	}
}

export type { TLog }
export { log }
