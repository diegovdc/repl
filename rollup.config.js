// rollup.config.js
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'micorepler.js',
  output: {
    file: 'dist/micorepler.js',
    format: 'umd',
    name: 'mico'
  },
  plugins: [cjs(), resolve()]
};
