import dayjs from '@/business/utils/dayjs'
const now = (): string => {
	return dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}

export { now }
