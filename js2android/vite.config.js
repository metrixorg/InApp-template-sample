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
                entry: path.resolve(__dirname, 'src/js2android.ts'),
                name: 'Metrix',
                formats: ['umd'],
                fileName: format => `js2android.js`,
            },

        },
        resolve: {
            extensions: ['.ts', '.js'],
        },

    };
});
