const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTaskLists = require("markdown-it-task-lists");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "anchor-link",
        symbol: "#",
      }),
      level: [2, 3, 4],
    })
    .use(markdownItTaskLists, { enabled: true, label: true })
    .use(markdownItFootnote);

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPairedShortcode("callout", function (content, type = "tip") {
    const icons = {
      tip: "💡",
      warning: "⚠️",
      verified: "✅",
      note: "📝",
    };
    const icon = icons[type] || icons.tip;
    return `<div class="callout callout-${type}" role="note">
      <span class="callout-icon">${icon}</span>
      <div class="callout-content">${md.render(content)}</div>
    </div>`;
  });

  eleventyConfig.addPairedShortcode("codeblock", function (content, lang = "bash") {
    return `\`\`\`${lang}\n${content}\n\`\`\``;
  });

  eleventyConfig.addFilter("slugify", function (str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

eleventyConfig.addFilter("dateToRfc3339", function (date) {
  if (!date) return new Date().toISOString().split("T")[0];
  const d = new Date(date);
  return isNaN(d.getTime()) ? new Date().toISOString().split("T")[0] : d.toISOString().split("T")[0];
});

eleventyConfig.addFilter("date", function (date, format) {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  
  // Basic implementation of common formats
  if (format === "%B %d, %Y") {
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }
  return d.toLocaleDateString();
});

  eleventyConfig.addFilter("excerpt", function (str, length = 200) {
    if (!str) return "";
    const plainText = str.replace(/<[^>]*>/g, "");
    return plainText.substring(0, length) + (plainText.length > length ? "..." : "");
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .filter((item) => item.data.status === "published")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.addGlobalData("env", {
    production: process.env.NODE_ENV === "production",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};