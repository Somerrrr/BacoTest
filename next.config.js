/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"], // 添加你使用的 Imgur 圖片主機名稱
  },
};

module.exports = nextConfig;
