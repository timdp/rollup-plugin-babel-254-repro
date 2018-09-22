import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const { TARGET } = process.env

const babelOptions = {
  working: {},
  failing: Object.assign({ babelrc: false }, pkg.babel)
}[TARGET]

export default {
  input: 'src/index.js',
  output: {
    file: `dist/index.${TARGET}.js`,
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel(babelOptions)
  ]
}
