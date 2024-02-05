/** @type {import('next').NextConfig} */
const { parsed: localEnv } = require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = {
  ...nextConfig,
  env: {
    API_LOCAL_URL: localEnv.API_LOCAL_URL,
    API_POKEMON_URL: localEnv.API_POKEMON_URL,
  },
}
