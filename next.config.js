//
//
// module.exports = {
//     reactStrictMode: true,
//     optimizeFonts: true,
//     images: {
//        domains:["https://bestinbd.com", "http://localhost:3000/"]
//     },
//     webpack(config, options) {
//         return config;
//     }
// }


const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
// const withTM = require('next-transpile-modules')(['gsap']);
//const withImages = require('next-images')

// next.js configuration
const nextConfig = {
    // target: "serverless",
    crossOrigin: 'anonymous',
    reactStrictMode: true,
    trailingSlash: false,
    devIndicators: {
        autoPrerender: false,
    },
    images: {
        domains: ["res.cloudinary.com"], // Specify the domain where your images are hosted
    },

};

module.exports = withPlugins([withOptimizedImages], nextConfig);
