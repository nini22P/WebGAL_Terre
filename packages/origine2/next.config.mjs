import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = withTM((['webgal-parser', 'monaco-editor']))({
  output: 'export',
  distDir: './dist',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  experimental: {
    swcPlugins: [
      ["@lingui/swc-plugin", {}],
    ],
    turbo: {},
  },
});
 
export default nextConfig;