module.exports = {
  outputDir: "./gofun/",
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
  publicPath: "./"
};