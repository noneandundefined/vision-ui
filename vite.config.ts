// *---------------------------------------------------------------------------------------------
// *  Copyright (c). All rights reserved.
// *  Licensed under the LICENSE-APACHE. See License in the project root for license information.
// *--------------------------------------------------------------------------------------------*

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./test/vitest.setup.ts'],
		css: true,
		testTimeout: 10000,
		reporters: ['verbose'],
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: `vision.bundle.js`,
				chunkFileNames: `vision.chunk.js`,
				assetFileNames: `vision.[ext]`,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './apps'),
		},
	},
});
