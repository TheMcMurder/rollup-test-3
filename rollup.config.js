import postcss from 'rollup-plugin-postcss'
import { babel } from '@rollup/plugin-babel'
import emitEJS from 'rollup-plugin-emit-ejs'
import livereload from 'rollup-plugin-livereload'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import serve from 'rollup-plugin-serve'
import path from 'path'

const distDirectory = path.resolve('./dist/')
const prodMode = !process.env.ROLLUP_WATCH;
const mode = prodMode ? 'production' : 'development'

const config = {
  input: `./src/entry`,
  output: {
    dir: distDirectory,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.THEME_DARK': "true",
      'process.env.THEME_LIGHT': "false",
    }),
    commonjs({
      include: [/node_modules/, /fake_node_module/],
    }),
    nodeResolve({
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    emitEJS({
      src: 'src',
    }),
    postcss({
      extensions: ['.css'],
    }),
    mode !== 'production' &&
      serve({
        port: 8888,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        contentBase: distDirectory,
      }),
    mode !== 'production' &&
      livereload({
        watch: distDirectory,
      }),
  ],
};

export default config