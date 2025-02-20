<p align="center">
  <a href="" target="_blank" rel="noopener noreferrer">
    <img width="150" src="https://github.com/noneandundefined/vision-ui/blob/main/public/logo-vision-none.png" alt="Vision logo">
  </a>
</p>
</br>
<p align="center">
  <a href="https://github.com/Artymiik/vision/actions/workflows/compiler-client.yml"><img src="https://github.com/Artymiik/vision/actions/workflows/compiler-client.yml/badge.svg" alt="Compiler and Build"></a>
  <a href="https://github.com/noneandundefined/vision-ui/actions/workflows/pages/pages-build-deployment"><img src="https://github.com/noneandundefined/vision-ui/actions/workflows/pages/pages-build-deployment/badge.svg" alt="pages-build-deployment"></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@artemiik/vision-ui"><img src="https://img.shields.io/npm/v/%40artemiik%2Fvision-ui" alt="Compiler and Build"></a>
  <a href="https://www.npmjs.com/package/@artemiik/vision-ui"><img src="https://img.shields.io/npm/dm/%40artemiik%2Fvision-ui" alt="Compiler and Build"></a>
</p>

## Introduction

Vision allows any user, whether it's your development team, to visually look at the server in operational mode. Be aware of all errors, server response time, CPU usage, and RAM. Use ready-made functions thanks to libraries for different programming languages, see below. Look at the Vision!

## Versions

The current and current versions of Vision UI are listed in the table, choose the one that suits you and start watching the server.

| Vision Version | Release Date | Notes                                                           |
| -------------- | ------------ | --------------------------------------------------------------- |
| 1.0.0          | 2025-02-16   | [tag v1.0.0](https://github.com/Artymiik/vision-ui/tree/v1.0.0) |

## Basic functionality

| Function Name   | Access  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| VisionRequest   | Public  | The VisionRequest function takes the duration of the request and updates the statistics of requests to the server. It increases the counter of the total number of requests (RequestCount) and adds the transmitted duration to the total delay time of all requests (TotalLatency), ensuring that these values are securely updated using a mutex lock (Lock/Unlock) to avoid conflicts when accessing statistics from different execution threads.                        |
| VisionError     | Public  | The VisionError function accepts an err error object and performs the following actions: locks the mutex for secure access to the fields of the stats structure, increments the error count counter, creates an error log containing the current time (Timestamp) and error message (Error), checks the length of the array of recent errors (LastErrors) and, if it contains more than 10 elements, it deletes the oldest element, and then adds a new error to the array. |
| VisionDBQuery   | Public  | The VisionDBQuery function takes the duration of a database query and updates the corresponding statistics by incrementing the database query counter (DBQueryCount) and adding the transmitted duration to the total amount of database query delays (DBTotalLatency)                                                                                                                                                                                                      |     |
| VisionDBError   | Public  | The VisionDBError function increments the database error counter (DBErrorCount) when an error occurs.                                                                                                                                                                                                                                                                                                                                                                       |
| getCPUUsage     | Private | The getCPUUsage function tries to get the percentage of CPU usage for the last second.                                                                                                                                                                                                                                                                                                                                                                                      |
| getMemoryUsage  | Private | The getMemoryUsage function gets information about virtual memory usage.                                                                                                                                                                                                                                                                                                                                                                                                    |
| getNetworkStats | Private | The getNetworkStats function collects network interface statistics. If the network data cannot be retrieved, an error is returned. If the interface is found, the amount of data received in megabytes is calculated and the result is returned.                                                                                                                                                                                                                            |
| GetVisionStats  | Public  | The GetVisionStats function collects all the data into one structure and outputs it as a JSON structure.                                                                                                                                                                                                                                                                                                                                                                    |

## Documentation

#### Usage

- [Configuration](https://github.com/noneandundefined/vision-ui/tree/main/docs)

#### Packages

- [Go](https://github.com/noneandundefined/vision-go)
- [JavaScript](https://github.com/noneandundefined/vision-npm)
- [TypeScript](https://github.com/noneandundefined/vision-npm)

## Security contact

Please disclose any security-related issues or vulnerabilities by emailing [vision@gmail.com](mailto:vision@gmail.com), instead of using the public issue tracker.
