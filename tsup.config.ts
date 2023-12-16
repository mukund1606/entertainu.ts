import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  splitting: true,
  minify: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  dts: true,
  sourcemap: true,
  clean: true,
});
