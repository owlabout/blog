<template>
  <section>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$el.querySelectorAll("pre code").forEach(el => {
        this.$el.prepend(el.parentNode.parentNode);
      });
      this.$el.querySelectorAll(".sticky").forEach(el => {
        this.$el.prepend(el);
      });
    });
  }
};
</script>

<style lang="stylus">
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;

  & > * {
    max-width: 68rem;
  }

  div[class*='language-'], .sticky {
    flex: 1 1 33%;
    position: sticky;
    top: 10rem;
    overflow: auto;
  }

  &>.section-content {
    flex: 2 0 66%;
    padding: 1rem;

    p:first-of-type {
      margin-top: 0;
    }
  }
}
</style>
