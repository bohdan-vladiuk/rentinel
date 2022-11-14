/**
 * @type {import('next').NextConfig}
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  '@babel/preset-react',
  'react-syntax-highlighter',
  'react-dnd',
  'react-dnd-html5-backend'
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com']
  },
  env: {
    REACT_APP_VERSION: process.env.REACT_APP_VERSION,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  }
});
