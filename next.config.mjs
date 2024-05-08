/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:'images.pexels.com',
            },
        ],
    },
};

export default nextConfig;



// Default:
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
