const docEle = document.documentElement

/**
 * 修改自定义css属性值
 * @param prop
 * @param val
 * @param dom
 */
export function setCssVar(prop: string, val: any, dom = docEle) {
	dom.style.setProperty(prop, val)
}
