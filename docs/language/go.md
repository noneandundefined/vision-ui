# Go

Configuring GO for server monitoring

## Setup

> Below are the basic functions to get the basic monitoring components for your server, select the necessary ones and use them

### Models

1. A model for monitoring the application:

```go
type MonitoringStats struct {
	sync.Mutex
	RequestCount   int64
	ErrorCount     int64
	TotalLatency   time.Duration
	DBQueryCount   int64
	DBErrorCount   int64
	DBTotalLatency time.Duration
	LastErrors     []ErrorLog
}
```

2. The Server error model

```go
type ErrorLog struct {
	Timestamp time.Time `json:"timestamp"`
	Method    string    `json:"method"`
	Path      string    `json:"path"`
	Error     string    `json:"error"`
}
```

3. A model for the vision monitoring response

```go
type MonitoringResponse struct {
	Requests struct {
		Total        int64   `json:"request_count"`
		Errors       int64   `json:"request_error_count"`
		SuccessRate  float64 `json:"request_success_count"`
		AvgLatencyMs float64 `json:"request_avg_latency_ms"`
	} `json:"requests"`
	Database struct {
		TotalQueries int64   `json:"database_queries"`
		Errors       int64   `json:"database_error"`
		AvgLatencyMs float64 `json:"database_avg_latency_ms"`
	} `json:"database"`
	System struct {
		CPUUsage    float64 `json:"cpu_usage"`
		MemoryUsage float64 `json:"memory_usage"`
		NetworkRecv float64 `json:"network_recv"`
	} `json:"system"`
	LastErrors []ErrorLog `json:"last_errors,omitempty"`
}
```

### Methods of obtaining monitoring

1. The VisionRequest function takes the duration of the request
   and updates the statistics of requests to the server.
   It increases the counter of the total number
   of requests (RequestCount) and adds the transmitted
   duration to the total delay time of all requests (TotalLatency),
   ensuring that these values are securely updated using a
   mutex lock (Lock/Unlock) to avoid conflicts
   when accessing statistics from different execution threads.

```go
func (v *Vision) VisionRequest(duration time.Duration) {
	v.stats.Lock()
	defer v.stats.Unlock()

	v.stats.RequestCount++
	v.stats.TotalLatency += duration
}

```
