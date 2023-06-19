const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ["all", ".ngrok.io"],
    compress: true,
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
  },
});
