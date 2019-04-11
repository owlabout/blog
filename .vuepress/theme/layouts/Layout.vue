<template>
  <div class="layout-container" :class="$page.frontmatter.Layout.toLowerCase()">
    <Navbar/>
    <component v-if="$page.frontmatter.Layout" :is="$page.frontmatter.Layout"/>
    <div v-else class="container">
      <Content ref="content"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import nprogress from "nprogress";
import Navbar from "./Navbar.vue";
import Home from "./Home.vue";
import Footer from "./Footer.vue";
import { themeConfig } from "../../config.js";

export default {
  components: { Navbar, Home, Footer },

  methods: {
    addFavicon() {
      themeConfig.head.forEach(h => {
        const el = document.createElement(h[0]);
        Object.entries(h[1]).forEach(([attr, val]) => {
          el.setAttribute(attr, val);
        });
        document.getElementsByTagName("head")[0].appendChild(el);
      });
    },

    configureNprogress() {
      nprogress.configure({ showSpinner: false });

      this.$router.beforeEach((to, from, next) => {
        if (to.path !== from.path && !Vue.component(to.name)) {
          nprogress.start();
        }
        next();
      });

      this.$router.afterEach(() => {
        nprogress.done();
      });
    },

    watchSticky() {
      const observer = new MutationObserver((mutationsList, observer) => {
        let lastIndex = 0;
        const stickyElements = document.querySelectorAll(".sticky");
        if (stickyElements.length <= 0) return;
        const elements = [...stickyElements[0].parentNode.children];
        const numberOfElements = elements.length - 1;

        for (let i = stickyElements.length - 1; i >= 0; i--) {
          const sticky = stickyElements[i];
          const index = elements.indexOf(sticky);
          sticky.style["grid-row-end"] = `span ${numberOfElements -
            lastIndex -
            index}`;
          lastIndex = index;
        }
      });

      observer.observe(document.querySelector(".layout-container"), {
        childList: true,
        subtree: true
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.addFavicon();
    this.configureNprogress();
    this.watchSticky();
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus">
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.6rem;
}

.content {
  max-width: 68rem;
  margin: 0 auto;

  @media screen and (min-width: 1050px) {
    max-width: initial;
    display: grid;
    grid-column-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: minmax(0, 680px) 680px;
  }

  > * {
    grid-column-start: 2;
  }

  > .sticky {
    grid-column-start: 1;
    grid-row-end: span 5;

    .custom-block {
      margin-top: 1em;
      overflow: auto;
      max-width: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;

      @media screen and (min-width: 90rem) {
        position: sticky;
        top: 10rem;
      }
    }

    .custom-block-title {
      color: $codeTextColor;
      margin: 5px 0;
      padding: 0 2rem;
      font-weight: 300;
      font-size: 2rem;
      text-align: center;
    }
  }
}

.layout-container {
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
}
</style>

