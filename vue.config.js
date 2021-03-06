/* eslint-env node */
const path = require('path');

process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',

  // where to output built files
  outputDir: 'dist',
  assetsDir: './',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: {
    output: {},
    resolve: {
      alias: {
        '@': resolveSrc('.'),
        '@src': resolveSrc('src'),
        '@components': resolveSrc('src/components'),
        '@assets': resolveSrc('src/assets'),
        '@state': resolveSrc('src/state'),
        '@store': resolveSrc('src/store')
      }
    },
    plugins: [],
    name: 'Sisphus'
  },

  // vue-loader options
  // https://vue-loader.vuejs.org/en/options.html
  //vueLoader: {},

  // generate sourceMap for production build?
  productionSourceMap: true,

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    extract: true,

    // enable CSS source maps?
    sourceMap: true,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false
  }
};
function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
