module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('posts');
    eleventyConfig.addPassthroughCopy('tutorials');
    return {
      passthroughFileCopy: true
    }
  }