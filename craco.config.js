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
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@api(.*)$': '<rootDir>/src/api$1',
        '^@layout(.*)$': '<rootDir>/src/layout$1',
        '^@primitives(.*)$': '<rootDir>/src/primitives$1',
      },
    }
  }
}
