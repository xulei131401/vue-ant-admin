import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { pathResolve } from '../utils/path'

export function createVitePlugins(viteEnv: any) {
	// const { VITE_PORT } = viteEnv

	const vitePlugins: PluginOption[] = [vue(), vueJsx()]

	// 自动导入
	vitePlugins.push(
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'], // 自动导入vue和vue-router相关函数
			dts: 'typing/auto-import.d.ts' // 生成 `auto-import.d.ts` 全局声明
		})
	)

	// 自动导入ant-design-vue组件
	vitePlugins.push(
		Components({
			resolvers: [AntDesignVueResolver()]
		})
	)

	// icons
	vitePlugins.push(
		createSvgIconsPlugin({
			// 指定要缓存的文件夹
			iconDirs: [`${pathResolve('src/assets/icons')}`],
			// 指定symbolId格式
			symbolId: '[name]'
		})
	)

	// vue-i18n
	vitePlugins.push(
		VueI18nPlugin({
			include: `${pathResolve('src/locales/**')}`
		})
	)

	return vitePlugins
}
