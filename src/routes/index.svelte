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
  import Excerpt from "../components/Excerpt.svelte";

  export let posts;
</script>

<style>
  :global(body) {
    background: #efefef;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>OwlAbout Blog</title>
</svelte:head>

<div class="container">
  {#each posts as post}
    <Excerpt {post} />
  {/each}
</div>
