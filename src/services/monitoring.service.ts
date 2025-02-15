import axios, { AxiosError } from 'axios';
import { MonitoringType } from '../types/monitoring';

class MonitoringSerivce {
	private readonly metaURL: HTMLMetaElement | null = document.querySelector(
		'meta[name="monitoring-url"]'
	);

	private isURL(): string {
		if (this.metaURL) return this.metaURL.content;

		console.error("Meta tag 'monitoring-url' not found.");
		return '';
	}

	public async fetchMonitoringData(): Promise<MonitoringType | string> {
		const url = this.isURL();

		try {
			const response = await axios.get<MonitoringType>(url);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.response) {
					return error.response.data.message;
				} else if (error.request) {
					return 'Ошибка при отправки запроса.';
				}
			} else {
				return 'Произошла ошибка. Пожалуйста, попробуйте снова.';
			}

			return error.message;
		}
	}
}

export default new MonitoringSerivce();
