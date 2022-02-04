module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      filename: "index.html"
    }
  },
  css: {
    // modules: true,
    // loaderOptions:{
    //   sass: {
    //     additionalData: `@import "@/assets/styles/main.module.scss";`
    //   }
    // }
  },
  publicPath: process.env.NODE_ENV === 'production' ?'/tourism/' : '/'
};