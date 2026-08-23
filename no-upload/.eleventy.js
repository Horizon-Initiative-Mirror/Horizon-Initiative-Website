// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site-in/assets");

  return {
    htmlTemplateEngine: "liquid",

    dir: {
      input: "site-in",
      output: "../site",
      includes: "_includes"
    }
  };
};
