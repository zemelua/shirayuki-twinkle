import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	root: __dirname, // example/ をルートに
	plugins: [react(), tsconfigPaths()],
});
