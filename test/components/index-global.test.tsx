import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import Index from '../../src/pages/Index';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

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
				<Index />
			</MemoryRouter>
		);

		expect(await screen.findByText('Server load')).toBeInTheDocument();
		expect(await screen.findByText('Database')).toBeInTheDocument();
		expect(await screen.findByText('Requests')).toBeInTheDocument();
		expect(await screen.findByText('Last errors')).toBeInTheDocument();
	});
});
