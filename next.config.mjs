// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains:['cdn.dummyjson.com']
//     }
// };

// export default nextConfig;

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
)

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dummyjson.com']
    }
}

export default withNextIntl(nextConfig)