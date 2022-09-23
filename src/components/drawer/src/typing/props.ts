import { type PropType } from 'vue'

// TODO: 参考 https://www.antdv.com/components/drawer-cn
export const drawerProps = () => {
	return {
		visible: { type: Boolean, default: false }, // Drawer 是否可见
		maskClosable: { type: Boolean, default: true }, // 点击蒙层是否允许关闭
		title: { type: String, default: '' }, // 标题
		destroyOnClose: { type: Boolean, default: true }, //关闭时销毁 Drawer 里的子元素
		placement: { type: String }, // 抽屉的方向
		mask: { type: Boolean, default: true }, // 是否展示遮罩
		keyboard: { type: Boolean, default: true }, // 是否支持键盘 esc 关闭
		width: { type: [String, Number] } // 是否支持键盘 esc 关闭
	}
}

export type DrawerProps = VuePropsType<typeof drawerProps>

export const basicDrawerProps = () => {
	return Object.assign({}, drawerProps(), {
		isDetail: { type: Boolean },
		loadingText: { type: String },
		showDetailBack: { type: Boolean, default: true },
		loading: { type: Boolean },
		getContainer: {
			type: [Object, String] as PropType<any>
		},
		closeFunc: {
			type: [Function, Object] as PropType<any>,
			default: null
		}
	})
}

export type BasicDrawerProps = VuePropsType<typeof basicDrawerProps>
