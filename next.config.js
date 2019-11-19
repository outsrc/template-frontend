module.exports = {
  assetPrefix: process.env.BASE_PATH || '',
  exportTrailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  env: {
    BASE_PATH: process.env.BASE_PATH
  }
}
