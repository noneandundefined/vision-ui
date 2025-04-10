// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

export type MonitoringType = {
	system?: {
		cpu_usage?: number;
		memory_usage?: number;
		network_recv?: number;
	};

	requests?: {
		request_avg_latency_ms?: number;
		request_count?: number;
		request_success_count?: number;
		request_error_count?: number;
	};

	database?: {
		database_queries?: number;
		database_error?: number;
		database_avg_latency_ms?: number;
	};

	last_errors?: ErrorLog[];

	logs?: Logs[];
};

export interface ErrorLog {
	timestamp: Date;
	method: string;
	path: string;
	error: string;
}

export interface Logs {
	timestamp: Date;
	info: string;
}
