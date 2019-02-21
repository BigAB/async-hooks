import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    external: ['react'],
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' },
    ],
  },
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'AsyncHooks',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    plugins: [resolve(), commonjs()],
    external: ['react'],
  },
];
