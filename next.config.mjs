/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['raw.githubusercontent.com'],
        unoptimized:true,
    },
    //output:'export'
    experimental:{
        appDir:true,
    }
};

export default nextConfig;
