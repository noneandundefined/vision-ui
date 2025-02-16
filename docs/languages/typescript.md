# TypeScript

Configuring TS for server monitoring

### Content

- Models
- Methods of obtaining monitoring
- Statistics
- Linking monitoring to an endpoint

## Setup

> Below are the basic functions to get the basic monitoring components for your server, select the necessary ones and use them

### Models

1. A model for monitoring the application:

```ts
interface MonitoringStats {
	RequestCount: number;
	ErrorCount: number;
	TotalLatency: number;
	DBQueryCount: number;
	DBErrorCount: number;
	DBTotalLatency: number;
	LastErrors: ErrorLog[];
}
```

2. The Server error model

```ts
interface ErrorLog {
	Timestamp: Date;
	Method?: string;
	Path?: string;
	Error: string;
}
```

3. A model for the vision monitoring response

```ts
interface MonitoringResponse {
	Requests: {
		Total: number;
		Errors: number;
		SuccessRate: number;
		AvgLatencyMs: number;
	};
	Database: {
		TotalQueries: number;
		Errors: number;
		AvgLatencyMs: number;
	};
	System: {
		CPUUsage: number;
		MemoryUsage: number;
		NetworkRecv: number;
	};
	LastErrors: ErrorLog[];
}
```

### Methods of obtaining monitoring

The VisionRequest function takes the duration of the request and updates the statistics of requests to the server. It increases the counter of the total number of requests (RequestCount) and adds the transmitted duration to the total delay time of all requests (TotalLatency), ensuring that these values are securely updated using a mutex lock (Lock/Unlock) to avoid conflicts when accessing statistics from different execution threads.

```ts
function VisionRequest(duration: number): void {
	stats.RequestCount++;
	stats.TotalLatency += duration;
}
```

The VisionError function accepts an err error object and performs the following actions: locks the mutex for secure access to the fields of the stats structure, increments the error count counter, creates an error log containing the current time (Timestamp) and error message (Error), checks the length of the array of recent errors (LastErrors) and, if it contains more than 10 elements, it deletes the oldest element, and then adds a new error to the array.

```ts
function VisionError(error: any): void {
	stats.ErrorCount++;

	const errLog: ErrorLog = {
		Timestamp: new Date(),
		Error: error.message || 'Unknown error',
	};

	if (stats.LastErrors.length >= 10) {
		stats.LastErrors.shift();
	}

	stats.LastErrors.push(errLog);
}
```

The VisionDBQuery function takes the duration of a database query and updates the corresponding statistics by incrementing the database query counter (DBQueryCount) and adding the transmitted duration to the total amount of database query delays (DBTotalLatency)

```ts
function VisionDBQuery(duration: number): void {
	stats.DBQueryCount++;
	stats.DBTotalLatency += duration;
}
```

The VisionDBError function increments the database error counter (DBErrorCount) when an error occurs.

```ts
function VisionDBError(): void {
	stats.DBErrorCount++;
}
```

The getCPUUsage function tries to get the percentage of CPU usage for the last second.

```ts
async function getCPUUsage(): Promise<number> {
	try {
		// Here you can use the library to get data about CPU usage.
		return await getCpuUsage();
	} catch (err) {
		console.error('Failed to get CPU usage:', err);
		return 0;
	}
}
```

The getMemoryUsage function gets information about virtual memory usage.

```ts
async function getMemoryUsage(): Promise<number> {
	try {
		// We use the library to get information about memory usage.
		return await getMemoryUsage();
	} catch (err) {
		console.error('Failed to get memory usage:', err);
		return 0;
	}
}
```

The getNetworkStats function collects network interface statistics. If the network data cannot be retrieved, an error is returned. If the interface is found, the amount of data received in megabytes is calculated and the result is returned.

```ts
async function getNetworkStats(): Promise<number> {
	try {
		// We receive network data through the appropriate library
		return await getNetworkStats();
	} catch (err) {
		console.error('Failed to get network stats:', err);
		return 0;
	}
}
```

### Statistics

The GetVisionStats function collects all the data into one structure and outputs it as a JSON structure.

```ts
function GetVisionStats(): MonitoringResponse {
	const cpuUsage = getCPUUsage().then((value) => value);
	const memoryUsage = getMemoryUsage().then((value) => value);
	const networkRecv = getNetworkStats().then((value) => value);

	return {
		Requests: {
			Total: stats.RequestCount,
			Errors: stats.ErrorCount,
			SuccessRate: calculateSuccessRate(),
			AvgLatencyMs: calculateAverageLatency(),
		},
		Database: {
			TotalQueries: stats.DBQueryCount,
			Errors: stats.DBErrorCount,
			AvgLatencyMs: calculateDatabaseAverageLatency(),
		},
		System: {
			CPUUsage: cpuUsage,
			MemoryUsage: memoryUsage,
			NetworkRecv: networkRecv,
		},
		LastErrors: stats.LastErrors,
	};
}

function calculateSuccessRate(): number {
	if (stats.RequestCount === 0) {
		return 0;
	}
	const successCount = stats.RequestCount - stats.ErrorCount;
	const successRate = (successCount / stats.RequestCount) * 100;
	return Math.round(successRate * 100) / 100;
}

function calculateAverageLatency(): number {
	if (stats.RequestCount === 0) {
		return 0;
	}
	const avgLatency = stats.TotalLatency / stats.RequestCount;
	return Math.round(avgLatency * 100) / 100;
}

function calculateDatabaseAverageLatency(): number {
	if (stats.DBQueryCount === 0) {
		return 0;
	}
	const dbAvgLatency = stats.DBTotalLatency / stats.DBQueryCount;
	return Math.round(dbAvgLatency * 100) / 100;
}
```

### Linking monitoring to an endpoint

Create a new handler to handle admin requests and output the GetVisionStats() function.

### Example

Before starting the database query, create a variable for the initial time and calculate the difference at the end.

If there is an error, call the VisionDBError() method to increase the DB error counter.

```ts
const queryStart = Date.now();
try {
	const user = await getUserByUsername(username);
	monitor.VisionDBQuery(Date.now() - queryStart);
} catch (err) {
	monitor.VisionDBError();
	console.error('[DB ERROR]', err);
	throw new Error('Internal Server Error');
}
```
