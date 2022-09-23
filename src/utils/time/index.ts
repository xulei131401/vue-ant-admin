import { dayjs } from '@/utils'
const now = (): string => {
	return dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}

export { now }
