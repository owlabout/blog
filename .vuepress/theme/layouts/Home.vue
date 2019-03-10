<template>
  <section>
    <div class="post" v-for="page in $site.pages" v-if="page.path != '/'">
      <h2>{{ page.title }}</h2>
      <a v-bind:href="page.path">mehr</a>
    </div>
  </section>
</template>
