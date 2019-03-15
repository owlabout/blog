module.exports = {
  extend: "@vuepress/theme-default",
  plugins: [
    [
      "@vuepress/container",
      {
        type: "sticky",
        before(title) {
          if (title) title = `<p class="custom-block-title">${title}</p>`;
          return `<div class="sticky"><div class="custom-block">${title}\n`;
        },
        after: "</div></div>\n"
      }
    ]
  ]
};
