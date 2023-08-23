import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  return {
    mode: 'production',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      target: 'es2015',
      minify: 'terser',
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'MetrixInAppApi',
        formats: ['umd'],
        fileName: _format => `index.js`,
      },
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  };
});
