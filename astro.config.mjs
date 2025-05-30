import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { imageService } from "@unpic/astro/service";
import sitemap from '@astrojs/sitemap';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://clearpath-25.netlify.app",
  base: "/",
  image: {
    service: imageService({
      placeholder: "blurhash",
      layout: "constrained",
    }),
  },
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap({
      // Optional configuration
      filter: (page) => !page.includes('/admin/'), // Exclude admin pages
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(), // Use actual last modified date if available
    })
  ],
});