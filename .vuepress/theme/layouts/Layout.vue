<template>
  <div class="content">
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
<style src="../styles/theme.styl" lang="stylus"></style>
<style src="../styles/override.styl" lang="stylus"></style>
