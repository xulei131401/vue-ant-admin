import dayjs from '@/utils/dayjs'
const now = (): string => {
	return dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}

export { now }
