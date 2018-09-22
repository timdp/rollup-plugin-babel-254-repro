import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelrc: false,
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: 'usage'
        }]
      ]
    })
  ]
}
