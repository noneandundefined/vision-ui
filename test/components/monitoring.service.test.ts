import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { config } from '../../config/config';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import monitoringService from '../../src/services/monitoring.service';

const mock = new MockAdapter(axios);

describe('Monitoring Service', () => {
	beforeAll(() => {
		const metaUrl = document.createElement('meta');
		metaUrl.name = 'monitoring-url';
		metaUrl.content = config.monitoring_url_base;
		document.head.appendChild(metaUrl);
	});

	afterEach(() => {
		mock.reset();
	});

	it('Handles errors when receiving monitoring data', async () => {
		mock.onGet(config.monitoring_url_base).reply(404, {
			message: 'An error has occurred. Please try again.',
		});

		await expect(monitoringService.fetchMonitoringData()).rejects.toThrow(
			'An error has occurred. Please try again.'
		);
	});
});
