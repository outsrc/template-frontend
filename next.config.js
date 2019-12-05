module.exports = {
  assetPrefix: process.env.BASE_PATH || '',
  exportTrailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH,
    appName: process.env.APP_NAME
  },
}
