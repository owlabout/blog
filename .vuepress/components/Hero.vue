<template>
  <div class="hero-container" v-bind:style="style">
    <img :src="image" :alt="alt" class="hero" />
  </div>
</template>

<script>
export default {
  props: ["src", "alt", "color"],
  computed: {
    image() {
      if (this.src) return this.source;
      const imagePath = this.$frontmatter.thumbnail;
      return this.$withBase(`/assets/img/${imagePath.slice(2)}`);
    },
    style() {
      const style = {};
      if (this.color) {
        style["--color-hero"] = this.color;
      }
      return style;
    }
  }
};
</script>

<style lang="stylus">
.hero-container {
  --color-hero: $lightred;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -2rem !important;
  background: linear-gradient(-45deg, var(--color-hero), transparent);

  .hero {
    display: block;
    max-height: 400px;
    max-width: 740px;
    margin: 0 auto;
  }
}
</style>
