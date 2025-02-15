import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				entryFileNames: `[name].bundle.js`,
				chunkFileNames: `[name].chunk.js`,
				assetFileNames: `[name].[ext]`,
			},
		},
	},
});
