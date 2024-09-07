/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"raw.githubsercontent.com"
            }
        ]
    }
};

export default nextConfig;
