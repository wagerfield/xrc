export default () => ({
  webpack(config) {
    // Alias buble to reduce bundle size
    // https://github.com/FormidableLabs/react-live
    const buble = require.resolve("@philpl/buble")
    config.resolve.alias.buble = buble
    return config
  }
})
