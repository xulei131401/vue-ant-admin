/**
 * 移除Surely Vue水印
 */
export function removeWatermark() {
	const domArr = document.getElementsByTagName('div')
	for (let i = 0; i < domArr.length; i++) {
		if (['Unlicensed Product', 'Invalid License'].includes(domArr[i].innerText)) {
			domArr[i].remove()
		}

		if (['Powered by Surely Vue'].includes(domArr[i].innerText)) {
			// 要不修改透明度，要不把内容去掉
			// domArr[i].style.opacity = '0 !important'
			domArr[i].innerText = ''
		}
	}
}
