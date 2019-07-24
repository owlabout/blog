<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`posts/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  :global(.container) {
    padding: 0 2rem;
    max-width: 102rem;
    margin: 0 auto;
  }

  .post :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }
  .post :global(ul) {
    line-height: 1.5;
  }
  .post :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="container">
  <div class="post">
    {@html post.html}
  </div>
</div>
