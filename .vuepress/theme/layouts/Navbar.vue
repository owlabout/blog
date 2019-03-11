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

  a {
    font-weight: 300;
    color: $textColor;
  }

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

header nav.nav-links {
  flex-grow: 1;
  font-weight: 100;
  font-size: 2.8rem;
  list-style: none;
  margin: 0 2rem;
  padding: 0;
  display: flex;
  justify-content: center;

  .nav-item {
    display: block;
    margin: 0;
    line-height: inherit;
  }

  .nav-item a.nav-link {
    padding: 1rem 1.6rem;
    cursor: pointer;
    position: relative;
    border: 0;

    &:before, &:after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      transition: all 0.3s ease-in-out;
      transition-property: width, height;
      opacity: 0;
      border: 1px solid $primary;
    }

    &:before {
      top: 0.5rem;
      left: 0.5rem;
      border-right: 0;
      border-bottom: 0;
    }

    &:after {
      bottom: 0.5rem;
      right: 0.5rem;
      border-left: 0;
      border-top: 0;
    }

    &:hover:before, &:hover:after {
      opacity: 1;
      height: 1.2rem;
      width: 1.2rem;
    }
  }
}

.search-box {
  margin: 0;

  input {
    display: inline-block;
    font-size: 1.4rem;
    height: auto;
    padding: 0.5rem 1rem 0.5rem 3rem;
    background-size: 1.5rem;
    background-position: left 1rem center;

    &:focus {
      width: 16rem;
    }
  }
}
</style>
