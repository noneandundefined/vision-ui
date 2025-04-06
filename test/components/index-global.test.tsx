// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import App from '../../apps/App';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Index from '../../apps/www/pages/index';

vi.mock('../../src/services/monitoring.service', () => ({
	__esModule: true,
	default: {
		fetchMonitoringData: vi.fn().mockResolvedValue({
			system: { cpu_usage: 50, memory_usage: 70, network_recv: 200 },
			database: {
				database_queries: 100,
				database_error: 5,
				database_avg_latency_ms: 20,
			},
			requests: {
				request_avg_latency_ms: 15,
				request_count: 200,
				request_success_count: 195,
				request_error_count: 5,
			},
			last_errors: [],
		}),
	},
}));

describe('Global <Index /> testing...', () => {
	it('Show render the panel title', async () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);

		expect(await screen.findByText('Server load')).toBeInTheDocument();
		expect(await screen.findByText('Database')).toBeInTheDocument();
		expect(await screen.findByText('Requests')).toBeInTheDocument();
		expect(await screen.findByText('Last errors')).toBeInTheDocument();
	});

	it('Component <ServerLoad /> is active', async () => {
		const { container } = render(
			<MemoryRouter>
				<Index
					data={{
						system: {
							cpu_usage: 50,
							memory_usage: 70,
							network_recv: 200,
						},
						database: {
							database_queries: 100,
							database_error: 5,
							database_avg_latency_ms: 20,
						},
						requests: {
							request_avg_latency_ms: 15,
							request_count: 200,
							request_success_count: 195,
							request_error_count: 5,
						},
						last_errors: [],
					}}
				/>
			</MemoryRouter>
		);

		expect(container.querySelector('.server__load')).toBeTruthy();
	});

	it('Show base monitoring', async () => {
		const { container } = render(
			<MemoryRouter>
				<Index
					data={{
						system: {
							cpu_usage: 50,
							memory_usage: 70,
							network_recv: 200,
						},
						database: {
							database_queries: 100,
							database_error: 5,
							database_avg_latency_ms: 20,
						},
						requests: {
							request_avg_latency_ms: 15,
							request_count: 200,
							request_success_count: 195,
							request_error_count: 5,
						},
						last_errors: [],
					}}
				/>
			</MemoryRouter>
		);

		expect(
			container.querySelector('.server__load__memory')?.textContent
		).toEqual('70%');
		expect(
			container.querySelector('.server__load__cpu')?.textContent
		).toEqual('50.00%');
		expect(
			container.querySelector('.server__load__network')?.textContent
		).toEqual('2.00%');
	});
});
