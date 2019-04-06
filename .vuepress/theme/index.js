module.exports = {
  extend: "@vuepress/theme-default",
  plugins: [
    [
      "@vuepress/container",
      {
        type: "sticky",
        before: `<div class="sticky"><div class="custom-block">\n`,
        after(title) {
          if (title) title = `<p class="caption">${title}</p>`;
          return `${title}</div></div>\n`;
        }
      },
      "@vuepress/container",
      {
        type: "full",
        before: `<div class="full custom-block">\n`,
        after(title) {
          if (title) title = `<p class="caption">${title}</p>`;
          return "${title}</div>\n";
        }
      }
    ]
  ]
};
