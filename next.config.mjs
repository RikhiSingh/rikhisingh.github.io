/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images:{
        remotePatterns:[
            {
                loader: "custom",
                loaderFile: "",
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
