<template>
  <div class="layout-container">
    <Navbar/>
    <component v-if="$page.frontmatter.layout" :is="$page.frontmatter.layout"/>
    <Content v-else/>
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

  data() {
    return {};
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);

    //add favicon
    themeConfig.head.forEach(h => {
      const el = document.createElement(h[0]);
      Object.entries(h[1]).forEach(([attr, val]) => {
        el.setAttribute(attr, val);
      });
      document.getElementsByTagName("head")[0].appendChild(el);
    });

    // configure progress bar
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
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus">
.content, .container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.6rem;
}

.layout-container {
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
}
</style>

