<template>
  <div class="theme-container">
    <Navbar/>
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Zur Startseite</router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

const msgs = [
  `Oh crap!`,
  `Du hast nichts gesehen o.O`,
  `That's a Four-Oh-Four.`,
  `Ok then...`
];

export default {
  components: { Navbar },

  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>
