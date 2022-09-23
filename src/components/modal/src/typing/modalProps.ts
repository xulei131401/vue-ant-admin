import { type ExtractPropTypes, type PropType, type CSSProperties } from 'vue'
import { ButtonProps } from 'ant-design-vue/es/button/buttonTypes'

// TODO: 参考 https://www.antdv.com/components/modal-cn
export const modalProps = () => ({
	// slot
	cancelText: { type: String, default: '取消' }, // 取消按钮文字
	footer: Object as PropType<VueNode>,
	closeIcon: Object as PropType<VueNode>,
	okText: { type: String, default: '提交' },
	title: { type: String },

	// 一般属性
	visible: { type: Boolean },
	width: [String, Number] as PropType<string | number>,
	centered: { type: Boolean }, // 垂直居中展示 Modal
	closable: { type: Boolean, default: true }, // 是否显示右上角的关闭按钮
	destroyOnClose: { type: Boolean, default: true }, // 关闭Modal默认销毁里边的元素
	okType: { type: String, default: 'primary' },
	confirmLoading: { type: Boolean }, // 确认按钮的loading
	mask: { type: Boolean, default: true }, // 默认展示遮罩层
	maskClosable: { type: Boolean, default: false }, // 默认不允许点击遮罩层关闭，防止误操作
	keyboard: { type: Boolean, default: true }, // 支持键盘 esc关闭
	// 样式
	maskStyle: Object as PropType<CSSProperties>,
	okButtonProps: Object as PropType<ButtonProps>,
	cancelButtonProps: Object as PropType<ButtonProps>,
	bodyStyle: Object as PropType<CSSProperties>,
	wrapClassName: { type: String },
	zIndex: { type: Number },
	// 回调函数
	afterClose: Function as PropType<() => Promise<VueNode>> // Modal 完全关闭后的回调
})

export type ModalProps = Partial<ExtractPropTypes<ReturnType<typeof modalProps>>>
