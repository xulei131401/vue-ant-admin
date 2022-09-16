import { defineConfig, UserConfig, ConfigEnv } from 'vite'
import { viteLoadEnv, createVitePlugins, pathResolve } from './build/vite'

// TODO: 参考 https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv): UserConfig => {
	// 加载环境变量
	const { mode } = configEnv
	const viteEnv = viteLoadEnv(mode, process.cwd())
	const { VITE_PORT } = viteEnv

	return {
		plugins: createVitePlugins(viteEnv),
		server: {
			open: true,
			port: VITE_PORT
			// proxy: {
			//     '/': {
			//      target: "http://localhost/public/index.php/",
			//      changeOrigin: true,
			//      rewrite: (path) => path.replace(/^\/api/, '')
			//     }
			// }
		},
		build: {
			target: 'es2020',
			cssTarget: 'chrome80',
			outDir: 'dist',
			chunkSizeWarningLimit: 2000
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
			include: ['@surely-vue/table', 'vue', 'ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US']
		}
	}
})
