// 延迟函数
const timeSleep = (time: any) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}

export { timeSleep }
