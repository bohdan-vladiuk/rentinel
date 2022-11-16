/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // DB_LOCAL_URI: "mongodb://127.0.0.1:27017/rentinel",
    DB_LOCAL_URI:
      "mongodb+srv://sergio:sergio@rentinelcluster01.eyzkyxk.mongodb.net/test",
  },
};

module.exports = nextConfig;
