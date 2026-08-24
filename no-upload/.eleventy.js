// .eleventy.js
export default function (eleventyConfig) {
  // Pass-through copy
  eleventyConfig.addPassthroughCopy({
    "site-in/assets": "assets"
  });

  // Set directories using the setInputDirectory and setOutputDirectory methods
  eleventyConfig.setInputDirectory("site-in");
  eleventyConfig.setOutputDirectory("../site");
};
