# Go

Configuring GO for server monitoring

### Content

- Initial configuration
- Models
- Methods of obtaining monitoring
- Statistics
- Linking monitoring to an endpoint

## Setup

> Below are the basic functions to get the basic monitoring components for your server, select the necessary ones and use them

### Initial configuration

```sh
go get github.com/noneandundefined/vision-go
```

```go
package main

import "github.com/noneandundefined/vision-go"

type Handler struct {
	monitor *vision.Vision
}

// The NewHandler function is a constructor for creating
// a new instance of the Vision structure.
// It initializes the stats field with default values,
// including creating an empty LastErrors
// slice to store the latest errors.
func NewHandler(monitor *vision.Vision) *Handler {
	return &Handler{
		monitor: monitor,
	}
}
```

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

```go
// Example: Getting a user
queryStart := time.Now()
isUsername, err := actions.GetUserByUsername(payload.Username)
if err != nil {
	h.monitor.VisionError(err)
	h.monitor.VisionDBError()
	h.logger.Error("[DB ERROR]", zap.Error(err))
	utils.WriteError(w, http.StatusInternalServerError, err)
	return
}
h.monitor.VisionDBQuery(time.Since(queryStart))
```

```go
package api

import "github.com/noneandundefined/vision-go"

func (s *APIServer) Run() error {
	router := mux.NewRouter()

	router.PathPrefix("/docs/").Handler(http.StripPrefix("/docs/", http.FileServer(http.Dir("./docs/"))))

	// Vision monitoring
	monitoring := vision.NewVision()
	router.HandleFunc("/admin/vision", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./docs/vision/index.html")
	}).Methods("GET")
}
```

This one index.html it may be an outdated version, see the current version [index.html -> dev-helpers](https://github.com/noneandundefined/vision-ui/blob/main/dev-helpers/index.html)

```html
<!-- HTML for dev server -->
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link
			rel="icon"
			type="image/svg+xml"
			href="https://github.com/noneandundefined/vision/blob/main/public/logo-vision-none.png?raw=true"
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta
			name="description"
			content="Keep up to date with what is happening on your server using - Vision"
		/>

		<!-- Stylization and actions -->
		<script
			type="module"
			src="https://unpkg.com/@artemiik/vision-ui@1.0.2/dist/vision.bundle.js"
			defer
		></script>
		<link
			rel="stylesheet"
			href="https://unpkg.com/@artemiik/vision-ui@1.0.2/dist/vision.css"
		/>

		<title>Look at the Vision!</title>

		<!-- Defining a meta tag for the monitoring URL -->
		<!-- Thanks to this meta tag, Vision will take server monitoring -->
		<meta
			name="monitoring-url"
			content="http://localhost:8001/micro/user/admin/vision/stats"
		/>
	</head>
	<body>
		<!--
			This HTML file is a template.

			Vision allows any user, whether it's your development team,
			to visually look at the server in production mode.

			Be aware of all errors, server response time, CPU and RAM load.
			Look at the Vision!
		-->
		<div id="vision"></div>
	</body>
</html>
```

### Linking monitoring to an endpoint

Create a new handler to handle admin requests and output the GetVisionStats() function.
