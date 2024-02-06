// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("blog", function(image,author,post){return `<div class="row"><img class="galaxy" alt="galaxy" src="/images/${image}" width="500"/><div class="col"><div class="author">Author: ${author}</div><div class="post">${post}</div></div></div>`});

};