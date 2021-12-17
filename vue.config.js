module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      filename: "index.html"
    }
  },
  css: {
    loaderOptions:{
      sass: {
        additionalData: `@import "@/assets/styles/main.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ?'/tourism/' : '/'
};