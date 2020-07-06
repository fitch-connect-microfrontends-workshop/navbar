module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: ["vue", "vue-router", "single-spa"],
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      https: true,
      sockHost: "localhost",
      sockPort: "8080"
    }
  }
};
