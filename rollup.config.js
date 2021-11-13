import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

const plugins = [commonjs(), resolve(), terser()];

export default [
	{
		input: 'index.js',
		external: ['chalk', 'figures'],
		output: {
			file: `dist/more-log.js`,
			format: 'esm',
		},
		plugins,
	},
	// `chalk` and `figures` doesn't provide CommonJS variants, that's why
	// there is no externals
	{
		input: 'index.js',
		output: {
			file: `dist/more-log.cjs`,
			format: 'cjs',
			exports: 'default',
		},
		plugins,
	},
]
