import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				entryFileNames: `vision.bundle.js`,
				chunkFileNames: `vision.chunk.js`,
				assetFileNames: `vision.[ext]`,
			},
		},
	},
});
