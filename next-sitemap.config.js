/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || 'https://joao-carmassi.github.io/my-custom-badge/',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
