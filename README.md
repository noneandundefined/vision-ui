<p align="center">
  <a href="" target="_blank" rel="noopener noreferrer">
    <img width="150" src="https://github.com/noneandundefined/vision-ui/blob/main/public/logo-vision-none.png" alt="Vision logo">
  </a>
</p>
</br>
<p align="center">
  <a href="https://github.com/noneandundefined/vision-ui/actions/workflows/compiler-client.yml"><img src="https://github.com/noneandundefined/vision-ui/actions/workflows/compiler-client.yml/badge.svg" alt="Compiler and Build"></a>
  <a href="https://github.com/noneandundefined/vision-ui/actions/workflows/global-index.yml"><img src="https://github.com/noneandundefined/vision-ui/actions/workflows/global-index.yml/badge.svg" alt="Build and Test"></a>
  <a href="https://github.com/noneandundefined/vision-ui/actions/workflows/pages/pages-build-deployment"><img src="https://github.com/noneandundefined/vision-ui/actions/workflows/pages/pages-build-deployment/badge.svg" alt="pages-build-deployment"></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@artemiik/vision-ui"><img src="https://img.shields.io/npm/v/%40artemiik%2Fvision-ui" alt="Compiler and Build"></a>
  <a href="https://www.npmjs.com/package/@artemiik/vision-ui"><img src="https://img.shields.io/npm/dm/%40artemiik%2Fvision-ui" alt="Compiler and Build"></a>
</p>

## ✨ Introduction

Vision allows any user, whether it's your development team, to visually look at the server in operational mode. Be aware of all errors, server response time, CPU usage, and RAM. Use ready-made functions thanks to libraries for different programming languages, see below. Look at the Vision!

✅ Server errors & logs
✅ Response time monitoring
✅ CPU & RAM usage
✅ Load testing

```html
<!-- HTML for dev server -->
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link
			rel="icon"
			type="image/svg+xml"
			href="https://raw.githubusercontent.com/noneandundefined/vision-ui/refs/heads/main/public/logo-vision-none.png"
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

		<!-- Meta tag for using authentication on Vision UI -->
		<!-- Thanks to this meta tag, Vision will block access to your Vision UI monitoring until the correct password is entered -->
		<!-- You can remove it or leave it  -->
		<meta name="authenticate" content="password_hash" />
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

## Versions

The current and current versions of Vision UI are listed in the table, choose the one that suits you and start watching the server.

| Vision Version | Release Date | Notes                                                                   |
| -------------- | ------------ | ----------------------------------------------------------------------- |
| 1.0.0          | 2025-02-16   | [tag v1.0.0](https://github.com/noneandundefined/vision-ui/tree/v1.0.0) |

## Basic meta functionality

| Meta Tag | Description |
|monitoring-url|An tag containing a link to the json monitoring data of your server|
|authenticate|The tag that determines whether your server needs authentication before using the Vision UI|
|monitoring-file|An tag containing a link to the json monitoring file of your server|

## Documentation

#### Usage

- [Configuration](https://github.com/noneandundefined/vision-ui/tree/main/docs)

#### Packages

- [Go](https://github.com/noneandundefined/vision-go)
- [JavaScript](https://github.com/noneandundefined/vision-npm)
- [TypeScript](https://github.com/noneandundefined/vision-npm)

## Contributing

Refer to our [contribution guidelines](https://github.com/noneandundefined/vision-ui/blob/main/CONTRIBUTING.md) and [Code of Conduct for contributors](https://github.com/noneandundefined/vision-ui/blob/main/CODE_OF_CONDUCT.md).

## Security contact

Please disclose any security-related issues or vulnerabilities by emailing [@gmail.com](mailto:@gmail.com), instead of using the public issue tracker.
