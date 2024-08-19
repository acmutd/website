/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination:
          'https://discord.gg/ttB9HuaKsA',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
