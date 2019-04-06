<template>
  <a class="post" :href="page.path">
    <h3>{{page.title}}</h3>
  </a>
</template>

<script>
export default {
  props: ["page"]
};
</script>

