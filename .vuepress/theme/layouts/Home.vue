<template>
  <div class="container">
    <Excerpt v-for="page in pages" :page="page"/>
  </div>
</template>

<script>
import Excerpt from "./Excerpt.vue";

export default {
  components: { Excerpt },
  computed: {
    pages() {
      return this.$site.pages
        .filter(page => {
          return page.frontmatter.date;
        })
        .map(page => {
          const dmy = page.frontmatter.date.match(/(\d+)/g);
          page.published = new Date(dmy[0], dmy[1] - 1, dmy[2]);
          page.tags = [];
          return page;
        })
        .sort((a, b) => {
          return b.published - a.published;
        });
    }
  }
};
</script>

