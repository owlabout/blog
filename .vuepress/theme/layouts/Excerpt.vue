<template>
  <div class="excerpt">
    <a class="post" :href="page.path">
      <h3>{{page.title}}</h3>
    </a>
  </div>
</template>

<style lang="scss">
.excerpt {
  h3 {
    margin: 0;
    padding: 0.5rem 0;
  }
}
</style>



<script>
export default {
  props: ["page"]
};
</script>

