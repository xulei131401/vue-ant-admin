import { defineStore } from 'pinia'
import type { ProjectConfig, MenuConfig } from '@/configs'
import { defaultProjectConfig } from '@/configs'
import { mergeWith } from 'lodash-es'

export const useAppStore = defineStore({
	id: 'app',
	state: () => ({
		projectConfig: defaultProjectConfig as ProjectConfig
	}),
	getters: {
		getProjectConfig(): ProjectConfig {
			return this.projectConfig || ({} as ProjectConfig)
		},
		getMenuConfig(): MenuConfig {
			return this.getProjectConfig.menu
		}
	},
	actions: {
		setProjectConfig(config: DeepPartial<ProjectConfig>): void {
			this.projectConfig = mergeWith(this.projectConfig, config)
		}
	}
})
