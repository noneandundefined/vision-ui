import axios, { AxiosError } from 'axios';
import { MonitoringType } from '../types/monitoring';

class MonitoringSerivce {
	private readonly metaURL: HTMLMetaElement | null = document.querySelector(
		'meta[name="monitoring-url"]'
	);

	private isURL(): string {
		if (this.metaURL) return this.metaURL.content;

		throw new Error("Meta tag 'monitoring-url' not found.");
	}

	public async fetchMonitoringData(): Promise<MonitoringType | null> {
		const url = this.isURL();

		try {
			const response = await axios.get(url);
			return response.data.message;
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.response) {
					throw new Error(error.response.data.message);
				} else if (error.request) {
					throw new Error('Ошибка при отправки запроса.');
				}
			} else {
				throw new Error(
					'Произошла ошибка. Пожалуйста, попробуйте снова.'
				);
			}

			return null;
		}
	}
}

export default new MonitoringSerivce();
