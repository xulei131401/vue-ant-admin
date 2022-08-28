import { App } from '@vue/runtime-dom';
export default {
	install(app: App) {
		// 全局异常处理
		app.config.errorHandler = (err, vm, info) => {
			// 处理错误
			// `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子

			console.log('====== 有报错了兄弟!!! ======', err);
			if (err instanceof Error) {
				console.log('❌ 提示:', err.message);
			}

		}
	}
}
