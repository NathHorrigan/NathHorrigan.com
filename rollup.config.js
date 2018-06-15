import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue2'
import standard from 'rollup-plugin-standard'
import scss from 'rollup-plugin-collect-sass'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'NathHorrigan/assets/js/main.js',
  output: {
    file: 'NathHorrigan/static/js/bundle.js',
    format: 'iife',
    name: 'NathHorrigan.com',
    sourcemap: true
  },
  plugins: [
      VuePlugin(),
      scss({ extract: './NathHorrigan/static/css/NathHorrigan.css' }),
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      standard(),
      babel({
        exclude: 'node_modules/**'
      }),
  ]
}