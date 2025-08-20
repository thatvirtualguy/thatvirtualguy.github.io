// Site configuration
export const siteConfig = {
  // Site details from config.json:site
  title: "That Virtual Guy", // from config.json:site.title
  // description is used from existing site.ts, will be updated by config.json:metadata.meta_description
  // url is removed, Astro.site will be used

  // from config.json:site (logo related)
  logo: "/logo.svg",
  logoWidth: "200",
  logoHeight: "30",
  logoText: "That Virtual Guy",

  // SEO metadata from config.json:metadata
  author: "Admir Zukic", // from config.json:metadata.meta_author
  description: "Admir is That Virtual Guy bringing you tips & tricks for your virtual assistant business.", // from config.json:metadata.meta_description
  ogImage: "/images/og-image.png", // from config.json:metadata.meta_image (replaces defaultImage)

  // Pagination settings from config.json:settings
  postsPerPage: 11, // from config.json:settings.pagination
  summaryLength: 100, // from config.json:settings.summary_length
  
  // SEO settings (existing in site.ts)
  noindex: {
    tags: true, // Set to true to add noindex meta tag to tag pages
    categories: false, // Set to true to add noindex meta tag to category pages
    authors: false, // Set to true to add noindex meta tag to author pages
  },
  
  // Params from config.json:params
  copyright: "Since © 2025", // from config.json:params.copyright
};
