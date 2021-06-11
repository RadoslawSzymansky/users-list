const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@styles': path.resolve(__dirname, "src/styles/"),
      '@api': path.resolve(__dirname, "src/api/"),
      '@layout': path.resolve(__dirname, "src/layout/"),
      '@primitives': path.resolve(__dirname, "src/primitives/"),
    }
  }
}
