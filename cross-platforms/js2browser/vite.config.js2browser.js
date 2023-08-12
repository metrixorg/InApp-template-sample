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
                entry: path.resolve(__dirname, 'src/js2browser.ts'),
                name: 'Metrix',
                formats: ['umd'],
                fileName: format => `js2browser.js`,
            },

        },
        resolve: {
            extensions: ['.ts', '.js'],
        },

    };
});
