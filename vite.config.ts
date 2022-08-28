import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ["vue", "vue-router", "pinia"], // 自动导入vue和vue-router相关函数
			dts: "src/@types/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
		}),
		createStyleImportPlugin({
			resolves: [
				AndDesignVueResolve(),
			],
			libs: [
				{
					libraryName: 'ant-design-vue',
					esModule: true,
					resolveStyle: (name) => {
						return `ant-design-vue/es/${name}/style/index`
					},
				}
			],
		}),
	],
	server: {
		open: true,
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
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	//   optimizeDeps: {
	//     include: ['@surely-vue/table', 'vue'],
	//   },
	css: {
		preprocessorOptions: {
			less: {
				// modifyVars: { // 更改主题在这里
				// 	'primary-color': '#52c41a',
				// 	'link-color': '#1DA57A',
				// 	'border-radius-base': '2px'
				// },
				javascriptEnabled: true,
			},
			scss: {
				additionalData: "",
			}
		},
	},
	optimizeDeps: {
		include: ['@surely-vue/table', 'vue'],
	},
})
