import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ["vue", "vue-router", "pinia"], // 自动导入vue和vue-router相关函数
			dts: "src/@declare/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
		}),
		Components({
			resolvers: [
				AntDesignVueResolver(),
			],
		})
	],
	server: {
		open: true,
		port: 9527,
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
