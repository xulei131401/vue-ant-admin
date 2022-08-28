import { App } from '@vue/runtime-dom';
import STable from '@surely-vue/table';
import '@surely-vue/table/dist/index.less'
import { setLicenseKey } from '@surely-vue/table';

export default {
	install(app: App) {
		app.use(STable);
		setLicenseKey('fdafefdaffklfjajuiefhrdbfdnsafjkasyegwfpqfldfd45f48ew468fr5ds');
	}
}
