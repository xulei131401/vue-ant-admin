import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

function pathResolve(dir: string) {
	//console.log(path.resolve(process.cwd(), '.', dir))
	return path.resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// const root = process.cwd()
	// const viteEnv = loadEnv(mode, root)
	// const { VITE_PORT } = viteEnv

	return {
		plugins: [
			vue(),
			vueJsx(),
			AutoImport({
				imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue和vue-router相关函数
				dts: 'types/auto-import.d.ts' // 生成 `auto-import.d.ts` 全局声明
			}),
			Components({
				resolvers: [AntDesignVueResolver()]
			})
		],
		server: {
			open: true,
			port: 9527
			// proxy: {
			//     '/': {
			//      target: "http://localhost/public/index.php/",
			//      changeOrigin: true,
			//      rewrite: (path) => path.replace(/^\/api/, '')
			//     }
			// }
		},
		resolve: {
			// 配置路径别名
			alias: [
				{
					find: '@',
					replacement: `${pathResolve('src')}/`
				},
				// /#/xxxx => types/xxxx
				{
					find: '#',
					replacement: `${pathResolve('types')}/`
				}
			]
		},
		//   optimizeDeps: {
		//     include: ['@surely-vue/table', 'vue'],
		//   },
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true
				},
				scss: {
					additionalData: '@import "@/style/global/index.scss";'
				}
			}
		},
		optimizeDeps: {
			include: ['@surely-vue/table', 'vue']
		}
	}
})
