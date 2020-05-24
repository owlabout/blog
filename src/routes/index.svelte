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
    background-position: 100% 25%;
    left: 0;
    top: 0;
  }
  .blog-info-container {
    position: absolute;
    top: calc(25% + 14px);
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
  .authors {
    position: absolute;
    bottom: 120px;
    left: 50%;
    width: 420px;
    transform: translateX(-50%);
  }
  .author {
    position: relative;
    display: inline-block;
  }
  .author.lukas {
    margin-right: 50px;
  }
  .author .author-desc {
    background: url('/images/author-desc-frame.svg');
    width: 175px;
    height: 157px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 0.7em;
    opacity: 0.7;
  }
  .author .author-desc .name {
    font-weight: 900;
    font-size: 1.6rem;
    opacity: 1;
    color: #3e3e3e;
  }
  .author .author-thumbnail {
    position: absolute;
  }
  .author .author-thumbnail.lukas {
    top: -60%;
    right: -30px;
  }
  .author .author-thumbnail.becca {
    bottom: -60%;
    left: -30px;
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
    <div class="author lukas">
      <div class="author-desc">
        <b class="name">Lukas Ehnle</b>
        <div>Fullstack Developer</div>
      </div>
      <div class="author-thumbnail lukas">
        <img src="/images/lukas-fp.png" alt="Lukas Ehnle">
      </div>
    </div>
    <div class="author ">
      <div class="author-desc">
        <b class="name">Becca Roberts</b>
        <div>Webdeveloper<br/>  Designer</div>
      </div>
      <div class="author-thumbnail becca">
        <img src="/images/becca-fp.png" alt="Becca Roberts">
      </div>
    </div>
  </div>
</div>
<div class="excerpts-container">
  {#each posts as post}
    <Excerpt {post} />
  {/each}
</div>
</div>
