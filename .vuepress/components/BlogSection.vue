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
    });
  }
};
</script>

<style lang="stylus">
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 1rem;

  &>* {
    max-width: 68rem;
  }

  div[class*='language-'] {
    flex-grow: 1;
    position: sticky;
    top: 10rem;
  }

  &>.section-content {
    flex-grow: 2;
    height: 200vh;
    padding: 1rem;

    p:first-of-type {
      margin-top: 0;
    }
  }
}
</style>
