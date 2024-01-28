import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }, 
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true,
  }),
  integrations: [tailwind()]
});