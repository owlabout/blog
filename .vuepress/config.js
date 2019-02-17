module.exports = {
  themeConfig: {
    head: [["link", { rel: "icon", href: `/favicon.png` }]],
    nav: [
      { text: "Neuste", link: "/" },
      { text: "Kategorien", link: "/categories/" },
      { text: "Tags", link: "/tags/" },
      { text: "Github", link: "https://github.com/owlabout" }
    ]
  },
  locales: {
    "/": {
      lang: "de-DE"
    },
    "/en/": {
      lang: "en-US"
    }
  },
  evergreen: false
};
