/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: "https://my-portfolio-flask-api.herokuapp.com",
  },
  nextConfig,
};
