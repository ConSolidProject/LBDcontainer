const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            // remotes: {
            //     store: `store@${domain}/store/latest/remoteEntry.js`,
            //     auth: `auth@${domain}/auth/latest/remoteEntry.js`,
            // },
            shared: {
                ...deps,
                react: {
                  singleton: true,
                  requiredVersion: deps.react,
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: deps["react-dom"],
                },
                "@material-ui/core": {
                  singleton: true,
                  requiredVersion: deps["@material-ui/core"],
                },
                "@material-ui/icons": {
                  singleton: true,
                  requiredVersion: deps["@material-ui/icons"],
                },
                events: {eager: true, requiredVersion: deps.events}
              }
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)