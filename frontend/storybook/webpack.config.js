const path = require("path");
const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (baseConfig, env, defaultConfig) => {

  // defaultConfig.module.rules.push({
  //   test: /\.vue$/,
  //   include: path.resolve(__dirname, '../components/**/*'),
  //   loader: 'vue-loader',
  //   options: {
  //     loaders: {
  //       scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
  //       sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
  //     }
  //   }
  // });
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('sass-loader')],
  });

  defaultConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      chunks: ['preview'],
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
    })
  );

  defaultConfig.resolve.alias['images'] = path.resolve(__dirname, '../../NathHorrigan/static/images')
  defaultConfig.resolve.alias['scss'] = path.resolve(__dirname, '../scss')
  defaultConfig.resolve.alias['fonts'] = path.resolve(__dirname, '../fonts')

  defaultConfig.plugins.push(new VueLoaderPlugin())

  return defaultConfig;
};