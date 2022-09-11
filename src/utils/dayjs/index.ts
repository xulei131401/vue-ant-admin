import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/zh-cn' // import locale

dayjs.extend(isLeapYear) // use plugin
dayjs.locale('zh-cn') // use locale

export default dayjs
