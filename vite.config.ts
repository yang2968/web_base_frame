import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  // cors 관련 설정
  server: {
    port: 9999,
    proxy: {
      '/api/sample': {
        target: 'https://api.sampleapis.com',
        rewrite: (path) => path.replace(/^\/api\/sample/, ''),
        changeOrigin: true,
      },
    },
  },
});
