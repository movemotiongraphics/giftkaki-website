const fs = require('fs');
const path = require('path');

// Base URL of your website
const BASE_URL = 'https://giftkakis.com';

// Static pages
const staticPages = [
  '',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/account',
  '/mothers-day',
];

// Dynamic routes
const dynamicRoutes = {
  '/home-based': ['flowers', 'cakes', 'tea', 'food', 'beverages', 'crafts'],
  '/gifts-for': ['birthday', 'valentines-day', 'anniversary', 'graduation', 'housewarming', 'thank-you', 'get-well', 'new-baby', 'retirement', 'promotion', 'souvenir'],
};

// Generate sitemap XML
function generateSitemap() {
  const pages = [...staticPages];

  // Add dynamic routes
  Object.entries(dynamicRoutes).forEach(([basePath, values]) => {
    values.forEach(value => {
      pages.push(`${basePath}/${value}`);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemap
  );

  console.log('Sitemap generated successfully!');
}

generateSitemap(); 