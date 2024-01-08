const docEle = document.documentElement

/**
 * 设置自定义css属性值
 * @param prop
 * @param val
 * @param dom
 */
export function setCssVar(prop: string, val: any, dom = docEle) {
	dom.style.setProperty(prop, val)
}

export function setDomAttribute(prop: string, val: any, dom = docEle) {
	dom.setAttribute(prop, val)
}
