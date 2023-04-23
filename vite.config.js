import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  publicDir: 'public',
  base: '/Reservo-frontend/',
  plugins: [
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        customerPanel: 'customer-panel.html',
        companyPanel: 'company-panel.html' 
      },
      output: {
        manualChunks(id) {
          if (id.endsWith('.html')) {
            return id.split('/').slice(-1)[0].split('.')[0];
          }
        },
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
        dir: 'dist',
      },
    },
  },
});
