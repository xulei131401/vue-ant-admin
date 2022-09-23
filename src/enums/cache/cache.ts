export enum Cache {
	APP_THEME_KEY = '__APP__THEME__' // 主题
}

export type CacheKey = keyof typeof Cache
export type CacheValue = `${Cache}`
