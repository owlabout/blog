<script context="module">
  import { writable } from "svelte/store";
  const { subscribe, set: setLang } = writable("de");
  export const lang = {
    subscribe,
    set(lang) {
      setLang(lang ? lang : "de");
    }
  };
</script>

<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  function updateLang(lang) {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }

  export let segment;
  $: classes = `layout__${segment ? segment : "start"}`;
  $: updateLang($lang);
</script>

<div class="layout {classes}">
  <!-- {#if true}
    <Nav />
  {/if} -->

  <main class={classes}>
    <slot />
  </main>
  <Footer />
</div>
