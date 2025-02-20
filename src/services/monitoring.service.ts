import axios, { AxiosError } from 'axios';
import { MonitoringType } from '../types/monitoring';

class MonitoringSerivce {
	private readonly metaFILE: HTMLMetaElement | null = document.querySelector(
		'meta[name="monitoring-file"]'
	);
	private readonly metaURL: HTMLMetaElement | null = document.querySelector(
		'meta[name="monitoring-url"]'
	);

	private isFILE(): string {
		if (this.metaFILE) return this.metaFILE.content;

		console.warn("Meta tag 'monitoring-file' not found.");
		return '';
	}

	private isURL(): string {
		if (this.metaURL) return this.metaURL.content;

		console.warn("Meta tag 'monitoring-url' not found.");
		return '';
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

	public async fetchMonitoringDataFile(): Promise<MonitoringType | null> {
		const file = this.isFILE();

		try {
			const data = await fetch(file).then((response) => response.json());
			return data.message;
		} catch (error) {
			return null;
		}
	}
}

export default new MonitoringSerivce();
