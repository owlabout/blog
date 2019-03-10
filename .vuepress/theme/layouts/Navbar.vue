<template>
  <header>
    <div class="container">
      <router-link :to="$localePath" class="logo home-link">
        <img src="../../public/logo.svg" alt="OwlAbout Logo">wlAbout
      </router-link>
      <NavLinks class="can-hide"/>
      <SearchBox v-if="$site.themeConfig.search !== false"/>
    </div>
  </header>
</template>

<script>
import SearchBox from "@SearchBox";
import NavLinks from "@parent-theme/components/NavLinks.vue";

export default {
  components: { NavLinks, SearchBox },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
header {
  border-bottom: 4px solid $primary;
  box-shadow: 0 0 10px 4px $lightgrey;
  position: sticky;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 8.5rem;
  background: $background;

  .container {
    padding: 1.6rem 1.6rem 0.64rem;
    display: flex;
    align-items: center;
  }

  .logo {
    align-items: center;
    font-family: 'VT323', monospace;
    font-size: 4.8rem;
    line-height: normal;

    img {
      max-width: 4.8rem;
      vertical-align: baseline;
      margin-right: 0.2rem;
      margin-bottom: -0.4rem;
    }
  }
}
</style>
