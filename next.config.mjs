/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_BASE_URI: 'http://localhost:3000',
        API_URI_PROD: 'https://volunteer-manage.vercel.app/'
    },
};

export default nextConfig;
