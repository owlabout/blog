module.exports = {
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
  evergreen: false
};
