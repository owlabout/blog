module.exports = {
  title: "OwlAbout Blog",
  themeConfig: {
    head: [["link", { rel: "icon", href: `/favicon.png` }]],
    nav: [{ text: "Neuste", link: "/" }, { text: "Tags", link: "/tags/" }],
    repo: "owlabout"
  },
  locales: {
    "/": {
      lang: "de-DE"
    }
  },
  permalink: "/:year/:month/:slug",
  plugins: [
    [
      "container",
      {
        type: "sticky",
        before: `<div class="sticky"><div class="custom-block">\n`,
        after(title) {
          if (title) title = `<p class="caption">${title}</p>`;
          return `${title}</div></div>\n`;
        }
      }
    ],
    [
      "container",
      {
        type: "full",
        before: `<div class="full custom-block">\n`,
        after(title) {
          if (title) title = `<p class="caption">${title}</p>`;
          return "${title}</div>\n";
        }
      }
    ]
  ],
  evergreen: false,
  chainWebpack: (config, isServer) => {
    config.module
      .rule("svg")
      .use("file-loader")
      .options({
        name: `assets/img/[name].[ext]?[hash:8]`
      });
    /**
     * customize markdown
     */
    config.module
      .rule("markdown")
      .use("frontmatter-file-loader")
      .loader(require.resolve("./frontmatter-file-loader.js"))
      .options({
        name: `assets/img/[name].[ext]?[hash:8]`,
        emitFile: true
      })
      .after("markdown-loader");
  }
};
