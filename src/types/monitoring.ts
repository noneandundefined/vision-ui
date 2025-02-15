export type MonitoringType = {
	cpu_usage?: number;
	memory_usage?: number;
	network_recv?: number;

	request_avg_latency_ms?: number;
	request_count?: number;
	request_success_count?: number;
	request_error_count?: number;

	database_queries?: number;
	database_error?: number;
	database_avg_latency_ms?: number;

	last_errors?: string[];
};
