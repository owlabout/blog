<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`index.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { posts: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { lang } from "./_layout.svelte";
  import Excerpt from "../components/Excerpt.svelte";

  export let posts;

  onMount(() => {
    lang.set("de");
  });
</script>

<style>
  :global(.layout__start) {
    background: #efefef;
  }
  :global(.layout__start .container) {
    width: 86%;
    max-width: 102rem;
    margin: 0 auto;
  }
  .blog-intro {
    position: fixed;
    height: 100vh;
    width: 512px;
    background-color: #fff;
    background-image: url('/images/blog.svg');
    background-repeat: no-repeat;
    background-position: 100% 30%;
    left: 0;
    top: 0;
  }
  .blog-info-container {
    position: absolute;
    top: calc(30% + 14px);
    left: 50%;
    width: 310px;
    transform: translateX(-50%);
  }
  .excerpts-container {
    margin-left: 512px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<svelte:head>
  <title>OwlAbout Blog</title>
  <meta
    name="Description"
    content="Blog zu Themen aus den Bereichen Javascript, Vue, Svelte, PHP,
    Symfony und Softwareentwicklung allgemein." />
</svelte:head>

<div class="container">
<div class="blog-intro">
  <div class="blog-info-container">
    <img src="/app/logo-blog.svg" alt="OwlAbout Blog Logo" />
    <div class="descr">Blog zu Themen aus den Bereichen Javascript, Vue, Svelte, PHP,
    Symfony und Softwareentwicklung allgemein.</div>
  </div>
  <div class="authors">
  </div>
</div>
<div class="excerpts-container">
  {#each posts as post}
    <Excerpt {post} />
  {/each}
</div>
</div>
