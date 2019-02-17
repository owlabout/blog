<template>
  <div class="content">
    <Navbar/>

    <Content/>
  </div>
</template>

<script>
import Vue from "vue";
import nprogress from "nprogress";
import Navbar from "./Navbar.vue";
import SWUpdatePopup from "./SWUpdatePopup.vue";
import { themeConfig } from "../config.js";

export default {
  components: { Navbar, SWUpdatePopup },

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
      this.isSidebarOpen = false;
    });

    this.$on("sw-updated", this.onSWUpdated);
  },

  methods: {
    onSWUpdated(e) {
      this.swUpdateEvent = e;
    }
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style src="./styles/override.styl" lang="stylus"></style>
